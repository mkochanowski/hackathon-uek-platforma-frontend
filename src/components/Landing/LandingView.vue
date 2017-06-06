<template>
	<div class="landing">
		<div id="channels" class="row text-center panel-padding">
			<div class="panel-header">Zróżnicowane kanały komunikacji</div>
			<div class="panel-content">Z aplikacji <strong>Facebook Messenger</strong> korzysta już ponad <strong>miliard</strong> osób na całym świecie.</div>
		</div>
		<div id="events" class="row text-center panel-padding">
			<div class="skew">
				<div class="panel-header">Prostota rozbudowy</div>
				<div class="panel-content"><span class="name">Platforma UEK</span> została tak zaprojektowana, aby dodawanie obsługi nowych kanałów komunikacji było jak najprostsze.</div>
			</div>
		</div>
		<div id="schedule" class="row text-center panel-padding">
			<div class="skew">
				<div class="panel-header">Czytelny harmonogram zajęć</div>
				<div class="panel-content">Tekst tekst tekst, tekst tekst</div>
			</div>
		</div>
		<div id="analytics" class="row text-center panel-padding">
			<div class="panel-header">Kontrola zaangażowania odbiorców</div>
			<div class="panel-content">Tekst tekst tekst, tekst tekst</div>
		</div>
		<div id="demo" class="row text-center panel-padding">
			<!--<div class="panel-header">Zobacz jak to działa</div>-->
		</div>
		<div id="credits" class="row text-center panel-padding">
			<div class="panel-header">Autorzy</div>
			<div class="col-md-6 author-block">
				<div class="author">Marek Kochanowski</div>
				<div class="description">Front-end</div>
				<div class="link"><a href="https://kochanow.ski" target="_blank">kochanow.ski</a></div>
			</div>
			<div class="col-md-6 author-block">
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
	$accent: #006505;
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
		margin-bottom: 2em;
	}
	.skew {
		transform: skewY(10deg);
	}
	.name {
		font-weight: 700;
		color: $accent;
	}
	.panel-padding {
		padding-top: $panel_padding;
		padding-bottom: $panel_padding;
		padding-right: 0.5*$panel_padding;
		padding-left: 0.5*$panel_padding;
	}
	.call-to-action {
		padding: 0.5em;
		font-size: 2em;
		font-weight: 700;
		background: #fff;
		border: none;
		border-radius: 15px;
		text-transform: uppercase;
	}
	#channels {

	}
	#schedule {
		transform: skewY(-10deg);
	}
	#events {
		background: white;
		transform: skewY(-10deg);

	}
	#analytics {

	}
	#demo {

	}
	#credits {
		box-shadow: inset 0px 0px 15px #1B1B1B;
		background-color: $black;
		color: $white;
		font-weight: 300;
	}
		#credits .author {
			font-size: 2em;
			font-weight: 700;
		}
		#credits .author-block {
			margin-top: 3em;
			margin-bottom: 3em;
		}
</style>
