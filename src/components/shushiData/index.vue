<script setup lang="ts">
import * as echarts from 'echarts'
import boxTitle from '@/components/boxTitle/index.vue'
const props = defineProps<{
	title: string
}>()
const initChart = () => {
	const chartDom = document.getElementById('shushiDataChart') as HTMLDivElement
	const myChart = echarts.init(chartDom)
	const options = {
		grid: {
			top: 0,
			left: '1%', // 设置 grid 组件的左边距
			right: '1%' // 设置 grid 组件的右边距
		},
		series: [
			{
				type: 'pie',
				radius: ['40%', '60%'], // 设置内外半径，实现圆环样式
				startAngle: 50, // 设置饼图的起始角度为90度，即从最下面开始绘制数据
				data: [
					{ name: '项1', value: 65, itemStyle: { color: '#2ad6c7' } },
					{ name: '项1', value: 20, itemStyle: { color: '#00000000' } }
				],
				label: {
					show: false
				}
			}
		],
		graphic: [
			{
				type: 'text', // 添加文本类型的图形
				left: 'center', // 文本的水平位置居中
				top: '42%', // 文本的垂直位置在中心稍上
				style: {
					text: '室内温度', // 要显示的上面文字内容
					textAlign: 'center', // 文本的对齐方式
					fill: '#2ad7c8', // 文本的颜色
					fontSize: 12 // 文本的字体大小
				}
			},
			{
				type: 'text', // 添加文本类型的图形
				left: 'center', // 文本的水平位置居中
				top: '52%', // 文本的垂直位置在中心稍下
				style: {
					text: '65%', // 要显示的下面文字内容
					textAlign: 'center', // 文本的对齐方式
					fill: '#2ad7c8', // 文本的颜色
					fontSize: 16 // 文本的字体大小
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
	<div h="100%" flex flex-col>
		<boxTitle :title="props.title" />
		<div h="80%" mt2 flex items-center>
			<div id="shushiDataChart" h="100%" w="40%"></div>
			<div w="100%" h="100%" flex flex-1 flex-col justify-center text="#fff">
				<div class="progress h35% flex flex-col justify-around">
					室内空气:32%
					<el-progress
						:text-inside="true"
						:stroke-width="18"
						:percentage="32"
						color="#0d8d85"
					/>
				</div>
				<div class="progress h35% flex flex-col justify-around">
					室内温度:53.685%
					<el-progress
						:text-inside="true"
						:stroke-width="18"
						:percentage="53.685"
						color="#0d8d85"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.progress :deep(.el-progress-bar__inner) {
	border-radius: 0px;
}
.progress :deep(.el-progress-bar__outer) {
	border-radius: 0px;
	background-color: #00000000;
}
</style>
