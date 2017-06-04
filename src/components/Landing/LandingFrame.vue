<template>
	<div>
		<div id="top-bar">
			<router-link :to="{ name: 'home' }" class="link"><img src="../../assets/logo.png" alt="Logo UEK" class="logo"/>Platforma UEK</router-link>
			<router-link :to="{ name: 'login' }" class="link">Zaloguj się</router-link>
			<router-link :to="{ name: 'register' }" class="link">Zarejestruj się</router-link>
			<router-link :to="{ name: 'dashboard' }" class="link"><strong>Panel</strong></router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	$size: 80px;

	.logo {
		width: $size;
		height: $size;
	}
	.link {
		margin: 1em;
		font-size: 1.5em;
	}
		.link:hover {
			text-decoration: none;
			color: #333;
			opacity: 0.8;
		}
</style>
