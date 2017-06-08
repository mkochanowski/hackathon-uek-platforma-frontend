<template>
	<div>
		<div class="content-title">Wydarzenia</div>
		<div class="row">
			<div class="col-md-12">
				<router-link :to="{ name: 'events.add' }">
					<button>Dodaj nowe wydarzenie</button>
				</router-link>
			</div>
			<div v-for="n in 9" class="col-md-4">
				Wydarzenie
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	.event {

		border-radius: 5px;
	}
</style>
