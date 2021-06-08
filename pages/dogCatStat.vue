<template>
  <section class="section">
    <article class="hero is-info">
      <div class="hero-body">
        <h1 class="title">애견 통계</h1>
      </div>
    </article>
    <article class="message">
      <div class="message-header">
        애견 산업 전망
      </div>
      <div class="message-body">
        <div id="chartArea"></div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  mounted() {
    if (process.client) {
      var container = document.getElementById("chartArea");
      var data = {
        categories: ["2012", "2014", "2016", "2018", "2018"],
        series: [
          {
            name: "시장 규모 (억원)",
            data: [9000, 14000, 23000, 37000, 58000]
          }
        ]
      };
      tui.chart.barChart(container, data);
    }
  }
};
</script>
