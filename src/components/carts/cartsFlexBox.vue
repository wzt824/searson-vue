<template>
  <!-- flexBox -->
  <div class="cartsflexBox">
    <carts-product :p="p" :addcount="addcount" :redusecount="redusecount" :sid="sid" :pid="pid" @call="del" @shopAll="shopChecked"></carts-product>
  </div>
</template>

<script>
import CartsProduct from "./cartsProduct";
export default {
  name: "cartsFlexBox",
  components: {CartsProduct},
  props:["p","sid","addcount","redusecount","pid"],
  methods:{
      shopChecked(i){
          this.$emit("shopAll",i)
      },
      del(pid){
          this.$emit("call",pid)
      }
    }

};
</script>

<style scoped>
</style>
