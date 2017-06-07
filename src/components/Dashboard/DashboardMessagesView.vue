<template>
	<div>
		<div class="content-title">Komunikaty</div>
		<div class="card">
			<div class="card-content">
				<table>
					<tr class="header">
						<td>#</td>
						<td>Tytuł komunikatu</td>
						<td>Platforma</td>
					</tr>
					<tr v-for="item in messages">
						<td>{{ item.id }}</td>
						<td>{{ item.title }}</td>
						<td><div v-for="platform in item.platforms">{{ platform }}</div></td>
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
				messages: [{
					id: 1,
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate risus non orci commodo, nec dignissim purus mollis. Vivamus et purus eros. ',
					platforms: ['Messenger', 'Mail', 'SMS']
				}]
			}
		}
	}
</script>

<style scoped>
</style>
