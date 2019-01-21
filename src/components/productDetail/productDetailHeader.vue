<template>
  <!-- header -->
    <div class="productDetailHeader">
        <div class="headerImg" >
            <img :src="item1.pic" alt="" class="productImgs">
            <router-link to="/">
                <p >
                    <span>&lt;</span>
                </p>
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
  name: "productDetailHeader",
    props:["item1"]
};
</script>

<style scoped>
</style>
