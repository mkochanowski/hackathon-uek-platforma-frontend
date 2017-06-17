<template>
	<div>
		<router-link :to="{ name: 'events' }"><div class="content-title">← Powrót do listy wydarzeń</div></router-link>
			<div class="card">
				<div class="card-content">
					{{ $route.params.eventId }}<br/>
					{{ $route.params.channelId }}
				</div>
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
				}, data => {
					console.log(data.err)
				})
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
</style>
