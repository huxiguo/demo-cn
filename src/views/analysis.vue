<script setup lang="ts">
import feiyongChart from '@/components/feiyongChart/index.vue'
import leixingChart from '@/components/leixingChart/index.vue'
import fenxiChart from '@/components/fenxiChart/index.vue'
</script>

<template>
	<div class="h100vh flex items-start justify-between px4 pt16">
		<div class="h84vh w20vw flex flex-col">
			<div class="m2 h18vh min-w-360px tm">
				<div w="100%" h="100%">
					<nxTag />
				</div>
			</div>
			<div class="m2 h20vh min-w-360px tm">
				<div w="100%" h="100%">
					<feiyongChart />
				</div>
			</div>
			<div class="m2 h25vh min-w-360px tm">
				<div w="100%" h="100%">
					<leixingChart />
				</div>
			</div>
			<div class="m2 20vh min-w-360px min-h-200px tm">
				<div w="100%" h="100%">
					<fenxiChart />
				</div>
			</div>
		</div>
		<div class="h84vh w20vw flex flex-col">
			<div class="m2 h25vh min-w-360px tm">
				<div w="100%" h="100%">
					<boxTitle title="能源数据概况" />
					<div mt2 flex flex-wrap>
						<div w="50%" mb4 flex flex-col items-center>
							<span text="3 white">本月总能耗（单位:kw.h）</span>
							<span text="7 #22c0f3">11787</span>
						</div>
						<div w="50%" mb4 flex flex-col items-center>
							<span text="3 white">本年总能耗（单位:kw.h）</span>
							<span text="7 #22c0f3">210688</span>
						</div>
						<div w="50%" mb4 flex flex-col items-center>
							<span text="3 white">本日总负荷（单位:kw.h）</span>
							<span text="7 #22c0f3">73779</span>
						</div>
						<div w="50%" mb4 flex flex-col items-center>
							<span text="3 white">本年总负荷（单位:kw.h）</span>
							<span text="7 #22c0f3">10127</span>
						</div>
						<div w="50%" mb4 flex flex-col items-center>
							<span text="3 white">本日总电费（单位:元）</span>
							<span text="7 #22c0f3">5646</span>
						</div>
						<div w="50%" mb4 flex flex-col items-center>
							<span text="3 white">本年总电费（单位:元）</span>
							<span text="7 #22c0f3">203231</span>
						</div>
					</div>
				</div>
			</div>
			<div class="m2 h25vh min-w-360px tm">
				<div w="100%" h="100%">
					<nengxiaoChart title="系统能效统计" />
				</div>
			</div>
			<div class="m2 h40vh min-w-360px tm">
				<div w="100%" h="100%" bg="black"></div>
			</div>
		</div>
	</div>
</template>
