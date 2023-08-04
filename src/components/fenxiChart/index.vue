<script setup lang="ts">
import * as echarts from 'echarts'
import boxTitle from '@/components/boxTitle/index.vue'

const initChart = () => {
	const chartDom = document.getElementById('dianyaChart') as HTMLDivElement
	const myChart = echarts.init(chartDom)
	const options = {
		legend: {
			// 图例配置
			data: ['地热平衡', '节能环保'], // 图例名称
			textStyle: {
				color: '#fff', // 图例文本颜色
				fontSize: 14 // 图例文本字体大小
			},
			left: 'center', // 图例水平位置居中
			top: '1%'
		},
		grid: {
			top: '15%',
			right: '10%',
			left: '12%',
			bottom: '15%'
		},
		yAxis: {
			type: 'category',
			data: ['初始', '最高', '最低', '当前'],
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 14
			}
		},
		xAxis: [
			{
				type: 'value',
				axisLine: {
					show: false // 隐藏 x 轴轴线
				},
				axisLabel: {
					color: '#fff',
					fontSize: 12,
					interval: 0
				},
				axisTick: {
					show: true,
					alignWithLabel: true // 将刻度与标签对齐
				},
				interval: 30, // 设置刻度的间隔为 50
				max: 180,
				splitLine: {
					show: true, // 显示 x 轴的分割线
					lineStyle: {
						color: '#fff',
						type: 'dashed' // 设置分割线为虚线样式
					}
				}
			},
			{
				type: 'value',
				axisLine: {
					show: false // 隐藏 x 轴轴线
				},
				axisLabel: {
					show: false // 隐藏 x 轴刻度标签
				},
				splitLine: {
					show: false
				},
				max: 180 // 设置 x 轴的最大值为 350
			}
		],
		series: [
			{
				name: '地热平衡',
				type: 'bar',
				barWidth: 8,
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
									color: '#20abe1'
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
				data: [130, 150, 50, 90]
			},
			{
				name: '节能环保',
				type: 'bar',
				xAxisIndex: 1, // 指定使用第二个 x 轴
				barWidth: 8,
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
									color: '#1ab2db'
								},
								{
									offset: 0.8,
									color: '#1bcb9c'
								}
							],
							false
						)
					}
				},
				data: [100, 95, 95, 30]
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
		<boxTitle title="能源分析" />
		<div class="chart-box mt2 h85%">
			<div class="chart h100% w100%" id="dianyaChart"></div>
		</div>
	</div>
</template>
