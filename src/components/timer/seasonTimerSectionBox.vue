<template>
  <div class="timersectionBox">
		<div class="timersection">
        <season-timer-section-top :timerTop="p1" :key="index" v-for="(p1,index) in timersection.timerTop"></season-timer-section-top>
        <season-timer-section-bottom-box :timersectionBox="timersection.timersectionBox"></season-timer-section-bottom-box>
    </div>
  </div>
</template>

<script>
import seasonTimerSectionTop from "./seasonTimerSectionTop";
import seasonTimerSectionBottomBox from "./seasonTimerSectionBottomBox";
export default {
  name: "seasonTimerSectionBox",
    props:["timersection"],
  components: { seasonTimerSectionTop, seasonTimerSectionBottomBox }
};
</script>

<style scoped>
.sectionFlex {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
</style>
