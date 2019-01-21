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
				<i class="iconfont icon-gouwuche2"></i>
				<span>购物车</span>
			</router-link>
			<router-link to="/me" tag="a">
				<i class="iconfont icon-wode first_nav"></i>
				<span class="first_nav">我的</span>
			</router-link>
		</nav>
	</footer>
</template>

<script>
export default {
  name: "meFooter"
};
</script>

<style scoped>

</style>
