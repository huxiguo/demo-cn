<script setup lang="ts">
import boxTitle from '@/components/boxTitle/index.vue'
const props = defineProps<{
	title: string
}>()
</script>

<template>
	<div>
		<boxTitle :title="props.title" />
		<div ml4 mt1 flex items-center>
			<span class="black-icon"></span>
			<span block w="44" h="7" bg="#242634" text="#fff center" p1
				>近一月出现黑名单次数</span
			>
			<span text="#25c7ff 12">754</span>
		</div>
	</div>
</template>
<style>
.black-icon {
	display: inline-block;
	width: 64px;
	height: 64px;
	background-image: url('@/assets/img/user.png');
	background-repeat: no-repeat;
}
</style>
