<template>
  <div class="timersectionTop"  >
		<div class="timersectionTopAll">
			<div class="timersectionTop1">
				<h3>二<br>十<br>四</h3>
			</div>
			<p>{{timerTop.title1}}</p>
		</div>
		<div class="timersectionTop2">
			<h4></h4>
			<h3>{{timerTop.title2}}</h3>
			<p>{{timerTop.desc}}</p>
		</div>
	</div>
</template>

<script>
export default {
  name: "seasonTimerSectionTop",
	props:["timerTop"]
};
</script>

<style scoped>
/* @import "../../assets/css/timer.css"; */
</style>
