<template>
	<div>
		<div class="content-title">Plan zajęć</div>
		<div class="card">
			<div class="card-content">
				<div class="timetable"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../../auth'
	export default {
		data() {
			return {
				items: []
			}
		},
		created() {
			var timetable = new Timetable()
			timetable.setScope(9, 23)

			this.$http.get('https://uek.maciekmm.net/timetable/', { headers: auth.getAuthHeader() }).then((data) => {
				var d = JSON.parse(data.body)
				d.classes = d.classes.slice(0, 5)
				var item = d.classes				
				timetable.addLocations(['poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'])
				for(var i = 0; i < 5; i++) {
					timetable.addEvent(item[i].class, 'test', new Date(item[i].start), new Date(item[i].end))
				}
			
				var renderer = new Timetable.Renderer(timetable);
				renderer.draw('.timetable');
			},
			(data) => {
				console.log(data.err)
			})
		}
	}
</script>

<style scoped>
</style>
