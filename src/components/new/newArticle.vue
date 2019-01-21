<template>
  <article class="newarticle">
    <div class="newsection newsection2"  >
      <div class="newsection1"  :key="index" v-for="(p2,index) in q.newSection[num].newSectionList" >
          <a href="javascript:;">
          <img :src="p2.pic" alt>
        </a>
        <h4>{{p2.title}}</h4>
        <span>￥{{p2.price}}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "newArticle",
    props:["q","num"]
};
</script>

<style scoped>
</style>
