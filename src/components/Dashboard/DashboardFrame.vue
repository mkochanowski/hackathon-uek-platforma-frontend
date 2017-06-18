<template>
	<div>
		<div id="top-bar">
			<div class="container">
				<router-link :to="{ name: 'dashboard' }" class="link"><img src="../../assets/uek.png" alt="Logo UEK" class="logo"/></router-link>
				<router-link :to="{ name: 'events' }" class="link">Wydarzenia</router-link>
				<router-link :to="{ name: 'timetable' }" class="link">Plan zajęć</router-link>
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
	import auth from '../../auth'

	export default {
		created() {
			var decode = jwt_decode(localStorage.getItem('jwt_token'))
			var exp = decode.exp
			var now = Date.now();
			console.log(now + ' to ' + exp)
		}
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
		transition: all 0.3s ease;
	}
		button:hover, button:focus {
			background-color: $accent;
			color: #fff;
		},
		button:hover.button-red, button:focus.button-red {
			background-color: #cc0000;
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

	input, textarea {
		border: none;
		padding: 0.8em;
		border-radius: 5px;
		outline: none;
		transition: all .3s ease;
	}
		input:focus, textarea:focus {
			box-shadow: inset 0 0 3px #999;
			background-color: #fcfcfc;
		}
	.pr-common {
		color: #888;
	}
	.pr-most {
		color: #cc0000;
	}
	.pr-target {
		color: #2d58ff;
	}
</style>
