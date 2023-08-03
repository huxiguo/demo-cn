<script setup lang="ts">
import bengChart from '@/components/bengChart/index.vue'
import dianyaChart from '@/components/dianyaChart/index.vue'
</script>

<template>
	<div class="h100vh flex items-start justify-between px4 pt16">
		<div class="h84vh w20vw flex flex-col">
			<div class="m2 h20vh min-w-360px tm">
				<bengChart />
			</div>
			<div class="m2 h20vh min-w-360px tm">
				<bengChart />
			</div>
			<div class="m2 h20vh min-w-360px tm">
				<bengChart />
			</div>
			<div class="m2 h20vh min-w-360px tm">
				<bengChart />
			</div>
		</div>
		<div class="h84vh w20vw flex flex-col">
			<div class="h12vh tm mtl bg-red">1</div>
			<div class="h30vh tm mtl">
				<dianyaChart />
			</div>
			<div class="h30vh tm mtl">33</div>
			<div class="h30vh tm mtl">4</div>
		</div>
	</div>
</template>
