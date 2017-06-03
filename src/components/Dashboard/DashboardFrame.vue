<template>
	<div>
		<h1>Dashboard Frame</h1>
		<ul>
			<li><router-link :to="{ name: 'messages' }">Komunikaty</router-link></li>
			<li><router-link :to="{ name: 'events' }">Wydarzenia</router-link></li>
			<li><router-link :to="{ name: 'schedule' }">Plan zajęć</router-link></li>
			<li><router-link :to="{ name: 'groups' }">Grupy studenckie</router-link></li>
			<li><router-link :to="{ name: 'analytics' }">Statystyka</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
</style>
