<script setup lang="ts">
import safetySituation from '@/components/safetySituation/index.vue'
import alarmMessage from '@/components/alarmMessage/index.vue'
import blackUser from '@/components/blackUser/index.vue'
import visitorChart from '@/components/visitorChart/index.vue'
import proprietorChart from '@/components/proprietorChart/index.vue'
import alarmChart from '@/components/alarmChart/index.vue'
</script>

<template>
	<div class="h100vh flex items-start justify-between px4 pt16">
		<div class="h84vh w20vw flex flex-col">
			<div class="m2 h22vh min-h-180px min-w-360px tm">
				<safetySituation title="安防概况" />
			</div>
			<div class="m2 m-t0 h105vh min-h-300px min-w-360px tm">
				<alarmMessage title="报警讯息列表" />
			</div>
		</div>
		<div class="h84vh w20vw flex flex-col">
			<div class="h12vh tm mtl">
				<blackUser title="黑名单数据" />
			</div>
			<div class="h30vh tm mtl">
				<visitorChart title="超时访客数据" />
			</div>
			<div class="h30vh tm mtl">
				<proprietorChart title="业主关怀" />
			</div>
			<div class="h30vh tm mtl">
				<alarmChart title="报警数据" />
			</div>
		</div>
	</div>
</template>
