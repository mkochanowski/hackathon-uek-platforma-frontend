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
								<td class="hidden-xs">Odbiorca</td>
								<td>Odbieranie</td>
							</tr>
							<tr v-for="item in subscriptions">
								<td style="text-transform: capitalize;">{{ item.channel }}</td>
								<td class="hidden-xs"><span v-if="item.channel == 'messenger'">UID </span><strong>{{ item.channel_id }}</strong></td>
								<td>
									<select>
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
				<div class="col-md-8" v-for="event in events" style="width: 100%;">
					<div class="content-title visible-md visible-lg" style="margin-left: -0.5em; margin-top: 1em;">Ostatnie wydarzenie</div>
					<router-link :to="{ name: 'events.view', params: { eventId: event.ID } }">
						<div class="event" :style="background(event.image)">
							<div class="event-header">{{ event.name }}</div>
							<div class="event-description">{{ event.description }}</div>
							<div class="event-category"><strong :class="priority(event.priority).class">{{ priority(event.priority).text }}</strong></div>
						</div>
					</router-link>
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
					var d = data.body.reverse();
					
					this.events = d.slice(0, 1);
					console.log(this.events)
				}, data => {
					console.log(data.err)
				})
			},
			background: function(image) {
				if(image != '' && image != undefined) 
					if(image.substr(0, 4) == 'http')
						return 'background: url(' + image + '); background-size: cover; color: #fff'
				return ''
			},
			priority: function(priority) {
				if(priority != '' && priority != undefined) {
					if(priority == 2)
						return { class: 'pr-most', text: 'Bardzo ważny komunikat' }
					else return { class: 'pr-target', text: 'Komunikat spersonalizowany' }
				} else
					return { class: 'pr-common', text: 'Informacja ogólna' }
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

	.event {
		margin-top: 1em;
		margin-left: -1em;
		margin-right: -1em;
		padding: 1em;
		background: #fff;
		border-radius: 5px;
		letter-spacing: 0.03em;
	}
		.event-header {
			font-size: 2em;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden; 
		}
		.event-description {
			line-height: 1em;
			height: 2em;
			text-overflow: ellipsis;
			white-space: pre-wrap;
			overflow: hidden; 
		}
		.event-category {
			margin-top: 2em;
		}	
</style>
