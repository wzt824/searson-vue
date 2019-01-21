<template>
  <div class="changeFlex">
    <season-timer-header></season-timer-header>
    <season-timer-section-box :timersection="p" :key="index" v-for="(p,index) in timersection"></season-timer-section-box>
    <season-timer-footer></season-timer-footer>
  </div>
</template>

<script>
import seasonTimerHeader from '../components/timer/seasonTimerHeader'
import seasonTimerSectionBox from '../components/timer/seasonTimerSectionBox'
import seasonTimerFooter from '../components/timer/seasonTimerFooter'
export default {
  name: 'timer',
  components:{seasonTimerHeader,seasonTimerSectionBox,seasonTimerFooter},
  data(){
      return {
          "timersection":[
              {
                  "timerTop":[
                      {
                          "title1":"12/14",
                          "title2":"大雪",
                          "desc":"大雪在每年的12月7日或8日，其时视达到黄经255度。大雪过后黄河一带会有积雪;而北方已是'千里冰封，万里雪飘荡'的严冬......"
                      }
                  ],
                  "timersectionBox": [
                      {
                          "title1": "商品推荐",
                          "title2": "郑宗阳澄湖大闸蟹 秋日盛宴不早不晚",
                          "pic1": "/img/timer/8.png",
                          "title3": "美好生活提案者　24季",
                          "pic2": "/img/timer/2.png"
                      },
                      {
                          "title1": "商品推荐",
                          "title2": "24季夏日主题精酿啤酒清凉一夏的不二之选",
                          "pic1": "/img/timer/6.png",
                          "title3": "美好生活提案者　24季",
                          "pic2": "/img/timer/3.png"
                      },
                      {
                          "title1": "商品推荐",
                          "title2": "极露手酿桂花酒 原花浸泡 桂甜绵长 酒香醇厚",
                          "pic1": "/img/timer/7.png",
                          "title3": "来得及联合创始人 陶魏兵",
                          "pic2": "/img/timer/4.png"
                      },
                      {
                          "title1": "商品推荐",
                          "title2": "郑宗阳澄湖大闸蟹 秋日盛宴不早不晚",
                          "pic1": "/img/timer/6.png",
                          "title3": "美好生活提案者　24季",
                          "pic2": "/img/timer/5.png"
                      },
                      {
                          "title1": "商品推荐",
                          "title2": "郑宗阳澄湖大闸蟹 秋日盛宴不早不晚",
                          "pic1": "/img/timer/8.png",
                          "title3": "美好生活提案者　24季",
                          "pic2": "/img/timer/2.png"
                      }
                  ]
              }
          ]
      }
  }
}
</script>
<style scoped>
  @import "../assets/css/timer.css";
  .changeFlex{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

