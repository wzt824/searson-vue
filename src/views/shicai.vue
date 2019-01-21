<template>
  <div>
    <shicai-header></shicai-header>
    <shicai-nav></shicai-nav>
    <shicai-article></shicai-article>
  </div>
</template>

<script>
import shicaiHeader from '../components/shicai/shicaiHeader'
import shicaiNav from '../components/shicai/shicaiNav'
import shicaiArticle from '../components/shicai/shicaiArticle'
export default {
  name: 'shicai',
  components:{shicaiHeader,shicaiNav,shicaiArticle},
  data(){
      return {

      }
  }
}
</script>
<style>
  @import "../assets/css/shicai.css";
  /* .changeFlex{
    height: 100%;
    display: flex;
    flex-direction: column;
  } */
</style>

