<template>
	<div class="landing">
		<div id="channels" class="row text-center">
			<div class="panel-header">Zróżnicowane kanały komunikacji</div>
			...
		</div>
		<div id="events" class="row text-center">
			<div class="panel-header">Przejrzysty widok wydarzeń</div>
			...
		</div>
		<div id="schedule" class="row text-center">
			<div class="panel-header">Czytelny harmonogram zajęć</div>
			...
		</div>
		<div id="analytics" class="row text-center">
			<div class="panel-header">Kontrola zaangażowania odbiorców</div>
			...
		</div>
		<div id="demo" class="row text-center">
			<div class="panel-header">Wypróbuj</div>
			...
		</div>
		<div id="credits" class="row text-center">
			<div class="panel-header">Autorzy</div>
			<br/>
			<div class="col-md-6">
				<div class="author">Marek Kochanowski</div>
				<div class="description">Front-end</div>
				<div class="link"><a href="https://kochanow.ski" target="_blank">kochanow.ski</a></div>
			</div>
			<div class="col-md-6">
				<div class="author">Maciej Mionskowski</div>
				<div class="description">Back-end</div>
				<div class="link"><a href="https://mionskowski.pl" target="_blank">mionskowski.pl</a></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	$black: #2F2F2F;
	$white: #eee;
	$panel_padding: 8em;

	a {
		color: #00B709;	
	}

	.landing {
		font-weight: 300;
	}
	.row {
		margin: 0;
	}
	.panel-header {
		font-size: 2em;
	}

	#channels {
		padding: $panel_padding;
	}
	#schedule {
		padding: $panel_padding;
	}
	#events {
		padding: $panel_padding;
	}
	#analytics {
		padding: $panel_padding;
	}
	#demo {
		padding: $panel_padding;
	}
	#credits {
		padding: $panel_padding;
		background-color: $black;
		color: $white;
		font-weight: 300
	}
		#credits .author {
			font-size: 2em;
			font-weight: 700;
		}
</style>
