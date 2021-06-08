<template>
  <div>
    <div id="lineChart"></div>
  </div>
</template>
<script>
import myLineChart from "~/plugins/myLineChart";
export default {
  mounted() {
    if (process.client) {
      myLineChart("lineChart");
    }
  }
};
</script>
