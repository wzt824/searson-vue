<template>
  <div class="sectionFlex">
	  <season-index-banner :slider="slider"></season-index-banner>
	  <season-index-nav></season-index-nav>
	  <season-index-tip></season-index-tip>
	  <season-index-section :sections="sections"></season-index-section>
	  <season-index-list :list="list"></season-index-list>
	  <season-index-article :article="article"></season-index-article>
  </div>
</template>
<script>
import seasonIndexBanner from './seasonIndexBanner'
import seasonIndexNav from './seasonIndexNav'
import seasonIndexTip from './seasonIndexTip'
import seasonIndexSection from './seasonIndexSection'
import seasonIndexList from './seasonIndexList'
import seasonIndexArticle from './seasonIndexArticle'
export default {
  name: "seasonIndexFlexBox",
		components:{seasonIndexBanner,seasonIndexNav,seasonIndexTip,seasonIndexSection,seasonIndexList,seasonIndexArticle},
		props:["slider","sections","list","article"]
};
</script>

<style scoped>
@import "../../assets/css/index.css";
	.sectionFlex{
		flex: 1;
		width: 100%;
		overflow-y: auto;
	}
</style>
