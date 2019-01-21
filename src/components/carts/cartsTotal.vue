<template>
    <!-- 结算 -->
	<div>
		<div class="pay uls" :key="index" v-for="(p,index) in cartsData">
		<span  class="Spans">
			<input type="checkbox" class="input_check" v-model="p.checked" @change="checkedAll">
			<label></label>
		</span>全选
			<p>
				<span>不含运费</span>
				<b>{{cartsData | productPrice}}元</b>
			</p>
			<a href="javascript:;">立即下单</a>
		</div>
	</div>

</template>

<script>
export default {
    name: "cartsTotal",
	props:["cartsData"],
	methods:{
        checkedAll(i){
            this.$emit("productChecked",i)
		}
	},
	filters:{
         productPrice(cartsData) {
            let total = 0;
            cartsData[0].cartsInfo.forEach((product,index)=>{
                if(product.checked) {
                    total += product.price * product.count
                }
            })
            return  total

        },
	}
};
</script>

<style scoped>
</style>
