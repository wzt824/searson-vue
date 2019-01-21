<template>
  <div>
    <!-- banner -->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="ind" v-for="(p,ind) in slider">
          <!-- <div class="swiper-slide"> -->
            <img :src="p.pic">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import SliderServer from '../../apis/index-data.js'
import Swiper from "../../../node_modules/swiper";
export default {
  name: "seasonIndexBanner",
  props:["slider"],
  methods:{
   
  },
  created() {
   
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: {
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      
    });
  }
};
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>

