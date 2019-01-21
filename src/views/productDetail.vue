<template>
  <div>
    <product-detail-header v-if="item[num]" :item1="item[num]"></product-detail-header>
    <product-detail-section v-if="item[num]" :item2="item[num]"></product-detail-section>
    <product-detaildetail v-if="item[num]" :item3="item[num]"></product-detaildetail>
  </div>
</template>

<script>
import productDetailHeader from '../components/productDetail/productDetailHeader'
import productDetailSection from '../components/productDetail/productDetailSection'
import productDetaildetail from '../components/productDetail/productDetaildetail'
export default {
    name: 'productDetail',
    components: {productDetailHeader, productDetailSection, productDetaildetail},
    data() {
        return {
              item:[
                  {
                      "pic":"/img/index/2.png",
                      "details":
                          {
                              "pic1":"/img/index/s1.png",
                              "title":"24季",
                              "desc":"美好生活提案者",
                              "title1":"正宗阳大闸蟹澄湖 秋日盛宴不早不晚",
                              "price":"499",
                              "desc1":"全场包邮 |",
                              "desc2":"正品保证 |",
                              "desc3":"不可退"
                          },
                      "detailbottom":
                          {
                              "title":"商品详情",
                              "pic":"/img/productDetail/p1.png",
                              "title1":"正宗阳大闸蟹澄湖 秋日盛宴不早不晚",
                              "title2":"正宗阳大闸蟹澄湖",
                              "title3":"湖田十月清霜堕，晚稻初香蟹如虎。扳罾拖网取赛多，",
                              "title4":"篾篓挑将水边货。纵横连爪一尺长，秀凝铁色含湖光。",
                              "title5":"蟛蜞石蟹已曾食，使我一见惊非常。买之最厌黄髯老，",
                              "title6":"偿价十钱尚嫌少。漫夸丰味过蝤蛑，尖脐犹胜团脐好。",
                              "title7":"充盘煮熟堆琳琅，橙膏酱渫调堪尝。一斗擘开红玉满，",
                              "title8":"双螯啰出琼酥香。岸头沽得泥封酒，细嚼频斟弗停手。",
                              "title9":"西风张翰苦思鲈，如斯丰味能知否?物之可爱尤可憎，",
                              "title10":"尝闻取刺于青蝇。无肠公子固称美，弗使当道禁横行。",
                              "title11":"正宗阳大闸蟹澄湖",
                              "title12":"来自于24季造物者--俞建明",
                              "pic1":"/img/productDetail/p2.png",
                              "title13":"我是俞建明，苏州人，从小在阳澄湖边长大。1996年，我开始和老伴在阳澄湖东湖养殖大闸蟹，风风雨雨二十多年，渐渐有了些经验，养成的大闸蟹也供不应求。后来，阳澄湖大闸蟹越来越有名，中间商比我们养蟹的还多，儿子觉得我们这样养殖太辛苦，还劝我们改行做中间商。可现在的冒牌蟹太多了，我想就这样一直养下去，养真真正正的阳澄湖大闸蟹.",
                              "pic2":"/img/productDetail/4.png",
                              "title14":"商品特点",
                              "pic3":"/img/productDetail/p3.png",
                              "title15":"大闸蟹，学名「中华绒螯蟹」，以苏州阳澄湖养殖的最为优质。由于蟹身不沾泥，故而又名清水大闸蟹，具有体大膘肥、金爪黄毛、青背白肚、身手矫健的特点。阳澄湖大闸蟹黄膏流油、鲜中 , 带甜，自元代以来便一直是广受推崇的珍馐美味.",
                              "pic4":"/img/productDetail/p4.png",
                              "title16":"此次应时，上架的阳澄湖大闸蟹属于24季时令精选系列，产自24季特约养殖基地。作为阳澄湖第一代蟹农， 俞建明拥有20余年的经验，在最好的阳澄东湖采用最传统的方法养殖，只为养出最优质的大闸蟹。最重要的，最好的时候上市，不早不晚，与你不见不散。",
                              "pic5":"/img/productDetail/p5.png",
                              "title17":"为了从源头保证大闸蟹的品质，24季将养殖基地定于阳澄湖东湖。湖水清浅，水草丰茂，饵料丰富，湖水呈弱碱性，具有杀菌的效果。湖底为硬土质，多细沙，少淤泥。故而蟹壳光洁，蟹肉细腻而鲜嫩。",
                              "pic6":"/img/productDetail/p6.png",
                              "title18":"养殖开始前，精选优质蟹苗。不只看体型大小，更看活力，选择饱满、又能迅速翻身的。单独投放，按完整度再筛选,\n" +
                                  "直到选出最适合养殖的蟹苗。",
                              "pic7":"/img/productDetail/p7.png",
                              "title19":"俞建明从小在阳澄湖土生土长，是第一-代蟹农，有20年经验。用传统方法养殖，培植湖底水草，还喂养鱼虾、螺蛳、玉米等饵料,\n" +
                                  "从源头保证大闸蟹的品质和安全。"
                          }
                  },
                  {
                      "pic":"/img/index/s4.png",
                      "details":
                          {
                              "pic1":"/img/index/s1.png",
                              "title":"24季",
                              "desc":"美好生活提案者",
                              "title1":"【2瓶装】东北赵三姑辣酱 铁锅柴火熬制 爽辣可口",
                              "price":"48",
                              "desc1":"全场包邮 |",
                              "desc2":"正品保证 |",
                              "desc3":"不可退"
                          },
                      "detailbottom":
                          {
                              "title":"商品详情",
                              "pic":"/img/productDetail/p8.png",
                              "title1":"商品来源",
                              "title11":"东北赵三姑辣酱",
                              "title12":"来自于24季造物者--赵三姑",
                              "pic1":"/img/productDetail/p9.png",
                              "title13":"我是赵三姑，地地道道的黑龙江人，也是一个种了20多年地的农民，热爱这片黑土地，也热爱这些黑土地里的食材，希望能够通过自己的努力让更多的人认识到黑土地的美食。因此做了赵三姑辣椒酱,也希望能将最东北的味道带给大家。",
                              "pic2":"/img/productDetail/4.png",
                              "title14":"商品特点",
                              "pic3":"/img/productDetail/p10.png",
                              "title15":"东北精选的金塔椒，色泽鲜亮,味香辛辣，铁锅翻炒数小时，爽辣可口。",
                              "pic4":"/img/productDetail/p11.png",
                              "title16":"甄选黑土地自然生长的大豆，高纬度，温差大的气候给了大豆最好的生长环境。",
                              "pic5":"/img/productDetail/p12.png",
                              "title17":"采用东北最传统辣椒制作工艺，铁锅熬制数小时。入口香辣，回味悠长，- -种辣椒，千百种体验，实在是开胃，佐餐必备之良品。",
                              "pic6":"/img/productDetail/p13.png",
                              "title18":"精选十余种原材料，从材料加工到成品包装，纯手工制作，物理防腐，无任何添加剂。好吃的秘诀在于克制。",
                              "pic7":"/img/productDetail/p12.png",

                          }
                  },
                  {
                      "pic":"/img/index/s1.jpg",
                      "details":
                          {
                              "pic1":"/img/productDetail/8.png",
                              "title":"丁卯",
                              "desc":"味back创始人&COO",
                              "title1":"江南冬季限定美味",
                              "price":"39",
                              "desc1":"全场包邮 |",
                              "desc2":"正品保证 |",
                              "desc3":"不可退"
                          },
                      "detailbottom":
                          {
                              "title":"商品详情",
                              "pic":"/img/index/s1.jpg",
                              "title1":"商品来源",
                              "title11":"江南冬季限定美味",
                              "title12":"来自于24季造物者--赵三姑",
                              "pic1":"/img/productDetail/p9.png",
                              "title13":"我是赵三姑，地地道道的黑龙江人，也是一个种了20多年地的农民，热爱这片黑土地，也热爱这些黑土地里的食材，希望能够通过自己的努力让更多的人认识到黑土地的美食。因此做了赵三姑辣椒酱,也希望能将最东北的味道带给大家。",
                              "pic2":"/img/productDetail/4.png",
                              "title14":"商品特点",
                              "pic3":"/img/productDetail/p10.png",
                              "title15":"东北精选的金塔椒，色泽鲜亮,味香辛辣，铁锅翻炒数小时，爽辣可口。",
                              "pic4":"/img/productDetail/p11.png",
                              "title16":"甄选黑土地自然生长的大豆，高纬度，温差大的气候给了大豆最好的生长环境。",
                              "pic5":"/img/productDetail/p12.png",
                              "title17":"采用东北最传统辣椒制作工艺，铁锅熬制数小时。入口香辣，回味悠长，- -种辣椒，千百种体验，实在是开胃，佐餐必备之良品。",
                              "pic6":"/img/productDetail/p13.png",
                              "title18":"精选十余种原材料，从材料加工到成品包装，纯手工制作，物理防腐，无任何添加剂。好吃的秘诀在于克制。",
                              "pic7":"/img/productDetail/p12.png",

                          }
                  }
              ],
            num:'',
        }
    },
    mounted() {
        let oog = this.$route.params.id
        this.num=oog;
        // fetch("http://localhost:3001/find").then((res) => {
        //     res.json().then((data) => {
        //         this.data1 = data.item[oog]
        //     })
        // })
    }
}

</script>
<style>
  @import "../assets/css/productDetail.css";
  /* .changeFlex{
    height: 100%;
    display: flex;
    flex-direction: column;
  } */
</style>

