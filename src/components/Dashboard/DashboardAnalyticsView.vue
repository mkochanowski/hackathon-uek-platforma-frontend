<template>
	<div>
		<div class="content-title">Zaangażowanie</div>
		<div class="card">
			<div class="card-content">
				<table style="width: 100%;">
					<tr class="header">
						<td style="width: 5%;">UID</td>
						<td style="width: 35%;">Tytuł wydarzenia</td>
						<td style="width: 30%;">Opis</td>
						<td style="width: 20%;">Klasyfikacja priorytetu</td>
						<td style="width: 10%;"></td>
					</tr>
					<tr v-for="event in events">
						<td><strong>{{ event.ID }}</strong></td>
						<td class="line">{{ event.name.substr(0, 50) }}<span v-if="event.name.length>50">...</span></td>
						<td class="line">{{ event.description.substr(0, 70) }}<span v-if="event.description.length>700">...</span></td>
						<td><strong :class="priority(event.priority).class">{{ priority(event.priority).text }}</strong></td>
						<td><router-link :to="{ name: 'analytics.view', params: { eventId: event.ID } }"><button>Statystyki</button></router-link></td>
					</tr>
				</table>
			</div>
			</div>
	</div>
</template>

<script>
	import auth from '../../auth'
	export default {
		data() {
			return {
				events: [],
				eventStyle: '',
				eventClass: ''
			}
		},
		created() {
			this.$http.get('https://uek.maciekmm.net/events/', { headers: auth.getAuthHeader() }).then((data) => {
				console.log(data.body)
				this.events = data.body;
			},
			(data) => {
				console.log(data.err)
			})
		},
		methods: {
			/* eventStyles: function(event) {
				if(event.image != '') {
					
					// noone cares about checking

					/* this.$http.get(event.image).then(response => {
						console.log(response)
						if(response.status == 200 && response.url != '') {
							var image = event.image
							this.eventStyle = 'background: url(' + event.image + ');'
						} else {
							this.eventStyle = ''
						}
					})
					
					this.eventStyle = 'background: url(' + event.image + ');'
					this.eventClass = 'has-image'
				} else {
					this.eventStyle = ''
					this.eventClass = ''
				}
			}, */
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
		}	
	}
</script>

<style lang="scss" scoped>
	td {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.line {
		height: 50px;
		text-overflow: ellipsis;
		white-space: pre-wrap;
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
