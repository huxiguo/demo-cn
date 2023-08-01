<script setup lang="ts">
import boxTitle from '@/components/boxTitle/index.vue'
import safetyChart from '@/components/safetyChart/index.vue'

const props = defineProps<{
	title: string
}>()
</script>

<template>
	<div>
		<!-- title -->
		<boxTitle :title="props.title" />
		<!-- chart -->
		<safetyChart />
	</div>
</template>
