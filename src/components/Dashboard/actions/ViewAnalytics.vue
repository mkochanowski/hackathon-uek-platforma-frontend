<template>
	<div>
		<router-link :to="{ name: 'analytics' }"><div class="content-title">← Powrót do pełnej listy statystyk</div></router-link>
		<div class="card">
			<div v-if="user.role==1">
				<div class="row">
					<div class="col-md-8">
						<div class="notice">Platforma UEK działa w trybie demonstracyjnym, dlatego dane na wykresie są symulowane - projekt nie jest publiczny i sam z siebie nie generuje ruchu.</div>
						<analytics-chart :data="chartData" :options="chartOptions" height.number="200"></analytics-chart>
					</div>
					<div class="col-md-4">
						<strong>Wszystkich interakcji:</strong> {{ all }}
						<hr/><div class="text-center">Log zachowań</div>
						<code>
						<div v-for="item in interactions">
							<strong>{{ dateName(item.timestamp) }}</strong><br/>Wydarzenie wyświetlono poprzez: <strong>{{ (item.channel == undefined ? 'aplikację webową' : item.channel) }}</strong><br/>
						</div>
						</code>
					</div>
				</div>
			</div>
			<div v-else class="card-content">
				Brak odpowiednich uprawnień. Skorzystaj z konta administratora.
			</div>
		</div>
	</div>
</template>

<script>
	import auth from '../../../auth'
	import router from '../../../router'
	import VueCharts from 'vue-chartjs'
	import AnalyticsChart from '@/components/AnalyticsChart'

	export default {
		components: { AnalyticsChart },
		data() {
			return {
				interactions: [],
				all: 0,
				data: [],
				user: {
					role: 0
				},
				chartData: {
					labels: [''],
					datasets: [
						{
							label: 'Messenger',
							borderColor: '#2d58ff',
							data: [0, 2, 1],
							lineTension: 0,
							fill: false,
							pointRadius: 5
						},
						{
							label: 'SMS',
							borderColor: '#cc0000',
							data: [0, 0, 3],
							lineTension: 0,
							fill: false,
							pointRadius: 5
						},
						{
							label: 'Aplikacja webowa',
							borderColor: '#333',
							data: [9, 6, 3],
							lineTension: 0,
							fill: false,
							pointRadius: 5
						},
						{
							label: 'E-mail',
							borderColor: '#42f4a4',
							data: [1, 3, 2],
							lineTension: 0,
							fill: false,
							pointRadius: 5
						}
					]
				},
				chartOptions: {
					scales: {
						xAxes: [{
							gridLines: {
								display: true
							}
						}],
						yAxes: [{
							gridLines: {
								display: true
							},
							ticks: {
								max: 40
							}
						}]
					}
				}
			}
		},
		created() {
			this.getEvent();
			this.user.role = auth.role();
			this.chartLabels();
			this.calculateData();
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
				}, data => {
					console.log(data.err)
				})
			},
			calculateData: function() {
				for(var i = 3; i < this.chartData.labels.length; i++) {
					var ds = this.chartData.datasets
					for(var j = 0; j< ds.length; j++) {
						var min = 0
						var max = 30
						var value = Math.floor(Math.random() * (max - min + 1)) + min 
						if(value%2 || value%3 || value%5)	
							value /= 2
						if(value<0) value=0
						ds[j].data.push(value)
					}
				}
				console.log(this.chartData)
			},
			chartLabels: function() {
				var start = new Date(2017, 5, 10, 12, 12, 12) //manual change for debugging
				var current = new Date()

				var lab = []

				do {
					start.setDate(start.getDate()+1)
					lab.push(this.dateName(start))
					console.log(this.dateName(start))
				} while(start < current)
				this.chartData.labels = lab;
				console.log(lab)
			},
			dateName: function(time) {
				time = new Date(time)
				var day = ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota']
				return this.dateZeros(time.getDate()) + '.' + this.dateZeros(time.getMonth()+1) + '.' + time.getFullYear() + ' (' + day[time.getDay()] + ')'
			},
			dateZeros: function(param) {
				return param < 10 ? '0' + param : '' + param
			}
		}
	}
</script>

<style lang="scss" scoped>
	.notice {
		background-color: #333;
		color: #fff;
		border-radius: 5px;
		padding: 2em;
		font-size: 1.3em;
	}
</style>
