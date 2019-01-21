<template>
  <div class="timersectionBottomBox">
		<div class="timersectionBottom" :key="index" v-for="(p2,index) in timersectionBox">
			<h3>{{p2.title1}}<span></span></h3>
			<div class="timerlist">
				<div class="listLeft">
					<h4>{{p2.title2}}</h4>
					<p>
						<img :src="p2.pic1" alt="">
						<span>{{p2.title3}}</span>
					</p>
				</div>
				<div class="listRight"><img :src="p2.pic2" alt=""></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "seasonTimerSectionBottomBox",
	props:["timersectionBox"]
};
</script>

<style scoped>
</style>
