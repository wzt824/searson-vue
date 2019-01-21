<template>
    <ul class="uls">
      <li :key="pid" v-for="(p1,pid) in p.cartsInfo" >
        <span class="Spans">
          <input type="checkbox" class="input_check" v-model="p1.checked" @change="shopCheck(pid)">
          <label></label>
        </span>
        <img :src="p1.pic" alt>
        <div class="liRight">
          <h3>{{p1.title}}</h3>
          <p>{{p1.desc}}</p>
          <div class="p">
            <span>￥{{p1.price}}</span>
            <p class="pRight">
              <span @click.prevent.stop="redusecount(pid)">-</span>
              <input type="text" :value="p1.count">
              <span @click.prevent.stop="addcount(pid)">+</span>
            </p>
            <p @click="del(pid)">删除</p>
          </div>
        </div>
      </li>
      <div class="empty">亲，购物车空空如也,快去选购吧！</div>
    </ul>

</template>

<script>
export default {
  name: "cartsProduct",
  props:["p","sid","addcount","redusecount"],
  methods:{
      shopCheck(i){
          this.$emit("shopAll",i)
      },
      del(pid){
          this.$emit("call",pid);
      }
    }

};
</script>

<style scoped>
</style>
