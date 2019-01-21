<template>
  <div class="changeFlex">
      <carts-header></carts-header>
      <carts-flex-box :addcount="addcount" :redusecount="redusecount"  :p="p" :key="index" v-for="(p,index) in cartsData"  @shopAll="shopCheckedAll" @call="del"></carts-flex-box>
      <carts-total :cartsData="cartsData" @productChecked="checkedAll"></carts-total>
      <carts-footer></carts-footer>
  </div>
</template>

<script>
import cartsHeader from '../components/carts/cartsHeader'
import cartsFlexBox from '../components/carts/cartsFlexBox'
import cartsTotal from '../components/carts/cartsTotal'
import cartsFooter from '../components/carts/cartsFooter'
export default {
  name: 'carts',
  components:{cartsHeader,cartsFlexBox,cartsTotal,cartsFooter},
  data(){
      return {
        cartsData:[
            {"checked":true,
             "totalPrice":0,
             "cartsInfo":[
                    {
                        "pic":"/img/carts/2.png",
                        "title":"正宗阳澄湖大闸蟹 秋日...",
                        "desc":"特选装",
                        "price":"499",
                        "count":1,
                        "checked":true
                    },
                    {
                     "pic":"/img/carts/1.png",
                     "title":"半年慢熟生长的活性胚...",
                     "desc":"活性胚牙米(2.5kg/袋)",
                     "price":"68",
                     "count":2,
                     "checked":true
                 },
                    {
                        "pic":"/img/carts/3.png",
                        "title":"桂香沁酒三年一酿 伴心...",
                        "desc":"桂魄(桂花利口酒)经典款...",
                        "price":"99",
                        "count":1,
                        "checked":true
                    },
                    {
                        "pic":"/img/carts/1.png",
                        "title":"桂香沁酒三年一酿 伴心...",
                        "desc":"桂魄(桂花利口酒)经典款...",
                        "price":"99",
                        "count":1,
                        "checked":true
                    }
                ],
            },
        ]
      }
  },
  methods:{
      /**
       * 初始化
       * */
      _initData(){
          // this._totalPrice();
      },
        /**
         * 统计总价格(根据每个商品的价格)(此处写的话商品的数量一直都是数据库里面给的数量，
         * 当点击加减按钮时不会变，所以要么和后面子组件里面的点击完的数量联系起来(子传父)，
         * 要么通过过滤器写到cartsTotal.vue里面，此项目采用过滤器)
         * */
        _totalPrice() {
            let total = 0;
            this.cartsData[0].cartsInfo.forEach((product,index)=>{
                if(product.checked) {
                    total += product.price * product.count
                }
            })
            this.totalPrice = total     //把totalPrice传下去

        },
      /**
       * 根据商品的下标来判断当前商品的选中状态
       * */
      shopCheckedAll(){
          this.cartsData[0].checked = this.cartsData[0].cartsInfo.every(product=>product.checked);
      },

      /**
       * 全选状态
       * */
      checkedAll(){
         let checked=this.cartsData[0].checked;
          this.cartsData[0].cartsInfo.forEach((product)=>{
              product.checked=checked;
          })
      },


      /**
       * 根据商品的编号来修改商品的数量
       * */
      addcount(pid){
          this.cartsData[0].cartsInfo[pid].count++
      },
      redusecount(pid){
          if(this.cartsData[0].cartsInfo[pid].count<=1){
              this.cartsData[0].cartsInfo[pid].count=1
          }else{
              this.cartsData[0].cartsInfo[pid].count--
          }

      },


      /**
       * 删除
       * */

      del(i){
          var empty=document.getElementsByClassName("empty");
          if(this.cartsData[0].cartsInfo[i].checked==true){
              let num=0;
              if(confirm("你确定要将该商品移除吗？")){
                  this.cartsData[0].cartsInfo.splice(i,1);
                  if(this.cartsData[0].cartsInfo.length==num){
                      empty[0].style.display="block";
                  }
                  num++;
              }else{
                  return false;
              }
          }else{
              confirm("请先选中该商品哦！")
          }
      }
    },
    created(){
        this._initData()
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

