<template>
	<div>
		<div class="content-title">Panel główny</div>
		<div class="row">
			<div class="col-md-8">
				<div class="card">
					<div class="card-title">Ostatnie komunikaty</div>
					<div class="card-content">
						<table>
							<tr class="header">
								<td>#</td>
								<td>Tytuł komunikatu</td>
								<td>Platforma</td>
							</tr>
							<tr v-for="item in messages">
								<td>{{ item.id }}</td>
								<td>{{ item.title }}</td>
								<td><div v-for="platform in item.platforms">{{ platform }}</div></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-content">
						<div class="text-center avatar">
							<img :src="avatar" alt="Avatar image"/><br/>
							<div class="card-title" style="margin-top: 1em;">{{ user.name }}</div>
							<table style="margin: 0 auto; margin-top: 1em;">
								<tr>
									<td class="header">Grupa:</td><td>{{ user.group }}</td>
								</tr>
								<tr>
									<td class="header">Typ konta:</td><td>{{ user.role }}</td>
								</tr>
							</table>
							<hr/>
							<router-link :to="{ name: 'login' }" class="link">Wyloguj</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../../auth'
	export default {
		data() {
			var token = localStorage.getItem('jwt_token')
			var decode = jwt_decode(token)
			var user = decode.User
			console.log(user)

			var pic = "../../static/avatar-teacher.png"
			if(user.name == "Jan Kowalski")
				pic = "../../static/avatar-student.png"
			return {
				user: user,
				avatar: pic,

				messages: []
			}
		},
		created() {
			this.$http.get('https://uek.maciekmm.net/events/', { headers: auth.getAuthHeader() }).then((data) => {
				console.log(data);
				this.messages = data
			},
			(data) => {
				console.log(data.err)
			})
		}
	}
</script>

<style lang="scss" scoped>
	.avatar {
		margin: 2em;
	}
	.email {
		font-size: 0.7em;
		color: grey;
	}
</style>
