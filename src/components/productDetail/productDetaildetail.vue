<template>
 <!-- detail -->
    <div class="productDetaildetail">
        <div class="detail1">
            <h3>{{item3.detailbottom.title}}</h3>
            <img :src="item3.detailbottom.pic" alt="">
        </div>
        <div class="detail2">
            <h3>{{item3.detailbottom.title1}}</h3>
            <p>{{item3.detailbottom.title2}}</p>
            <p>{{item3.detailbottom.title3}}</p>
            <p>{{item3.detailbottom.title4}}</p>
            <p>{{item3.detailbottom.title5}}</p>
            <p>{{item3.detailbottom.title6}}</p>
            <p>{{item3.detailbottom.title7}}</p>
            <p>{{item3.detailbottom.title8}}</p>
            <p>{{item3.detailbottom.title9}}</p>
            <p>{{item3.detailbottom.title10}}</p>
        </div>
        <div class="detail3">
            <h3>{{item3.detailbottom.title11}}</h3>
            <p>{{item3.detailbottom.title12}}</p>
            <div class="detali3Img">
                <img :src="item3.detailbottom.pic1" alt="">
                <p>{{item3.detailbottom.title13}}</p>
            </div>
            <div class="detali3Img">
                <img :src="item3.detailbottom.pic2" alt="">
                <p>一个挖掘地方特色食品的品牌，一群来自互联网和食品供应链的年轻人，因不忍看到美味被辜负，走在一起。
                    这些散落在地方的特色食品和坚持用心对待食品的手艺人，用味道，连接着我们和一方水土的记忆。</p>
            </div>
        </div>
        <div class="detail4 detail1">
            <h3>{{item3.detailbottom.title14}}</h3>
            <img :src="item3.detailbottom.pic3" alt="">
            <p>{{item3.detailbottom.title15}}</p>
            <img :src="item3.detailbottom.pic4" alt="">
            <p>{{item3.detailbottom.title16}}</p>
            <img :src="item3.detailbottom.pic5" alt="">
            <p>{{item3.detailbottom.title17}}</p>
            <img :src="item3.detailbottom.pic6" alt="">
            <p>{{item3.detailbottom.title18}}</p>
            <img :src="item3.detailbottom.pic7" alt="">
            <p>{{item3.detailbottom.title19}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "productDetaildetail",
    props:["item3"]
};
</script>

<style scoped>
</style>
