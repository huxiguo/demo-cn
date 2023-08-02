<script setup lang="ts">
import safetySituation from '@/components/safetySituation/index.vue'
import alarmMessage from '@/components/alarmMessage/index.vue'
</script>

<template>
	<div class="h100% flex items-start justify-between px4 pt16">
		<div class="h90% w20% flex flex-col">
			<div class="m2 h22% min-h-180px min-w-360px tm">
				<safetySituation title="安防概况" />
			</div>
			<div class="m2 m-t0 h78% min-h-300px min-w-360px tm">
				<alarmMessage title="报警讯息列表" />
			</div>
		</div>
		<div class="h90% w20% flex flex-col">
			<div class="h10% tm mtl">黑名单</div>
			<div class="h30% tm mtl">访客</div>
			<div class="h30% tm mtl">业主关怀</div>
			<div class="h30% tm mtl">报警数据</div>
		</div>
	</div>
</template>
