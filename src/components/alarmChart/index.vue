<script setup lang="ts">
import * as echarts from 'echarts'
import boxTitle from '@/components/boxTitle/index.vue'
const props = defineProps<{
	title: string
}>()
const initChart = () => {
	const chartDom = document.getElementById('alarmChart') as HTMLDivElement
	const myChart = echarts.init(chartDom)
	const options = {
		title: {
			text: '近一月报警次数',
			left: '10%',
			textStyle: {
				color: '#4c81dd',
				fontSize: 14
			}
		},
		graphic: {
			type: 'text', // 添加文本类型的图形
			right: 40, // 文本的水平位置距离右边框的距离
			top: 10, // 文本的垂直位置距离上边框的距离
			style: {
				text: '单位：次数/天', // 要显示的文字内容
				textAlign: 'right', // 文本的对齐方式，右对齐
				fill: '#ccc', // 文本的颜色
				fontSize: 12 // 文本的字体大小
			}
		},
		grid: {
			top: '20%',
			right: '10%',
			left: '10%',
			bottom: '12%'
		},
		xAxis: {
			type: 'category',
			data: [
				'6-27',
				'6-27',
				'6-27',
				'6-27',
				'6-27',
				'6-27',
				'6-27',
				'6-27',
				'6-27'
			],
			axisTick: {
				show: true,
				alignWithLabel: true // 将刻度与标签对齐
			},
			axisLabel: {
				color: '#788a9d',
				textStyle: {
					fontSize: 10
				}
			}
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				color: '#788a9d', // 设置 Y 轴刻度数字颜色
				interval: 10 // 设置 y 轴刻度间隔为 10
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
		},
		series: [
			{
				type: 'line',
				data: [20, 25, 40, 35, 65, 55, 45, 33, 10],
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(73, 27, 100, 0.8)' // 渐变色起始颜色
							},
							{
								offset: 1,
								color: 'rgba(16, 68, 92, 1)' // 渐变色结束颜色
							}
						]
					}
				},
				symbol: 'circle', // 使用圆点标记数据点
				symbolSize: 3, // 圆点的大小
				itemStyle: {
					borderColor: 'red', // 折线点外部填充红色
					color: 'white' // 折线点内部填充为白色
				},
				lineStyle: {
					color: '#6d4881' // 折线的颜色
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
		<boxTitle :title="props.title" />
		<div class="chart-box mt2 h85%">
			<div class="chart h100% w100%" id="alarmChart"></div>
		</div>
	</div>
</template>
