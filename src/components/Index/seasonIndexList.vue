<template>
  <div>
    <!-- list -->
		<div class="list">
			<div class="listTop">
				<h3>造物者</h3>
				<a href="javascript:;">查看全部 <span></span></a>
			</div>
			<div class="listBottom">
				<div class="list1" :key="index" v-for="(p,index) in list">
					<a href="javascript:;">
						<img :src="p.pic" alt="">
					</a>
					<h3>{{p.person}}</h3>
					<p>{{p.cr}}</p>
					<span>{{p.see}}</span>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import SliderServer from '../../apis/index-data.js';
export default {
	name: "seasonIndexList",
	props:["list"],
	data(){
		return{
		}
	},
	methods:{
    
	}
};
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>

