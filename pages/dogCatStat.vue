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
      const el = document.getElementById("chartArea");
      const data = {
        categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        series: [
          {
            name: "Budget",
            data: [5000, 3000, 5000, 7000, 6000, 4000, 1000]
          },
          {
            name: "Income",
            data: [8000, 4000, 7000, 2000, 6000, 3000, 5000]
          }
        ]
      };
      const options = {
        chart: { width: 600, height: 600 }
      };

      toastui.Chart.barChart({ el, data, options });
    }
  }
};
</script>
