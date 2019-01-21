<template>
    <!-- footer -->
	<footer>
		<nav>
           <router-link to="/" tag="a">
				<i class="iconfont icon-11"></i>
				<span>首页</span>
			</router-link>
			<router-link to="/classify" tag="a">
				<i class="iconfont icon-classifi"></i>
				<span>分类</span>
			</router-link>
			<router-link to="/timer" tag="a">
				<i class="iconfont icon-shijian"></i>
				<span>时令</span>
			</router-link>
			<router-link to="/carts" tag="a">
				<i class="iconfont icon-gouwuche2 first_nav"></i>
				<span class="first_nav">购物车</span>
			</router-link>
			<router-link to="/me" tag="a">
				<i class="iconfont icon-wode"></i>
				<span>我的</span>
			</router-link>
		</nav>
	</footer>
</template>

<script>
export default {
  name: "cartsFooter"
};
</script>

<style scoped>
@import "../../assets/css/carts.css";
</style>
