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
			timetable.setScope(8, 23)

			this.$http.get('https://uek.maciekmm.net/timetable/', { headers: auth.getAuthHeader() }).then((data) => {
				var day = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota']

				function dateZeros(param) {
					return param < 10 ? '0' + param : '' + param
				}

				function dateScope() {
					var current = new Date()
					var start = new Date()
					var end = new Date()

					// start.setDate(start.getDate() - current.getDay()+1)
					start.setDate(start.getDate()-14 - current.getDay()+1)
					start = new Date(start.getFullYear(), start.getMonth(), start.getDate())
					// end.setDate(end.getDate()+7 - current.getDay()+1)
					end.setDate(end.getDate()-7 - current.getDay()+1)
					end = new Date(end.getFullYear(), end.getMonth(), end.getDate())

					return { start: start, end: end }
				}

				function dateName(time) {
					return day[time.getDay()] + ' ' + dateZeros(time.getDate()) + '.' + dateZeros(time.getMonth()+1) + '.' + time.getFullYear()
				}

				var scope = dateScope()
				// console.log('Current date scope: ' + scope.start + ' to ' + scope.end)
				var locations = []
				var timeStart = scope.start
				
				// Create locations / labels
				for(var i = 0; i < 7; i++) {
					var time = timeStart
					if(i>0)
						time.setDate(time.getDate() + 1)
					
					var location = dateName(time)
					locations.push(location)
				}
				timetable.addLocations(locations)

				var classes = JSON.parse(data.body).classes				
				console.log(classes)				
				var calendar = []

				// Add events to the calendar
				for(var i = 0; i < classes.length; i++) {
					var item = classes[i]
					var date = new Date(item.start)
					scope = dateScope()

					if(date > scope.start && date < scope.end) {
						var options = {
							data: item
						}
						console.log(item)
						timetable.addEvent(item.class, dateName(date), new Date(item.start), new Date(item.end), options)
					}
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

<style lang="scss" scoped>
</style>
