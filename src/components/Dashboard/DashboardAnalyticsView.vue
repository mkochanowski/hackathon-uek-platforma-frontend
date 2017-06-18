<template>
	<div>
		<div class="content-title">Zaangażowanie</div>
		<div class="card">
			<div class="card-content">
				<table style="width: 100%;">
					<tr class="header">
						<td style="width: 5%;" class="hidden-xs">UID</td>
						<td style="width: 35%;">Tytuł wydarzenia</td>
						<td style="width: 50%;" class="hidden-xs">Opis</td>
						<td style="width: 10%;"></td>
					</tr>
					<tr v-for="event in events">
						<td class="hidden-xs"><strong>{{ event.ID }}</strong></td>
						<td class="line">{{ event.name.substr(0, 50) }}<span v-if="event.name.length>50">...</span><br/><strong :class="priority(event.priority).class">{{ priority(event.priority).text }}</strong></td>
						<td class="line hidden-xs">{{ event.description.substr(0, 150) }}<span v-if="event.description.length>150">...</span></td>
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
