<template>
	<div>
		<div class="content-title">Skonfiguruj nową subskrypcję</div>
			<div class="card">
				<div class="card-content">
					<form>
					<div id="step1">
						<div class="card-title"><span class="step">1</span>Wybierz jedną z dostępnych platform</div>
						<div class="step-content">
							<label>
								<input type="radio" value="messenger" v-model="platform"> Facebook Messenger<br/>
								<div class="choice-desc">Otrzymuj krótkie notyfikacje tekstowe oraz szczegóły dotyczące wydarzeń przy pomocy opcjonalnego obrazka lub linku.</div>
							</label><br/>
							<label>
								<input type="radio" value="mail" v-model="platform"> E-mail<br/>
								<div class="choice-desc">Otrzymuj komunikaty bogate w dobrze poformatowaną treść, która jest w całości przekazywana w wiadomości e-mail - bez zbędnego klikania w odnośniki.</div>
							</label><br/>
							<label>
								<input type="radio" value="web" v-model="platform"> Web (powiadomienia w przeglądarce)
								<div class="choice-desc">Otrzymuj krótkie powiadomienie tekstowe wraz z przekierowaniem do pełnej treści na stronie internetowej.</div>
							</label><br/>
							<label>
								<input type="radio" value="sms" v-model="platform"> SMS
								<div class="choice-desc">Otrzymuj komunikaty o małej objętości, długości maksymalnie kilkudziesięciu słów.</div>
							</label><br/>
						</div>
					</div>
					
					<transition name="fade">
						<div id="step2" v-if="platform">
							<div class="card-title"><span class="step">2</span>Skonfiguruj kanał komunikacji</div>
							<div class="step-content">
								<div class="config" v-if="platform == 'messenger'">
									<div class="config-content">
										<div class="config-title">Komunikat</div>
										<div class="fb-send-to-messenger"
										messenger_app_id="303773933400957"
										page_id="307034089754268"
										:data-ref="messengerData"
										color="white"
										size="large"></div>
										W tym miejscu pojawia się przycisk autoryzacyjny dla Messengera.<br/>Zarówno logowanie jak i autoryzacja z Facebook Messengerem <strong>są zaimplementowane.</strong><br/><br/>Niestety, Facebook ogranicza dostęp do funkcjonalności osobom spoza grupy zdefiniowanej jako "niepubliczni testerzy" dla aplikacji, które nie zostały zgłoszone i zaakceptowane w procesie certyfikacji.<br/><br/>Ze względu na to, iż <span class="name">Platforma UEK</span> jest prototypem, aplikacja będzie mogła zostać zgłoszona do certyfikacji w przypadku wyrażenia chęci na jej wdrożenie do produkcji i po uzyskaniu wszystkich wymaganych pozwoleń.</div>
								</div>  
								<div class="config" v-if="platform == 'mail'">
									<div class="config-content">
										<div class="config-title">Konfiguracja</div>
										Na zdefiniowany adres e-mail orzymywać będziesz wiadomości o wybranym priorytecie.
										<hr/>
										<input type="email" v-model="formMail" placeholder="Adres e-mail" required/> 
									</div>
								</div>
								<div class="config" v-if="platform == 'web'">
									<div class="config-content">
										<div class="config-title">Konfiguracja</div>
										Powiadomienia w przeglądarce nie wymagają konfiguracji innej niż wydanie pozwolenia na wysyłanie powiadomień przez <span class="name">Platformę UEK</span>.
									</div>
								</div>
								<div class="config" v-if="platform == 'sms'">
									<div class="config-content">
										<div class="config-title">Konfiguracja</div>
										Dla kanału SMS zalecamy ustawienie priorytetu na <i>"Otrzymuj tylko wyjątkowo ważne"</i>.
										<hr/>
										<input type="tel" v-model="formSMS" placeholder="Numer telefonu" required/> 
									</div>
								</div>
							</div>
						</div>
					</transition>

					<transition name="fade">
						<div id="step2" v-if="finishedConfig()">
							<div class="card-title"><span class="step">3</span>Potwierdzenie</div>
							<div class="step-content">
								<button @click="addSubscription">Potwierdź i zakończ konfigurację</button>
							</div>
						</div>
					</transition>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../../../auth'
	import router from '../../../router'

	window.fbAsyncInit = function() {
		FB.init({
			appId: "303773933400957",
			xfbml: true,
			version: "v2.6"
		});

		FB.Event.subscribe('send_to_messenger', function(e) {
			console.log(e)
			if (e.event == 'opt_in') {
				//window.top.location = '#/action/messenger';
			}
		});
	};

	(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) { return; }
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	export default {
		data() {
			var token = localStorage.getItem('jwt_token')
			var decode = jwt_decode(token)
			var user = decode.User
			var d = user.ID + ':0' //pls no
			return {
				platform: '',
				config: '',
				formSMS: '',
				formMail: '',
				messengerData: d
			}
		},
		methods: {
			addSubscription: function() {
				var p = this.platform
				
				if(p == 'mail') var c = this.formMail
				else if(p == 'sms') var c = this.formSMS

				if(p == 'mail' || p == 'sms' || p == 'web') {// exclude messenger
					this.$http.post('https://uek.maciekmm.net/subscriptions/', { 
						priority: 0, 
						channel: p,
						channel_id: c
					}, { headers: auth.getAuthHeader() }).then(data => {
						router.push({ name: 'dashboard' })
					}, data => {
						console.log(data.err)
					})
				}
			},
			finishedConfig: function() {
				if(this.platform == 'sms' && this.formSMS != '')
					return true;
				else if(this.platform == 'mail' && this.formMail != '')
					return true;
				return false;
			},
		}
	}
</script>

<style lang="scss" scoped>
	input[type=text] {
		width: 100%;	
	}
	input[type=tel], input[type=email] {
		width: 300px;
		padding: 0.5em;
		border-radius: 5px;
	}
	textarea {
		width: 100%;
		min-height: 200px;
	}
	label {
		margin-top: 1em;
		font-weight: 700;
		font-size: 2em;
		color: #006505;
	}
	.name {
		font-weight: 400;
		color: #006505;
	}
	.step {
		padding-top: 0.5em;
		padding-left: 0.8em;
		padding-right: 0.8em;
		padding-bottom: 0.5em;
		border-radius: 50%;
		background-color: #333;
		color: #fff;
		width: 50px;
		height: 50px;
		font-weight: 700;
		margin-right: 1em;
	}
	.step-content {
		margin-top: 3em;
		margin-bottom: 3em;
	}
	.choice-desc {
		font-weight: 300;
		color: grey;
		font-size: 0.7em;
	}
	.config {
		text-align: center;
	}
	.config-content {
		background-color: #fff;
		color: grey;
		padding: 2em;
		border-radius: 5px;
		font-size: 1.2em;
		font-weight: 300;
	}
	.config-title {
		color: #333; 
		margin-bottom: 1em;
		font-size: 2em;
	}
</style>
