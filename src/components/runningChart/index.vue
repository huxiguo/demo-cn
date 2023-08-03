<script setup lang="ts">
import * as echarts from 'echarts'
import boxTitle from '@/components/boxTitle/index.vue'
const props = defineProps<{
	title: string
}>()
const initChart = () => {
	const chartDom = document.getElementById('runningChart') as HTMLDivElement
	const myChart = echarts.init(chartDom)
	const ageArea = ['冷凝器', '蒸发器']
	const inData = [120, 300]
	const outData = [-120, -301]
	const options = {
		legend: {
			data: ['出水温度', '进水温度'],
			textStyle: {
				color: '#fff'
			},
			top: '10px',
			left: '16%'
		},
		grid: {
			left: '3%',
			right: '3%',
			top: '25%',
			bottom: '1%',
			containLabel: true
		},
		xAxis: [
			{
				axisLabel: {},
				type: 'value',
				axisTick: {
					show: true,
					alignWithLabel: true // 将刻度与标签对齐
				},
				splitLine: {
					show: true, // 显示垂直于 x 轴的网格线
					lineStyle: {
						type: 'dashed' // 设置为虚线
					}
				}
			}
		],
		yAxis: [
			{
				type: 'category',
				axisTick: { show: false },
				data: ageArea
			}
		],
		series: [
			{
				name: '进水温度',
				type: 'bar',
				stack: '总量',
				data: inData,
				label: {
					show: true, // 在柱子内显示数值
					color: '#fff',
					fontSize: 16,
					position: 'inside', // 数值显示在柱子内部
					formatter: '{c}' // 数值显示的格式，这里显示原始值
				},
				itemStyle: {
					color: '#0ca9d9'
				},
				barWidth: 20,
				barGap: '20%', // 设置蒸发器和冷凝器之间的间距为柱子宽度的 20%
				barCategoryGap: '30%' // 设置不同数据之间的间距为柱子宽度的 30%
			},
			{
				name: '出水温度',
				type: 'bar',
				stack: '总量',
				data: outData,
				label: {
					show: true, // 在柱子内显示数值
					color: '#fff',
					fontSize: 16,
					position: 'inside', // 数值显示在柱子内部
					formatter: '{c}' // 数值显示的格式，这里显示原始值
				},
				itemStyle: {
					color: '#a207d4'
				},
				barWidth: 20,
				barGap: '20%', // 设置蒸发器和冷凝器之间的间距为柱子宽度的 20%
				barCategoryGap: '30%' // 设置不同数据之间的间距为柱子宽度的 30%
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
	<div h="100%" w="100%">
		<boxTitle :title="props.title" />
		<div class="chart-box mt2 h80%" flex>
			<div class="chart mr4 h100% w70%" id="runningChart"></div>
			<div w="20%" h="100%" text="white">
				<div bg="#202856" flex flex-col items-center p1>
					<span>1#冷站</span>
					<span text="3" mt1>(1#主机)</span>
				</div>
				<div mt2 flex flex-col items-center>
					<span>开启状态</span>
					<span bg="#00d6b8" mt1 px2>启动</span>
				</div>
				<div mt2 flex flex-col items-center>
					<span>开启状态</span>
					<span bg="#00d6b8" mt1 px2>启动</span>
				</div>
			</div>
		</div>
	</div>
</template>
