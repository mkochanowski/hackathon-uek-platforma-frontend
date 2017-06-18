<template>
	<div>
		<div class="content-title">Wydarzenia</div>
		<div class="row">
			<div class="col-md-12">
				<input type="text" class="search" v-model="search" placeholder="Wyszukaj wydarzenie..."/>
			</div>
			<!--<div class="col-md-2 col-sm-3">
				<button class="filter">Filtruj</button>
			</div>-->
			<div class="col-md-12" v-if="user.role==1">
				<router-link :to="{ name: 'events.add' }">
					<button>Dodaj nowe wydarzenie</button>
				</router-link>
			</div>
			<div v-for="event in filteredEvents" class="col-md-6 col-sm-6">
				<router-link :to="{ name: 'events.view', params: { eventId: event.ID } }">
					<div class="event" :style="background(event.image)">
						<div class="event-header">{{ event.name }}</div>
						<div class="event-description">{{ event.description }}</div>
						<div class="event-category"><strong :class="priority(event.priority).class">{{ priority(event.priority).text }}</strong></div>
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
				eventClass: '',
				search: '',
				user: {
					role: 0
				}
			}
		},
		created() {
			this.$http.get('https://uek.maciekmm.net/events/', { headers: auth.getAuthHeader() }).then((data) => {
				var d = data.body.reverse();
				this.events = d;
			},
			(data) => {
				console.log(data.err)
			})

			this.user.role = auth.role();
		},
		computed: {
			filteredEvents: function() {
				var e = this.events
				return e.filter(event => {
					var name = event.name.toLowerCase()
					return name.match(this.search.toLowerCase())
				})
			}
		},
		methods: {

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
	.event {
		margin-top: 2em;
		padding: 1em;
		background: #fff;
		min-height: 150px;
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
	.search {
		margin-bottom: 1em;
		background-color: #ddd;
		color: #333;
		width: 100%;
		box-shadow: none;
	}
	.filter {
		margin-bottom: 1em;
		width: 100%;
	}
</style>
