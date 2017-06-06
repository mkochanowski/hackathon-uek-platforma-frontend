<template>
	<div>
		<div class="container">
			<div class="main-content">
				<div class="card notice text-center" style="margin: 0; margin-bottom: 3em;">
					Po kliknięciu na wybrany przycisk zostaniesz automatycznie zalogowany na jedno z kont demonstracyjnych
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="left-panel additional">
							<div class="text">Widok studenta</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="right-panel additional">
							<div class="text">Widok administratora</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	.notice {
		font-size: 1.5em;
	}
	.credentials {
		font-size: 0.5em;
	}
	.additional {
		border-radius: 5px;
		color: #fff;
		text-shadow: 0 0 30px #000;
		font-size: 2em;
		filter: grayscale(100%);
		transition: all 0.3s ease;
	}
		.additional:hover {
			cursor: pointer;
			filter: grayscale(10%);
		}
	.text {
		text-align: center;
		padding: 3em;
	}
	.left-panel {
		background: url(../../assets/student.jpg) no-repeat;
		background-size: cover;
	}
	.right-panel {
		background: url(../../assets/teacher.jpg) no-repeat;
		background-size: cover;
	}
</style>
