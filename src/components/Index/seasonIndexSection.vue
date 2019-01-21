<template>
  <!-- section -->
  <div class="IndexSection">
    <h3>推荐热卖
      <span>精选品质好货</span>
    </h3>
    <!-- <div class="section"> -->
      <div class="section1" :key="index" v-for="(s,index) in sections" @click="toDetail(index)">
        <a href="javascript:;">
          <img :src="s.pic1" alt>
        </a>
        <h4>{{s.title1}}</h4>
        <p>{{s.title2}}</p>
        <span>￥{{s.price}}</span>
        <img :src="s.pic2" alt class="section1_img">
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
// import SliderServer from "../../apis/index-data.js";
export default {
  name: "seasonIndexSection",
  props:["sections"],
  data() {
    return{}
  },
  methods: {
      toDetail(id){
          this.$router.push({path:`/productDetail/${id}`})
    }
  },
  created() {
   
  }
};
</script>

<style scoped>
</style>

