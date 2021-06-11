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
	let first = true;
	export default {
		data() {
			return { chartHeight: 300 };
		},
		mounted() {
			//	if (first && (process.client || process.browser))
			if (first && process.client) {
				first = false;
				myBarChart('barElement');
				myLineChart('lineElement');
				myPieChart('pieElement');
				myRadarChart('radarElement');
			}
		},
	};
</script>
