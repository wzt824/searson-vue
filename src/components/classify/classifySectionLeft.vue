<template>
  <div class="classifysectionLeft" ref="ul">
    <ul>
      <li :key="index" v-for="(p,index) in classify" @click="funli(index)" >
        <a href="javascript:;"  :class="{'actives':i===index}">{{p.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "classifySectionLeft",
  props:["classify","funli","i"],

};
</script>

<style scoped>
</style>
