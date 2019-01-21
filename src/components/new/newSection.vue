<template>
  <div>
        <new-nav :q="q" :change="change" :m="m"></new-nav>
        <new-article :q="q" :num="num"></new-article>
  </div>

</template>

<script>
    import  newNav from  '../../components/new/newNav'
    import  newArticle from  '../../components/new/newArticle'
export default {
    name: "newSection",
    props:["q"],
    components: {newNav,newArticle},
    data(){
        return{
            num:0,
            m:0
        }
    },
    methods:{
        change(index) {
            this.num=index;
            this.m=index;
        }
    }
};
</script>

<style scoped>
</style>
