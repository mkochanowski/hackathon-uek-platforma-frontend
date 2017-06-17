<template>
	<div>
		<div id="top-bar">
			<div class="container">
				<router-link :to="{ name: 'dashboard' }" class="link"><img src="../../assets/uek.png" alt="Logo UEK" class="logo"/></router-link>
				<router-link :to="{ name: 'events' }" class="link" exact>Wydarzenia</router-link>
				<router-link :to="{ name: 'timetable' }" class="link" exact>Plan zajęć</router-link>
				<router-link :to="{ name: 'analytics' }" class="link" exact>Zaangażowanie</router-link>
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
	$accent: #006505;

	.router-link-active {
		font-weight: 700;
	}

	button {
		background-color: #fff;
		color: $accent;
		border: none;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		padding: 0.5em;
		padding-left: 2em;
		padding-right: 2em;
		font-size: 1.3em;
		border-radius: 5px;
		box-shadow: 0 0 2px $color-secondary;
		transition: all 0.3s ease;
	}
		button:hover, button:focus {
			background-color: $accent;
			color: #fff;
		}
	.link {
		margin: 1em;
		font-size: 1.3em;
		transition: all 0.3s ease;
	}
		.link:hover {
			color: #333;
			opacity: 0.5;
		}
	.content-title {
		color: $color-secondary;
		font-weight: 300;
		font-size: 2em;
		margin-bottom: 1em;
	}
	.navbar-nav {
		height: 80px;
	}
	li {
		height: 80px;
		padding-top: 15px;
	}
	.card-title {
		color: #555;
		font-size: 2em;
		font-weight: 300;
	}
	.card-content {
		padding: 1em;
	}
	td {
		padding: 0.5em;
	}
	tr.header, 
	td.header {
		font-weight: 700;
		background-color: #eee;
	}
	hr {
		background-color: #ddd; 
		height: 1px; 
		border: 0;
	}
	select {
		border: none;
		background: none;
	}
</style>
