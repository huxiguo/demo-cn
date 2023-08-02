<script setup lang="ts">
const props = defineProps<{
	info: {
		id: string
		title: string
		type: number
		time: string
	}
}>()
</script>

<template>
	<div m-t-2 h14 flex text="#fff">
		<!-- 左侧色块 -->
		<div h="100%" w="4" bg="#11467c"></div>
		<!-- 右侧信息 -->
		<div m-l-4 flex flex-col justify-between w="100% ">
			<div h="8" bg-black-50 flex justify-between p1 text="center">
				<div>报警{{ props.info.id }}:{{ props.info.title }}</div>
				<div
					v-if="props.info.type === 0"
					w="12"
					text="3"
					mr2
					flex
					items-center
					justify-center
					border="rd-1"
					bg="#673ab7"
				>
					派遣中
				</div>
				<div
					v-else-if="props.info.type === 1"
					w="12"
					text="3"
					mr2
					flex
					items-center
					justify-center
					border="rd-1"
					bg="#409eff"
				>
					处理中
				</div>
				<div
					v-else
					w="12"
					text="3"
					mr2
					flex
					items-center
					justify-center
					border="rd-1"
					bg="#3f51b5"
				>
					已消警
				</div>
			</div>
			<div>{{ props.info.time }}</div>
		</div>
	</div>
</template>
