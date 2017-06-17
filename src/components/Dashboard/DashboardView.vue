<template>
	<div>
		<div class="content-title">Panel główny</div>
		<div class="row">
			<div class="col-md-8">
				<div class="card">
					<div class="card-title">Aktywne subskrypcje</div>
					<div class="card-content">
						<table style="width: 100%;">
							<tr class="header">
								<td>Platforma</td>
								<td>Odbiorca</td>
								<td>Odbieranie</td>
							</tr>
							<tr v-for="item in subscriptions">
								<td style="text-transform: capitalize;">{{ item.channel }}</td>
								<td><span v-if="item.channel == 'messenger'">UID </span><strong>{{ item.channel_id }}</strong></td>
								<td>
									<select>
										<option disabled value="">Odbieraj na "{{ item.channel }}"</option>
										<option value="0">wszystkie wiadomości</option>
										<option value="1">tylko spersonalizowane</option>
										<option value="2">tylko wyjątkowo ważne</option>
									</select>
								</td>
							</tr>
						</table>
						<hr/>
						<router-link class="link link-bold" style="margin-left: 0;" :to="{ name: 'subs.add' }">Dodaj nową subskrypcję</router-link>							
					</div>
				</div>
				<div class="card">
					<div class="card-title">Ostatnie komunikaty</div>
					<div class="card-content">
						<table style="width: 100%;">
							<tr class="header">
								<td>#</td>
								<td>name</td>
								<td>subtitle</td>
							</tr>
							<tr v-for="(event, index) in events">
								<td>{{ index+1 }}</td>
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
							<div v-if="user.role == 1">Administrator</div>
							<div v-else>Student</div>
							<!--<table style="margin: 0 auto; margin-top: 1em;">
								<tr>
									<td class="header" colspan="2">Nazwa wydziału</td>
								</tr>
								<tr>
									<td class="header">Grupa</td><td>KrDUTr1011 <router-link class="timetable" :to="{ name: 'timetable' }">{{ user.group }}</router-link></td>
								</tr>
							</table>-->
							<hr/>
							<router-link :to="{ name: 'login' }" class="link link-bold">Wyloguj</router-link>
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
				events: [],
				subscriptions: []
			}
		},
		methods: {
			getSubscriptions: function() {
				this.$http.get('https://uek.maciekmm.net/subscriptions/', { headers: auth.getAuthHeader() }).then(data => {
					this.subscriptions = data.body;
					console.log(this.subscriptions)
				}, data => {
					console.log(data.err)
				})
			},
			getEvents: function() {
				this.$http.get('https://uek.maciekmm.net/events/', { headers: auth.getAuthHeader() }).then(data => {
					this.events = data.body;
				}, data => {
					console.log(data.err)
				})
			}
		},
		created() {
			this.getSubscriptions();
			this.getEvents();
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
	.timetable {
		color: blue;
		font-weight: 700;
	}
	.link-bold {
		font-weight: 400;
	}
</style>
