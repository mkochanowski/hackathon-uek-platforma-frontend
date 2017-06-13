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
									<td><input type="text" placeholder="Tytuł" v-model="form.name" required/></td>
								</tr>
								<tr>
									<td><input type="text" placeholder="Krótka treść notyfikacji" v-model="form.message" required/></td>
								</tr> 
								<tr>
									<td><input type="text" placeholder="Link do obrazka opisującego" v-model="form.image"/></td>
								</tr>
								<tr>
									<td><textarea placeholder="Pełna treść komunikatu" v-model="form.description" required></textarea></td>
								</tr> 
								<tr>
									<td>priority</td>
								</tr>
								<tr>
									<td class="text-right"><input @click.prevent="addEvent" type="submit"/></td>
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
					group: ''
				}
			}
		},
		methods: {
			addEvent: function() {
				this.$http.post('https://uek.maciekmm.net/events/', { priority: 0, name: this.form.name, image: this.form.image, message: this.form.message, description: this.form.description }, { headers: auth.getAuthHeader() }).then(data => {
					router.push({ name: 'events' })
				}, data => {
					console.log(data.err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	input[type=text] {
		width: 100%;	
	}
	textarea {
		width: 100%;
		min-height: 200px;
	}
</style>
