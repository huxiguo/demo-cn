<script setup lang="ts">
import * as echarts from 'echarts'
import boxTitle from '@/components/boxTitle/index.vue'
const props = defineProps<{
	title: string
}>()
const initChart = () => {
	const chartDom = document.getElementById('proprietorChart') as HTMLDivElement
	const myChart = echarts.init(chartDom)
	const options = {
		grid: {
			left: '10%', // 设置 grid 组件的左边距
			right: '10%' // 设置 grid 组件的右边距
		},
		legend: {
			orient: 'vertical', // 图例的布局方向为垂直，放在右边
			left: 'auto', // 图例位于 grid 右侧，设置为 'auto' 表示居中左右对齐
			right: '10%', // 图例位于 grid 右侧的位置偏移
			top: 'middle', // 设置图例垂直居中
			textStyle: {
				color: '#fff' // 设置图例文本颜色
			}
		},
		graphic: [
			{
				type: 'text', // 绘制文字
				left: '13%', // 文字水平居中
				top: '40%', // 文字垂直居中
				style: {
					text: '业主关怀', // 文字内容
					textAlign: 'center', // 文字水平对齐方式
					fill: '#528bb1', // 文字颜色
					fontSize: 12 // 文字字号
				}
			},
			{
				type: 'image', // 绘制图片
				left: 'center', // 图片水平居中
				top: '40%', // 图片垂直居中
				style: {
					image: '', // 图片地址
					width: 80, // 图片宽度
					height: 80 // 图片高度
				}
			}
		],
		series: [
			{
				type: 'pie',
				radius: ['40%', '60%'], // 设置内外半径实现圆环样式
				center: ['20%', '50%'], // 饼图中心位置，设置为 '40%' 表示居中左右对齐
				data: [
					{ name: '长期空置', value: 10, itemStyle: { color: '#5e63fb' } },
					{ name: '长期未外出', value: 30, itemStyle: { color: '#41e8d7' } },
					{
						name: '小孩独自出门超时',
						value: 50,
						itemStyle: { color: '#aa5ce7' }
					},
					{
						name: '老人独自出门超时',
						value: 80,
						itemStyle: { color: '#a0ea66' }
					}
					// 其他数据项...
				],
				label: {
					show: false // 不显示标签
				},
				labelLine: {
					show: false // 不显示标签引导线
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
		<div class="chart mt2 h90%">
			<div class="h100% w100%" id="proprietorChart"></div>
			<div class="yezhu"></div>
		</div>
	</div>
</template>
<style>
.chart {
	position: relative;
}
.yezhu {
	width: 10px;
	height: 10px;
	position: absolute;
	top: 45%;
	left: 16%;
	width: 80px;
	height: 80px;
	background: url('@/assets/img/yz.png') no-repeat;
}
</style>
