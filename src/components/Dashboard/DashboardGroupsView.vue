<template>
	<div>
		<div class="content-title">Grupy docelowe</div>
		<div class="card">
			<div class="card-content">
				<table style="width: 100%;">
					<tr class="header">
						<td>#</td><td>Nazwa grupy</td><td>Ilość osób</td><td>Przesłanych komunikatów</td>
					</tr>
					<tr v-for="item in groups">
						<td>{{ item.id }}</td>
						<td>{{ item.name }}</td>
						<td>{{ item.people }}</td>
						<td>{{ item.sent }}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				groups: [{
					id: 2137,
					name: 'Testowa',
					people: 5,
					sent: 10
				}]
			}
		}
	}
</script>

<style scoped>
</style>
