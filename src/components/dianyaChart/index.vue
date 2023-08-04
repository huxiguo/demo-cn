<script setup lang="ts">
import * as echarts from 'echarts'
import boxTitle from '@/components/boxTitle/index.vue'

const initChart = () => {
	const chartDom = document.getElementById('dianyaChart') as HTMLDivElement
	const myChart = echarts.init(chartDom)
	const options = {
		grid: {
			top: 'auto',
			right: '10%',
			left: '12%',
			bottom: '12%'
		},
		yAxis: {
			data: [1, 2, 3, 4, 5, 6, 7],
			axisLine: {
				show: false,
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 14
			}
		},
		xAxis: {
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 12,
				interval: 0
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: true,
				alignWithLabel: true // 将刻度与标签对齐
			},
			interval: 50, // 设置刻度的间隔为 50
			max: 350 // 设置 x 轴的最大值为 350
		},
		series: [
			{
				type: 'bar',
				barWidth: 18,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							1,
							0,
							0,
							0,
							[
								{
									offset: 0,
									color: '#21abe1'
								},
								{
									offset: 0.8,
									color: '#9b58db'
								}
							],
							false
						)
					}
				},
				data: [120, 160, 50, 125, 140, 155, 330]
			}
		]
	}

	myChart.setOption(options)
	return myChart
}
onMounted(() => {
	initChart()
})
</script>
<template>
	<div w="100%" h="100%">
		<boxTitle title="三项电压" />
		<div class="chart-box mt2 h85%">
			<div class="chart h100% w100%" id="dianyaChart"></div>
		</div>
	</div>
</template>
