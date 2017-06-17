<template>
	<div>
		<div class="content-title">Wydarzenia</div>
		<div class="row">
			<div class="col-md-12">
				<router-link :to="{ name: 'events.add' }">
					<button>Dodaj nowe wydarzenie</button>
				</router-link>
			</div>
			<div v-for="event in events" class="col-md-6 col-sm-6">
				<router-link :to="{ name: 'events.view', params: { eventId: event.ID } }">
					<div class="event" :style="background(event.image)">
						<div class="event-header">{{ event.name }}</div>
						<div class="event-description">{{ event.description }}</div>
					</div>
				</router-link>
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
						return 'background: url(' + image + '); color: #fff'
				return ''
			}
		}	
	}
</script>

<style lang="scss" scoped>
	.event {
		margin-top: 2em;
		padding: 1em;
		background: #fff;
		height: 150px;
		border-radius: 5px;
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
</style>
