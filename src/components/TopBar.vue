<template>
    <div id="top-bar">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="link"><img src="../assets/uek.png" alt="Logo UEK" class="logo"/></router-link>
            <router-link :to="{ name: 'dashboard' }" class="link" style="float: right;"><strong>Panel</strong></router-link>
        </div>
    </div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	$background_top: #fff;
	$accent: #006505;
	$size: 80px;

	.logo {
		width: 2*$size;
		height: $size;
	}
</style>
