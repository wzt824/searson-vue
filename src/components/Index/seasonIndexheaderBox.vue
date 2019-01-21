<template>
  <div class="IndexheaderBox">
		<!-- header -->
		<header >
			<div class="headerLeft">
				<h3>2</h3>
				<h3>4季</h3>
				<span>跟着时令去生活</span>
			</div>
			<div class="headerRight">
				<img src="../../assets/img/index/header.png" alt="">
				<p>去农场</p>
			</div>
		</header>
		<!-- search -->
		<div class="search">
			<img src="../../assets/img/index/search.png" alt="">
			<input type="text" placeholder="选择商品">
		</div>
	</div>
</template>

<script>
export default {
  name: "seasonIndexheaderBox",
  props:["indexData"]
};
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>
