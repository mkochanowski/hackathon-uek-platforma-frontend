<template>
	<div id="app">
		<router-view></router-view>
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

	body, html {
		font-family: 'Roboto', sans-serif;
		background-color: $background_primary;
		padding: 0;
		margin: 0;
	}
	a {
		color: $accent;
	}
	#top-bar {
		background-color: $background_top;
		padding-left: 2em;
		padding-right: 2em;
	}
</style>
