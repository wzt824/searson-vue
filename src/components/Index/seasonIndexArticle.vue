<template>
  <div>
    <!-- article -->
		<article>
			<div class="IndexSection">
				<h3>精品单选<span>发现舌尖上的真味</span></h3>
				<div class="section section2">
					<div class="section1" :key="index" v-for="(p,index) in article">
						<a href="javascript:;"><img :src="p.pic1" alt=""></a>
						<h4>{{p.title1}}</h4>
						<p>{{p.title2}}</p>
						<span>￥{{p.price}}</span>
					</div>
				</div>
			</div>
		</article>
  </div>
</template>

<script>
// import SliderServer from '../../apis/index-data.js';
export default {
	name: "seasonIndexArticle",
	props:["article"],
  data(){
		return{
		
		}
	},
	methods:{
    
	},
	created() {
   
  }
};
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>

