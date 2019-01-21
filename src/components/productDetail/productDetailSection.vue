<template>
  <!-- section -->
    <div class="productDetailSection">
        <div class="productDetailsection">
            <img :src="item2.details.pic1" alt="">
            <h3>{{item2.details.title}}</h3>
            <p>{{item2.details.desc}}</p>
        </div>
        <div class="productDetailsection1">
            <h3>{{item2.details.title1}}</h3>
            <span>￥{{item2.details.price}}</span>
            <p>
                <span>{{item2.details.desc1}}</span>
                <span>{{item2.details.desc2}}</span>
                <span>{{item2.details.desc3}}</span>
            </p>
            <div class="productDetailsection2">
                <p>规格</p>
                <p>&gt;</p>
            </div>
        </div>
        <router-link to="/carts" tag="a">加入购物车</router-link>
    </div>
</template>

<script>
export default {
  name: "productDetailSection",
    props:["item2"]
};
</script>

<style scoped>
</style>
