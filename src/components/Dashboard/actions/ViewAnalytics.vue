<template>
	<div>
		<router-link :to="{ name: 'analytics' }"><div class="content-title">← Powrót do pełnej listy statystyk</div></router-link>
		<div class="card">
			Wszystkich interakcji: {{ all }}
			<div v-for="item in interactions">
				Platform: {{ item.channel }} <br/>
				Timestamp: {{ item.timestamp }} <br/>
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../../../auth'
	import router from '../../../router'

	export default {
		data() {
			return {
				interactions: [],
				all: 0,
				data: []
			}
		},
		created() {
			this.getEvent();
		},
		methods: {
			getEvent: function() {
				var path = 'https://uek.maciekmm.net/events/' + this.$route.params.eventId + '/interactions/'
				var c = this.$route.params.channelId
				if(c != undefined && c != '')
					path += '?channel=' + c
				this.$http.get(path, { headers: auth.getAuthHeader() }).then(data => {
					console.log(data)
					this.interactions = data.body
					this.all = this.interactions.length
					calculateData(this.interactions)
				}, data => {
					console.log(data.err)
				})
			},
			calculateData: function(data) {
				for(var i = 0; i < data.length; i++) {
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
