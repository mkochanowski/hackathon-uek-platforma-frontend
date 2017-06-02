<template>
	<div>
		<h1>Dashboard Frame</h1>
		<ul>
			<li><router-link :to="{ name: 'messages' }">Messages</router-link></li>
			<li><router-link :to="{ name: 'events' }">Events</router-link></li>
			<li><router-link :to="{ name: 'groups' }">User Groups</router-link></li>
			<li><router-link :to="{ name: 'timetable' }">Timetable</router-link></li>
			<li><router-link :to="{ name: 'analytics' }">Analytics</router-link></li>
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
