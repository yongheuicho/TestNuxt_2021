<template>
  <div>
    <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
          <i class="fas fa-dog"></i> 강아지와
          <i class="fas fa-cat"></i> 고양이의 다양한 이름
        </p>
        <p class="subtile">
          여러분의 강아지와 고양이에게 색다른 이름을 붙여주세요.
        </p>
      </div>
    </section>
    <hr />
    <section class="columns">
      <div class="column">
        <div
          id="barElement"
          :style="`width:100%;height:${chartHeight}px`"
        ></div>
        <div
          id="pieElement"
          :style="`width:100%;height:${chartHeight * 1.5}px`"
        ></div>
      </div>
      <div class="column">
        <div
          id="lineElement"
          :style="`width:100%;height:${chartHeight}px`"
        ></div>
        <div
          id="radarElement"
          :style="`width:100%;height:${chartHeight * 1.5}px`"
        ></div>
      </div>
    </section>
  </div>
</template>
<script>
import myBarChart from '~/plugins/myBarChart';
import myLineChart from '~/plugins/myLineChart';
import myPieChart from '~/plugins/myPieChart';
import myRadarChart from '~/plugins/myRadarChart';
let showChart = false;
// Line data
const lineData = {
  categories: [
    '01/01/2020',
    '02/01/2020',
    '03/01/2020',
    '04/01/2020',
    '05/01/2020',
    '06/01/2020',
    '07/01/2020',
    '08/01/2020',
    '09/01/2020',
    '10/01/2020',
    '11/01/2020',
    '12/01/2020',
  ],
  series: [
    {
      name: 'Seoul',
      data: [
        -3.5,
        -1.1,
        4.0,
        11.3,
        17.5,
        21.5,
        25.9,
        27.2,
        24.4,
        13.9,
        6.6,
        -0.6,
      ],
    },
    {
      name: 'Seattle',
      data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.6, 3.7],
    },
  ],
};
export default {
  data() {
    return { chartHeight: 300, chartLineData: lineData };
  },
  mounted() {
    if (!showChart && process.client) {
      if (!myBarChart('barElement')) return;
      if (!myLineChart('lineElement', this.chartLineData)) return;
      if (!myPieChart('pieElement')) return;
      if (!myRadarChart('radarElement')) return;
      showChart = true;
    }
  },
  destroyed() {
    showChart = false;
  },
};
</script>
