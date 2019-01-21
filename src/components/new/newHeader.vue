<template>
  <!-- header -->
    <div>
        <div class="newHeader" :key="index" v-for="(p1,index) in p.newHeader">
            <router-link to="/">
                <img :src="p1.pic1" alt="">
            </router-link>
            <p>
                <img :src="p1.pic2" alt="">
                <span>{{p1.desc1}}</span>
            </p>
            <span>{{p1.desc2}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "newHeader",
    props:["p"]
};
</script>

<style scoped>
</style>
