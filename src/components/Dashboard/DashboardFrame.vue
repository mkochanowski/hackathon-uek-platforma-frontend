<template>
	<div>
		<ul>
			<li><router-link :to="{ name: 'home' }"><strong>Strona główna</strong></router-link></li>
			<li><router-link :to="{ name: 'messages' }">Komunikaty</router-link></li>
			<li><router-link :to="{ name: 'events' }">Wydarzenia</router-link></li>
			<li><router-link :to="{ name: 'schedule' }">Plan zajęć</router-link></li>
			<li><router-link :to="{ name: 'groups' }">Grupy studenckie</router-link></li>
			<li><router-link :to="{ name: 'analytics' }">Statystyka</router-link></li>
		</ul>
		<h1>Dashboard Frame</h1>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
</style>
