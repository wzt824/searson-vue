<template>
  <div>
    <!-- tip -->
    <div class="tip">
      <div class="tipLeft">
        <h3>2
          <span>4季</span>
        </h3>
        <h3>热点</h3>
      </div>
      <div class="tipRight">
        <ul>
          <li>
            <img src="../../assets/img/index/tip.png" alt>
            <span>创始人叶金聪入驻24季</span>
            <img src="../../assets/img/index/tip2.png" alt>
          </li>
          <li>
            <img src="../../assets/img/index/tip.png" alt>
            <span>船头鲜创始人朱威廉入驻24季</span>
            <img src="../../assets/img/index/tip2.png" alt>
          </li>
          <li>
            <img src="../../assets/img/index/tip.png" alt>
            <span>创始人叶金聪入驻24季</span>
            <img src="../../assets/img/index/tip2.png" alt>
          </li>
          <li>
            <img src="../../assets/img/index/tip.png" alt>
            <span>船头鲜创始人朱威廉入驻24季</span>
            <img src="../../assets/img/index/tip2.png" alt>
          </li>
          <li>
            <img src="../../assets/img/index/tip.png" alt>
            <span>创始人叶金聪入驻24季</span>
            <img src="../../assets/img/index/tip2.png" alt>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "seasonIndexTip",
    mounted(){
        //整体思路：先复制一份ul，设置定时器，修改ul的margin-top值
        var ul = document.getElementsByClassName("tipRight")[0].firstElementChild;
        console.log(ul)
        ul.innerHTML += ul.innerHTML; //先复制一份ul
        var step = 0; //定义步长
        var index = 0;

        function FontScroll() {
            step = 0; //每次都是从0-30
            setTimeout(function move() { //文字是从下往上的，所以margin-top是负的，每次都递减
                //每次都递减0.5
                step -= 0.5;
                //修改margin-top的值
                ul.style.marginTop = -60 * index + step + "px";
                if (step > -60) { //若步长step比-30大的话，说明在ul里面，给他加延迟动画慢慢出现
                    setTimeout(move, 15);
                } else {
                    index++; //第一个完成后第二个开始，依次累加
                    if (index > ul.children.length - 1) { //若下标大于最后一个元素时让其下标为0
                        index = 0;
                    }
                    FontScroll();
                }
            }, 2000);
        }


        window.onload = function () {
            FontScroll();
        }
    }
};
</script>

<style scoped>
@import "../../assets/css/index.css";
</style>

