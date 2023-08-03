<script setup lang="ts">
import boxTitle from '@/components/boxTitle/index.vue'
</script>

<template>
	<div h="100%" w="100%">
		<boxTitle title="4#天棚热泵主机" />
		<div mt4>
			<div flex justify-around>
				<div flex items-center>
					<div class="icon-gl"></div>
					<div ml3 flex flex-col>
						<span text="2 #9dceff">功率</span>
						<span text="6 #fff">211.8</span>
					</div>
				</div>
				<div flex>
					<div class="icon-dl"></div>
					<div ml3 flex flex-col>
						<span text="2 #9dceff">电量</span>
						<span text="6 #fff">272322.2</span>
					</div>
				</div>
			</div>
			<div h8vh flex flex-wrap justify-around text="white">
				<div mt2>
					<span>机组运行工况</span>
					<span bg="#e19f40" ml4 px2>制热</span>
				</div>
				<div mt2>
					<span>机组运行工况</span>
					<span bg="#00d5b8" ml4 px2>制热</span>
				</div>
				<div mt2>
					<span>机组运行工况</span>
					<span bg="#00d5b8" ml4 px2>制热</span>
				</div>
				<div mt2>
					<span>机组运行工况</span>
					<span bg="#00d5b8" ml4 px2>制热</span>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.icon-gl {
	width: 51px;
	height: 52px;
	background: url(../../assets/img/gl.png) no-repeat;
}
.icon-dl {
	width: 51px;
	height: 52px;
	background: url(../../assets/img/dl.png) no-repeat;
}
</style>
