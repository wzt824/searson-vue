<template>
  <div>
   <!-- nav -->
		<nav>
			<router-link to="/seasonNew" tag="a">
				<i class="iconfont icon-xinpinicon"></i>
				<span>新品</span>
			</router-link>
			<router-link to="/shicai" tag="a">
				<i class="iconfont icon-shicai"></i>
				<span>食材</span>
			</router-link>
			<router-link to="/seasonNew" tag="a">
				<i class="iconfont icon-11"></i>
				<span>轻食</span>
			</router-link>
			<router-link to="/seasonNew" tag="a">
				<i class="iconfont icon-yinpintianpin"></i>
				<span>饮品</span>
			</router-link>
			<router-link to="/seasonNew" tag="a">
				<i class="iconfont icon-chahu"></i>
				<span>美物</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "seasonIndexNav",
};
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>

