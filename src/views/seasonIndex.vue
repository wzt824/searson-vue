<template>
  <div class="changeFlex">
    <seasonIndexheaderBox></seasonIndexheaderBox>
    <seasonIndexFlexBox :slider="slider" :sections="sections" :list="list" :article="article"></seasonIndexFlexBox>
    <season-index-footer></season-index-footer>
  </div>
</template>

<script>
import seasonIndexheaderBox from "../components/Index/seasonIndexheaderBox";
import seasonIndexFlexBox from "../components/Index/seasonIndexFlexBox";
import seasonIndexFooter from "../components/Index/seasonIndexFooter";
export default {
  name: "seasonIndex",
  components: { seasonIndexheaderBox, seasonIndexFlexBox, seasonIndexFooter },
  data() {
    return {
      slider: [
        { pic: require("@/assets/img/index/banner.jpg") },
        { pic: require("@/assets/img/index/banner1.png") },
        { pic: require("@/assets/img/index/banner.jpg") }
      ],
      sections: [
          {
              pic1: "/img/index/2.png",
              title1: "正宗阳大闸蟹澄湖",
              title2: "正宗阳大闸蟹澄湖 秋日盛宴不早不晚",
              price: "499",
              pic2: "/img/index/s2.png"
          },
          {
              pic1: "/img/index/s4.png",
              title1: "东北赵三姑辣酱",
              title2: "东北赵三姑辣酱",
              price: "48",
              pic2: "/img/index/s1.png"
          },
        {
          pic1: "/img/index/s1.jpg",
          title1: "江南冬季限定美味",
          title2: "江南冬季限定美味　油润细腻　满屋飘香",
          price: "39",
          pic2: "/img/index/s1.png"
        },
        {
          pic1: "/img/index/s3.png",
          title1: "金枪鱼三文鱼组合装",
          title2: "金枪鱼三文鱼组合装",
          price: "126",
          pic2: "/img/index/s2.png"
        },
        {
          pic1: "/img/index/s3.jpg",
          title1: "金枪鱼三文鱼组合装",
          title2: "金枪鱼三文鱼组合装",
          price: "86",
          pic2: "/img/index/s1.png"
        },
        {
          pic1: "/img/index/s6.jpg",
          title1: "满满蟹粉",
          title2: "满满蟹粉 BEST50主厨傅月良出品 膏黄醇香 蟹肉酥软",
          price: "139",
          pic2: "/img/index/s2.png"
        },
        {
          pic1: "/img/index/s7.jpg",
          title1: "松茸顶汤/鲍汁鲍鱼",
          title2: "松茸顶汤/鲍汁鲍鱼 闽菜大厨出品 开袋即食",
          price: "86",
          pic2: "/img/index/s1.png"
        },
        {
          pic1: "/img/index/s2.jpg",
          title1: "庆元高山甜橘柚",
          title2: "庆元高山甜橘柚10斤装   鲜甜可口 柔软多汁",
          price: "98",
          pic2: "/img/index/s2.png"
        }
      ],
      list: [
        {
          pic: "/img/index/flex1.png",
          person: "叶金聪",
          cr: "创始人",
          see: "+关注"
        },
        {
          pic: "/img/index/flex2.png",
          person: "朱威廉",
          cr: "船头鲜创始人",
          see: "+关注"
        },
        {
          pic: "/img/index/flex1.png",
          person: "叶金聪",
          cr: "创始人",
          see: "+关注"
        },
        {
          pic: "/img/index/flex2.png",
          person: "朱威廉",
          cr: "船头鲜创始人",
          see: "+关注"
        },
        {
          pic: "/img/index/flex1.png",
          person: "叶金聪",
          cr: "创始人",
          see: "+关注"
        },
        {
          pic: "/img/index/flex2.png",
          person: "朱威廉",
          cr: "船头鲜创始人",
          see: "+关注"
        }
      ],
      article: [
        {
          pic1: "/img/index/s2.jpg",
          title1: "庆元高山甜橘柚",
          title2: "鲜甜可口 柔软多汁",
          price: "99"
        },
        {
          pic1: "/img/index/s3.jpg",
          title1: "金枪鱼三文鱼组合装",
          title2: "金枪鱼三文鱼组合装",
          price: "126"
        },
        {
          pic1: "/img/index/s4.jpg",
          title1: "云南五鲜菌汤包",
          title2: "自然鲜香 最佳炖汤伴侣",
          price: "46"
        },
        {
          pic1: "/img/index/s5.jpg",
          title1: "渤海野生烘干无盐虾皮",
          title2: "天然零添加  宝宝辅食 鲜浓味美",
          price: "42"
        },
        {
          pic1: "/img/index/s6.jpg",
          title1: "蟹粉",
          title2: "膏黄醇香 蟹肉酥软",
          price: "139"
        },
        {
          pic1: "/img/index/s7.jpg",
          title1: "松茸顶汤/鲍汁鲍鱼",
          title2: "闽菜大厨出品 开袋即食",
          price: "86"
        },
        {
          pic1: "/img/index/s4.jpg",
          title1: "云南五鲜菌汤包",
          title2: "云自然鲜香 最佳炖汤伴侣",
          price: "46"
        },
        {
          pic1: "/img/index/s5.jpg",
          title1: "渤海野生烘干无盐虾皮",
          title2: "天然零添加  宝宝辅食 鲜浓味美",
          price: "42"
        },
        {
          pic1: "/img/index/s2.jpg",
          title1: "庆元高山甜橘柚",
          title2: "鲜甜可口 柔软多汁",
          price: "99"
        },
        {
          pic1: "/img/index/s3.jpg",
          title1: "金枪鱼三文鱼组合装",
          title2: "金枪鱼三文鱼组合装",
          price: "126"
        }
      ]
    };
  },
  mounted() {}
};
</script>
<style>
.changeFlex {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

