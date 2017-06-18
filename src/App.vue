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
	$card-background: #F4F4F4;
	$size: 80px;

	.logo {
		width: 2*$size;
		height: $size;
	}
	.link-top {
		font-weight: 300;
		margin: 1em;
		font-size: 1.7em;
		transition: all 0.3s ease;
	}
		.link-top:hover {
			text-decoration: none;
			color: #333;
			opacity: 0.5;
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

	.main-content {
		margin: 0.5em;
	}
	.content-title {
		margin-top: 1.5em;
	}
	@media only screen and (min-width : 1170px) {
		.main-content {
			margin: 5em;
		}
		.content-title {
			margin-top: 0;
		}
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
		font-weight: 300;
	}
	.card {
		margin-top: 1em;
		margin-bottom: 1em;
		padding: 1em;
		background-color: $card-background; 
		border-radius: 5px;
		box-shadow: 0px 0px 25px 5px #E7E7E7;
	}
	/* @media only screen and (max-width : 768px) {
		.col-md-4, .col-md-6, .col-md-8, .col-md-12 {
			padding: 0;
		}
		.card {
			padding: 0.7em;
		}
		.main-content {
			margin: 0;
		}
	} */
</style>
