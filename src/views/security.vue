<script setup lang="ts">
import cameraOverview from '@/components/cameraOverview/index.vue'
import alarmMessage from '@/components/alarmMessage/index.vue'
import cameraCoverage from '@/components/cameraCoverage/index.vue'
import videoChart from '@/components/videoChart/index.vue'
</script>

<template>
	<div class="h100vh flex items-start justify-between px4 pt16">
		<div class="h84vh w20vw flex flex-col">
			<div class="m2 h18vh min-h-180px min-w-360px tm">
				<cameraOverview title="摄像头概述总览" />
			</div>
			<div class="m2 h18vh min-h-180px min-w-360px tm">
				<cameraCoverage title="摄像头覆盖占比" />
			</div>
			<div class="m2 m-t0 h60vh min-h-300px min-w-360px tm">
				<alarmMessage title="报警讯息列表" />
			</div>
		</div>
		<div class="h84vh w20vw tm">
			<videoChart title="摄像头视频监控" />
		</div>
	</div>
</template>
