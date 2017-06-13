<template>
	<div>
		<div class="content-title">Panel główny</div>
		<div class="row">
			<div class="col-md-8">
				<div class="card">
					<div class="card-title">Subskrypcje</div>
					<div class="card-content">
						<table style="width: 100%;">
							<tr>
								<td>Messenger</td>
								<td>Web</td>
								<td>Mail</td>
								<td>SMS</td>
							</tr>
							<tr>
								<td class="sub-active">Włączone</td>
								<td class="sub-not-active">Wyłączone</td>
								<td class="sub-not-active">Wyłączone</td>
								<td class="sub-not-active">Wyłączone</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="card">
					<div class="card-title">Ostatnie komunikaty</div>
					<div class="card-content">
						<table>
							<tr class="header">
								<td>#</td>
								<td>name</td>
								<td>subtitle</td>
							</tr>
							<tr v-for="event in events">
								<td>{{ event.ID }}</td>
								<td>{{ event.name }}</td>
								<td>{{ event.message }}</td>
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

			var pic = "../../static/avatar-teacher.png"
			if(user.name == "Jan Kowalski")
				pic = "../../static/avatar-student.png"
			return {
				user: user,
				avatar: pic,
				events: []
			}
		},
		methods: {

		},
		created() {
			this.$http.get('https://uek.maciekmm.net/events/', { headers: auth.getAuthHeader() }).then((data) => {
				console.log(data.body)
				this.events = data.body.slice(0, 10);
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
	.sub-active {
		color: green;
	}
	.sub-not-active {
		color: red;
	}
</style>
