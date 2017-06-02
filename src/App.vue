<template>
	<div id="app">
		<ul>
			<li><router-link :to="{ name: 'home' }">Home</router-link></li>
			<li><router-link :to="{ name: 'login' }">Login</router-link></li>
			<li><router-link :to="{ name: 'register' }">Register</router-link></li>
			<li><router-link :to="{ name: 'dashboard' }">Dashboard</router-link></li>
		</ul>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
