<template>
	<div>
		<ul>
			<li><router-link :to="{ name: 'login' }">Zaloguj się</router-link></li>
			<li><router-link :to="{ name: 'register' }">Zarejestruj się</router-link></li>
			<li><router-link :to="{ name: 'dashboard' }"><strong>Panel</strong></router-link></li>
		</ul>
		<h1>Landing Frame</h1>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
</style>
