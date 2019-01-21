<template>
  <!-- nav -->
    <div class="newNav">
        <a href="javascript:;" :class="{'fixColor':m===index}" :key="index" v-for="(p1,index) in q.newSection" @click="change(index)">{{p1.name}}</a>

    </div>
</template>

<script>
export default {
  name: "newNav",
    props:["q","change","m"]
};
</script>

<style scoped>
</style>
