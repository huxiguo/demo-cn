<script setup lang="ts">
import boxTitle from '@/components/boxTitle/index.vue'
const props = defineProps<{
	modelValue?: boolean
}>()
</script>

<template>
	<div h="100%" w="100%" flex flex-col>
		<boxTitle title="摄像头视频监控" />
		<div h="100%" m2 flex flex-row flex-wrap overflow-auto>
			<template v-for="item in 20" :key="item">
				<div w="10rem" h="7rem" m2 flex flex-col items-center>
					<video
						w="10rem"
						h="6rem"
						src="@/assets/img/videoDemo.mp4"
						controls
					></video>
					<span text="4 mt3 white">地点</span>
				</div>
			</template>
		</div>
	</div>
</template>
