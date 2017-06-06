<template>
	<div id="app">
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				app_name: 'Platforma UEK',
				app_demo: true
			}
		}
	}
</script>

<style lang="scss">
	$background_primary: #EFEFEF;
	$background_top: #fff;
	$accent: #006505;

	$size: 80px;

	.logo {
		width: 2*$size;
		height: $size;
	}
	.link {
		font-weight: 300;
		margin: 1em;
		font-size: 1.7em;
	}
		.link:hover {
			text-decoration: none;
			color: #333;
			opacity: 0.8;
		}
	
	.fade-enter-active, .fade-leave-active {
		transition-property: opacity;
		transition-duration: .15s;
	}

	.fade-enter-active {
		transition-delay: .15s;
	}

	.fade-enter, .fade-leave-active {
		opacity: 0
	}

	body, html {
		font-family: 'Roboto', sans-serif;
		background-color: $background_primary;
		padding: 0;
		margin: 0;
	}
	a, a:focus, a:hover {
		text-decoration: none;
		color: $accent;
	}
	#top-bar {
		background-color: $background_top;
		padding-left: 2em;
		padding-right: 2em;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		box-shadow: 0px 0px 25px 5px #E7E7E7;
	}
</style>
