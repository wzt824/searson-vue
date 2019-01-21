<template>
  <div class="changeFlex">
      <classify-header></classify-header>
      <classify-section-box :classify="classify"></classify-section-box>
      <classify-footer></classify-footer>
  </div>
</template>

<script>
import classifyHeader from '../components/classify/classifyHeader'
import classifySectionBox from '../components/classify/classifySectionBox'
import classifyFooter from '../components/classify/classifyFooter'
export default {
  name: 'classify',
  components:{classifyHeader,classifySectionBox,classifyFooter},
  data(){
      return {
          classify:[
              {
              "name":"食材",
              "sectionRight":[
                  {title:"进入食材频道",
                   picture:"/img/classify/1.png",
                   "sectionPic": [
                          {title1: "主食", pic: "/img/classify/s1.png"},
                          {title1: "食材", pic: "/img/classify/s2.png"},
                          {title1: "主食", pic: "/img/classify/s3.png"},
                      ]
                  },
              ]
          },
              {
                  "name":"轻食",
                  "sectionRight":[
                      {title:"进入轻食频道",
                          picture:"/img/classify/1.png",
                          "sectionPic": [
                              {title1: "糕点", pic: "/img/classify/qs1.png"},
                              {title1: "水果", pic: "/img/classify/qs2.png"},
                              {title1: "零食", pic: "/img/classify/qs3.png"},
                              {title1: "速食", pic: "/img/classify/qs4.png"}
                          ]
                      },
                  ]
              },
              {
                  "name":"饮品",
                  "sectionRight":[
                      {title:"进入饮品频道",
                          picture:"/img/classify/1.png",
                          "sectionPic": [
                              {title1: "酒水", pic: "/img/classify/yp1.png"},
                              {title1: "茶", pic: "/img/classify/yp2.png"},
                              {title1: "冲饮", pic: "/img/classify/yp3.png"},
                          ]
                      },
                  ]
              },
              {
                  "name":"美物",
                  "sectionRight":[
                      {title:"进入美物频道",
                          picture:"/img/classify/1.png",
                          "sectionPic": [
                              {title1: "餐厨", pic: "/img/classify/mw1.png"},
                              {title1: "日用品", pic: "/img/classify/mw2.png"},
                              {title1: "装饰", pic: "/img/classify/mw3.png"},
                          ]
                      },
                  ]
              },
              {
                  "name":"试吃",
                  "sectionRight":[
                      {title:"进入试吃频道",
                          picture:"/img/classify/1.png",
                          "sectionPic": [
                              {title1: "肉燥醤", pic: "/img/classify/sc1.png"},
                              {title1: "梨膏", pic: "/img/classify/sc2.png"},
                              {title1: "手抓", pic: "/img/classify/sc3.png"},
                              {title1: "银耳羹", pic: "/img/classify/sc4.png"},
                              {title1: "手削藕粉", pic: "/img/classify/sc5.png"},
                              {title1: "绿茶", pic: "/img/classify/sc6.png"},
                              {title1: "肉燥醤", pic: "/img/classify/sc1.png"},
                              {title1: "梨膏", pic: "/img/classify/sc2.png"},
                              {title1: "手抓", pic: "/img/classify/sc3.png"},
                              {title1: "银耳羹", pic: "/img/classify/sc4.png"},
                              {title1: "手削藕粉", pic: "/img/classify/sc5.png"},
                              {title1: "绿茶", pic: "/img/classify/sc6.png"},
                              {title1: "肉燥醤", pic: "/img/classify/sc1.png"},
                              {title1: "梨膏", pic: "/img/classify/sc2.png"},
                              {title1: "手抓", pic: "/img/classify/sc3.png"},
                              {title1: "银耳羹", pic: "/img/classify/sc4.png"},
                              {title1: "手削藕粉", pic: "/img/classify/sc5.png"},
                              {title1: "绿茶", pic: "/img/classify/sc6.png"},
                          ]
                      },
                  ]
              }
          ]

      }
  },
    method(){

    }
}
</script>
<style>
  @import "../assets/css/carts.css";
  .changeFlex{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

