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
	$accent: #006505;

	button {
		background-color: #fff;
		color: $accent;
		border: none;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		padding: 0.5em;
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
		font-size: 1.3em;
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
		font-size: 2em;
		font-weight: 400;
	}
	.card-content {
		padding: 1em;
	}
	td {
		padding: 0.5em;
	}
	tr.header, td.header {
		font-weight: 700;
	}
</style>
