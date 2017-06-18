<template>
	<div>
		<router-link :to="{ name: 'analytics' }"><div class="content-title">← Powrót do pełnej listy statystyk</div></router-link>
		<div class="card">
			
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
		}
	}
</script>

<style lang="scss" scoped>

</style>
