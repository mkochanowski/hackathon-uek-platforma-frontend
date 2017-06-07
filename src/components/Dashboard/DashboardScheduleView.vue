<template>
	<div>
		<div class="content-title">Plan zajęć</div>
		<div class="card">
			<div class="card-content">
				<table style="width: 100%;">
					<tr class="header">
						<td>Godzina</td>
						<td v-for="day in days">{{ day }}</td>
					</tr>
					<tr v-for="n in sample">
						<td>od <strong>{{ hour }}</strong> do <strong>{{ hour }}</strong></td>
						<td v-for="day in days">Lorem {{ n }}</td>
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
				days: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
				sample: 5,
				hour: "21:37"
			}
		}
	}
</script>

<style scoped>
</style>
