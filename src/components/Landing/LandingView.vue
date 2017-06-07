<template>
	<div class="landing">
		<div id="intro" class="row text-center panel-padding">
			<div class="panel-header">Prostota i innowacyjność</div>
			<div class="panel-content">Ponad <strong>miliard</strong> osób na całym świecie korzysta z <span class="messenger">Facebook Messengera</span>.<br/>W Polsce, dwie najpopularniejsze grupy to użytkownicy w wieku <strong>19-25</strong> oraz <strong>26-33</strong> lat.<br/>To czyni tę platformę <strong>idealną</strong> do przesyłania spersonalizowanych powiadomień dla studentów.</div><div class="mockup-1 responsive"></div>
		</div>
		<div id="channels" class="text-center panel-padding skew-back">
			<div class="skew">
				<div class="panel-header">Co, jeśli nie <span class="messenger">Messenger</span>?</div>
				<div class="panel-content"><span class="name">Platforma UEK</span> wspiera wiele kanałów komunikacji z użytkownikiem końcowym.<br/> Dodatkowo, została zaprojektowana z myślą o tym, aby dodawanie obsługi nowych kanałów było jak najprostsze.</div>
				<div class="panel-header" style="margin-top: 2em;">Obecnie obsługiwane</div>
				<div class="row">
					<div class="container icon-text">
						<div class="col-md-4 text-center">
							<img src="../../assets/icon/mail.svg" class="icon" alt="mail"/><br/>
							Powiadomienia E-mail
						</div>
						<div class="col-md-4 text-center">
							<img src="../../assets/icon/globe.svg" class="icon" alt="mail"/><br/>
							Powiadomienia w przeglądarce
						</div>
						<div class="col-md-4 text-center">
							<img src="../../assets/icon/message-circle.svg" class="icon" alt="mail"/><br/>
							Powiadomienia SMS <span class="disclaimer">*</span>
						</div>
					</div>
				</div>
				<div class="panel-content disclaimer" style="margin-top: 2em;">* - powiadomienia SMS wysyłane przez operatora komórkowego mogą wiązać się z kosztami zależnymi od cennika dostawcy usługi</div>
			</div>
		</div>
		<div id="analytics" class="row text-center panel-padding">
			<div class="panel-header">Kontrola zaangażowania odbiorców</div>
			<div class="panel-content">Jak użytkownicy reagują na Twoje notyfikacje?<br/>Który jest ich ulubiony kanał komunikacji, który jest najbardziej efektywny?<br/>Teraz to wszystko <strong>jest oczywiste</strong>.</div>
		</div>
		<div id="schedule" class="row text-center panel-padding skew-back">
			<div class="skew">
				<div class="panel-header">Czytelny harmonogram zajęć</div>
				<div class="panel-content">A jeśli notyfikacje nie wystarczą?<br/>Dobrze jest mieć wszystko pod ręką.</div>
			</div>
		</div>
		<div id="stack" class="row text-center panel-padding">
			<div class="panel-header">Tylko sprawdzone rozwiązania</div>
			<div class="panel-content"><strong>Docker, Go, Vue.js</strong> - to niezawodny zestaw. Dodatkowo, jak modnie brzmi!</div>
			<div class="row" style="margin-top: 3em;">
					<div class="container icon-text">
						<div class="col-md-3 col-sm-6 col-xs-6">
							<img src="../../assets/icon/docker.png" alt="mail"/><br/>
							Docker
						</div>
						<div class="col-md-3 col-sm-6 col-xs-6">
							<img src="../../assets/icon/go.png" alt="mail"/><br/>
							Golang
						</div>
						<div class="col-md-3 col-sm-6 col-xs-6">
							<img src="../../assets/icon/js.png" alt="mail"/><br/>
							Vue.js
						</div>
						<div class="col-md-3 col-sm-6 col-xs-6">
							<img src="../../assets/icon/postgre.png" alt="mail"/><br/>
							PostgreSQL
						</div>
					</div>
				</div>
		</div>
		<router-link :to="{ name: 'login' }"><div id="demo" class="row text-center panel-padding">
			<div class="panel-header"><strong>Zobacz jak to działa</strong></div>
			<div class="panel-content">Wypróbuj na własnej skórze!</div>
		</div></router-link>
		<div id="credits" class="row text-center panel-padding">
			<div class="panel-header">Autorzy</div>
			<div class="col-md-6 author-block">
				<div class="author">Marek Kochanowski</div>
				<div class="description">Front-end</div>
				<div class="link"><a href="https://kochanow.ski" target="_blank">kochanow.ski</a></div>
			</div>
			<div class="col-md-6 author-block">
				<div class="author">Maciej Mionskowski</div>
				<div class="description">Back-end</div>
				<div class="link"><a href="https://mionskowski.pl" target="_blank">mionskowski.pl</a></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	$black: #2F2F2F;
	$white: #eee;
	$accent: #006505;
	$panel_padding: 8em;

	a {
		color: #00B709;	
	}

	.landing {
		font-weight: 300;
	}
	.row {
		margin: 0;
	}
	.panel-header {
		font-size: 2em;
		margin-bottom: 0.7em;
	}
	.panel-content {
		font-size: 1.2em;
		line-height: 1.8em;
	}
	.skew {
		transform: skewY(10deg);
	}
	.skew-back {
		transform: skewY(-10deg);
	}
	.name {
		font-weight: 700;
		color: $accent;
	}
	.icon {
		margin-bottom: 1em;
		width: 48px;
		height: 48px;
	}
		.icon-text {
			font-size: 1.5em;
			font-weight: 700;
		}
		.disclaimer {
			color: grey;
			font-weight: 700;
			font-size: 0.9em;
		}
		.icon-tech {
			font-size: 5em;
		}
	.messenger {
		font-weight: 300;
		color: #0084ff;
	}
	.panel-padding {
		padding-top: $panel_padding;
		padding-bottom: $panel_padding;
		padding-right: 0.5*$panel_padding;
		padding-left: 0.5*$panel_padding;
	}
	.call-to-action {
		padding: 0.5em;
		font-size: 2em;
		font-weight: 700;
		background: #fff;
		border: none;
		border-radius: 15px;
		text-transform: uppercase;
	}
	.mockup-1 {
		margin-top: 5em;
		margin-bottom: -30em;
		margin-left: auto;
		margin-right: auto;
		background: url(../../assets/mockup-channels.png) no-repeat;
		background-position: center;
		width: 1000px;
		height: 618px;
	}
	#intro {

	}
	#schedule {
		background: #E7E7E7;
		box-shadow: 0px 0px 25px 5px #eee;
	}
	#channels {
		background: white;
		box-shadow: 0px 0px 25px 5px #E7E7E7;
	}
	#analytics {

	}
	#demo {
		background-color: #E7E7E7;
		transition: all 0.3s ease;
	}
		#demo:hover {
			background-color: #E2E2E2;
			color: #333;
		}
	#credits {
		box-shadow: inset 0px 0px 15px #1B1B1B;
		background-color: $black;
		color: $white;
		font-weight: 300;
	}
		#credits .author {
			font-size: 2em;
			font-weight: 700;
		}
		#credits .author-block {
			margin-top: 3em;
			margin-bottom: 3em;
		}
</style>
