<script setup lang="ts">
// 引入 echarts
import * as echarts from 'echarts'
import boxTitle from '@/components/boxTitle/index.vue'

const initChart = () => {
	const chartDom = document.getElementById('visitorChart') as HTMLDivElement
	const myChart = echarts.init(chartDom)
	const options = {
		title: {
			text: '元/天',
			left: '12%',
			textStyle: {
				color: '#4c81dd',
				fontSize: 14,
				// 右移10px
				align: 'right'
			}
		},
		grid: {
			top: '15%',
			right: '10%',
			left: '15%',
			bottom: '15%'
		},
		xAxis: [
			{
				type: 'category',
				data: ['6-27', '6-28', '6-29', '6-27', '6-27', '6-27', '6-27'],
				axisLine: {
					show: false
				},
				axisLabel: {
					color: '#788a9d',
					textStyle: {
						fontSize: 12
					}
				},
				axisTick: {
					show: true,
					alignWithLabel: true // 将刻度与标签对齐
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				axisLabel: {
					color: '#788a9d' // 设置 Y 轴刻度数字颜色
				},
				axisLine: {
					show: false
				},
				splitLine: {
					lineStyle: {
						type: 'dashed', // 将分隔线设置为虚线
						color: '#788a9d' // 设置虚线的颜色
					}
				},
				axisTick: {
					show: true,
					alignWithLabel: true // 将刻度与标签对齐
				}
			}
		],
		series: [
			{
				type: 'bar',
				data: [10, 100, 200, 300, 400, 300, 200],
				barWidth: '70%',
				itemStyle: {
					normal: {
						color: function (params: any) {
							// 根据数据的索引设置不同的颜色
							return params.dataIndex % 2 === 0 ? '#4c81dd' : '#38d9d0' // 设置两种颜色
						}
					}
				}
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
	<div h="100%">
		<boxTitle title="系统费用统计" />
		<div class="chart-box mt2 h85%">
			<div class="chart h100% w100%" id="visitorChart"></div>
		</div>
	</div>
</template>
