<template>
	<div>
		<div class="content-title">Grupy docelowe</div>
		<div class="card">
			<div class="card-content">
				<table style="width: 100%;">
					<tr class="header">
						<td>Typ</td><td>Nazwa grupy</td><td>Kod grupy</td>
					</tr>
					<tr v-for="(item, index) in groups">
						<td>{{ index }}</td>
						<td><div class="group" v-for="(g, i) in item">{{ i }}</div></td>
						<td><div class="code" v-for="(g, i) in item">{{ g }}</div></td>
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
				groups: []
			}
		},
		created() {
			this.$http.get('https://uek.maciekmm.net/timetable/groups/', { headers: auth.getAuthHeader() }).then((data) => {
				this.groups = data.body;
				console.log(this.groups)
			},
			(data) => {
				console.log(data.err)
			})
		}
	}
</script>

<style scoped>
	.code {
		color: blue;
	}
	.group {
		font-weight: 300;
	}
</style>
