<template>
  <div class="classifysectionFlex">
    <div class="classifysectionBox">
      <div class="classifysection">
        <classify-section-left   :classify="classify" :funli="funli" :i="i"></classify-section-left>
        <classify-section-right :classify="classify" :num="num" ></classify-section-right>
      </div>
    </div>
  </div>
</template>
<script>
import classifySectionLeft from "./classifySectionLeft";
import classifySectionRight from "./classifySectionRight";
export default {
  name: "classifySectionBox",
  props:["classify"],
  components: { classifySectionLeft, classifySectionRight },
    data(){
      return{
          num:0,
          i:0
      }
    },
    methods:{
      funli:function(index){    //funli为classifySectionLeft里面的点击事件绑定的函数，（）里面对应其p或index
          this.num=index;  //与右边的内容建立联系
          // this.i=0;     //左边的点击变色
          this.i=index;

        }
    },
    mounted(){


    }
};
</script>

<style scoped>
.classifysectionFlex {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
</style>
