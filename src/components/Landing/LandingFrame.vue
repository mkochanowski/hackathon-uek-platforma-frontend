<template>
	<div>
		<div id="top-bar">
			<div class="container">
				<router-link :to="{ name: 'home' }" class="link"><img src="../../assets/uek.png" alt="Logo UEK" class="logo"/></router-link>
				<router-link :to="{ name: 'login' }" class="link" style="float: right;"><strong>Panel</strong></router-link>
			</div>
		</div>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>

</style>
