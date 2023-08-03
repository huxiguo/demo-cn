<script setup lang="ts">
import boxTitle from '@/components/boxTitle/index.vue'

const props = defineProps<{
	title: string
}>()
</script>

<template>
	<div>
		<!-- title -->
		<boxTitle :title="props.title" />
		<!-- chart -->
		<div mt-4 flex flex-col justify-around>
			<div flex>
				<div class="icon h64px w21 bg-center bg-no-repeat"></div>
				<div flex flex-col items-center justify-center>
					<span text="#475ada">摄像头总数量</span>
					<span text="#8ec8fc 8">53</span>
				</div>
			</div>
			<div flex justify-around>
				<span w32 tag>
					<i class="i-ep-user-filled text-4"></i>
					人脸识别摄像头
				</span>
				<span w25 tag>
					<i class="i-ep-operation text-4 text-white"></i>
					可控制摄像头
				</span>
				<span w22 tag>
					<i class="i-ep-warning text-4 text-white"></i>
					故障摄像头
				</span>
			</div>
			<div flex justify-around>
				<span text="#2d65a1">8</span>
				<span text="#2d65a1">20</span>
				<span text="#2d65a1">2</span>
			</div>
		</div>
	</div>
</template>
<style scoped>
.icon {
	background-image: url('@/assets/img/title.png');
}
</style>
