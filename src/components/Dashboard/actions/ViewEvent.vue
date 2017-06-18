<template>
	<div>
		<router-link :to="{ name: 'events' }"><div class="content-title">← Powrót do listy wydarzeń</div></router-link>
		<div class="card">
			<div :style="background(event.image)" class="event-header">
				<h1>{{ event.name }}</h1>
				Klasyfikacja: <strong :class="priority(event.priority).class">{{ priority(event.priority).text }}</strong>
			</div>
			<div class="card-content">
				<div class="event-received" v-if="$route.params.channelId">Powiadomienie otrzymane z kanału <strong style="text-transform: capitalize;">{{ $route.params.channelId }}</strong>. Edytuj swoje ustawienia powiadomień w <router-link :to="{ name: 'dashboard' }">panelu subskrypcji.</router-link></div>
				<div class="event-description">{{ event.description }}</div>
			</div>

			<hr/>
			<router-link :to="{ name: 'analytics.view', param: { eventId: event.ID } }"><button>Badaj zaangażowanie studentów</button></router-link>
			<button class="button-red" @click="deleteEvent" style="margin-left: 1em;">Usuń wydarzenie</button>
		</div>
	</div>
</template>

<script>
	import auth from '../../../auth'
	import router from '../../../router'

	export default {
		data() {
			return {
				event: []
			}
		},
		created() {
			this.getEvent();
		},
		methods: {
			getEvent: function() {
				var path = 'https://uek.maciekmm.net/events/' + this.$route.params.eventId + '/'
				var c = this.$route.params.channelId
				if(c != undefined && c != '')
					path += '?channel=' + c
				this.$http.get(path, { headers: auth.getAuthHeader() }).then(data => {
					console.log(data)
					this.event = data.body
				}, data => {
					console.log(data.err)
				})
			},
			deleteEvent: function() {
				var conf = confirm("Czy na pewno chcesz usunąć to wydarzenie?")
				if(conf) {
					var path = 'https://uek.maciekmm.net/events/' + this.$route.params.eventId + '/'
					this.$http.delete(path, { headers: auth.getAuthHeader() }).then(data => {
						console.log(data)
						router.push({ name: 'events' })
					}, data => {
						console.log(data.err)
					})
				}
			},
			background: function(image) {
				if(image != '' && image != undefined) 
					if(image.substr(0, 4) == 'http')
						return 'background: url(' + image + '); background-size: cover;'
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
	h1 {
		letter-spacing: 0.03em;
	}
	.event-header {
		letter-spacing: 0.05em;
		margin-top: -1em;
		margin-left: -1em;
		margin-right: -1em;
		padding: 2em;
		border-radius: 5px 5px 0px 0px;
		background-color: #333;
		color: #fff;
		text-shadow: 0 0 5px #000;
	}
	.event-received {
		background-color: #fff;
		padding: 0.5em;
		border-radius: 5px;
		font-size: 1.1em;
		font-weight: 300;
		text-align: center;
		color: grey;
		margin-bottom: 1em;
	}
	.event-description {
		margin-top: 1em;
		letter-spacing: 0.03em;
		font-size: 1.2em;
		line-height: 2em;
		white-space: pre-wrap;
		text-overflow: auto;
	}
</style>
