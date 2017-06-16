<template>
	<div>
		<div class="content-title">Wydarzenia</div>
		<div class="row">
			<div class="col-md-12">
				<router-link :to="{ name: 'events.add' }">
					<button>Dodaj nowe wydarzenie</button>
				</router-link>
			</div>
			<div v-for="event in events" class="col-md-4 col-sm-6">
				<div class="event">
					<div class="event-header">{{ event.name }}</div>
					{{ event.description }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../../auth'
	export default {
		data() {
			return {
				events: []
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
		}	
	}
</script>

<style lang="scss" scoped>
	.event {
		margin-top: 1em;
		padding: 2em;
		background: #fff;
		height: 150px;
		border-radius: 5px;
	}
		.event-header {
			font-size: 2em;
		}
</style>
