<template>
  <div class="classifysectionRight">
    <div class="classifysectionRight1">
      <div class="mao"  :key="index" v-for="(p,index) in classify[num].sectionRight">
        <h3>
          <a href="javascript:;">{{p.title}}</a>
          <img :src="p.picture" alt>
        </h3>
        <div class="pictureBox">
          <div class="picture" :key="index" v-for="(a,index) in p.sectionPic" >
            <img :src="a.pic" alt>
            <p>{{a.title1}}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classifySectionRight",
  props:["classify","num"]
};
</script>

<style scoped>
</style>
