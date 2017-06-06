<template>
	<div>
		<div id="top-bar">
			<div class="container">
				<router-link :to="{ name: 'dashboard' }" class="link"><img src="../../assets/uek.png" alt="Logo UEK" class="logo"/></router-link>
				<router-link :to="{ name: 'messages' }" class="link">Komunikaty</router-link>
				<router-link :to="{ name: 'events' }" class="link">Wydarzenia</router-link>
				<router-link :to="{ name: 'schedule' }" class="link">Plan zajęć</router-link>
				<router-link :to="{ name: 'groups' }" class="link">Grupy docelowe</router-link>
				<router-link :to="{ name: 'analytics' }" class="link">Zaangażowanie</router-link>
			</div>
		</div>
		<div class="container-fluid">
			<div class="main-content">
				<transition name="fade">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	$color-secondary: #888;

	.content-title {
		color: $color-secondary;
		font-weight: 300;
		font-size: 2em;
		margin-bottom: 1em;
	}
</style>
