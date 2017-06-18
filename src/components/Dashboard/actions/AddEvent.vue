<template>
	<div>
		<div class="content-title">Dodaj nowe wydarzenie</div>
		<div class="row">
			<div class="col-md-8">
				<div class="card">
					<div class="card-content">
						<form>
							<table style="width: 100%;">
								<tr>
									<td colspan="2"><input type="text" placeholder="Tytuł" v-model="form.name" required/></td>
								</tr>
								<tr>
									<td colspan="2"><input type="text" placeholder="Krótka treść notyfikacji" v-model="form.message" required/></td>
								</tr> 
								<tr>
									<td colspan="2"><input type="url" placeholder="Link do obrazka opisującego" v-model="form.image"/></td>
								</tr>
								<tr>
									<td colspan="2"><textarea placeholder="Pełna treść komunikatu" v-model="form.description" required></textarea></td>
								</tr> 
								<tr>
								<tr>
									<td>
										<select v-model.number="form.priority">
											<option value="0">Informacja ogólna</option>
											<option value="1">Komunikat spersonalizowany</option>
											<option value="2">Bardzo ważny komunikat</option>
										</select>
									</td>
									<td class="text-right"><button @click.prevent="addEvent">Zakończ dodawanie</button></td>
								</tr>
							</table>
						</form>
                    </div>
                </div>
			</div>
			<div class="col-md-4">
                <div class="card">
					<div class="card-title">Podgląd</div>
					<div class="card-content">
						Podgląd wiadomości na messengerze<br/>
						prv: <strong>{{ form.message }}</strong><br/>
						Podgląd maila<br/>
                        Podgląd wiadomości SMS<br/>
                    </div>
                </div>            
            </div>
		</div>
	</div>
</template>

<script>
	import auth from '../../../auth'
	import router from '../../../router'

	export default {
		data() {
			return {
				form: {
					name: '',
					description: '',
					image: '',
					message: '',
					group: '',
					priority: 0
				}
			}
		},
		methods: {
			addEvent: function() {
				console.log(this.form)
				this.$http.post('https://uek.maciekmm.net/events/', { 
					priority: this.form.priority, 
					name: this.form.name, 
					image: this.form.image, 
					message: this.form.message, 
					description: this.form.description 
				}, { headers: auth.getAuthHeader() }).then(data => {
					router.push({ name: 'events' })
				}, data => {
					console.log(data)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	input[type=text], input[type=url] {
		width: 100%;	
	}
	textarea {
		width: 100%;
		min-height: 200px;
		resize: vertical;
	}
</style>
