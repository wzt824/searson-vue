<template>
  <div class="changeFlex">
      <me-header></me-header>
      <me-flex-box></me-flex-box>
      <me-footer></me-footer>
  </div>
</template>

<script>
import meHeader from '../components/me/meHeader'
import meFlexBox from '../components/me/meFlexBox'
import meFooter from '../components/me/meFooter'
export default {
  name: 'me',
  components:{meHeader,meFlexBox,meFooter},
  data(){
      return {

      }
  }
}
</script>
<style>
  @import "../assets/css/me.css";
  .changeFlex{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

