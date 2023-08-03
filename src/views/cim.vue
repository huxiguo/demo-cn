<script setup lang="ts">
import alarmMessage from '@/components/alarmMessage/index.vue'
import shushiData from '@/components/shushiData/index.vue'
import nengxiaoChart from '@/components/nengxiaoChart/index.vue'
import runningChart from '@/components/runningChart/index.vue'
</script>

<template>
	<div class="h100vh flex items-start justify-between px4 pt16">
		<div class="h84vh w20vw flex flex-col">
			<div class="m2 h18vh min-h-180px min-w-360px tm">
				<!-- title -->
				<boxTitle title="安防概况" />
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
						<span w20 tag> 业主人数 </span>
						<span w20 tag> 访客人数 </span>
						<span w20 tag> 外来人数 </span>
					</div>
					<div flex justify-around>
						<span text="#2d65a1">2318</span>
						<span text="#2d65a1">880</span>
						<span text="#2d65a1">174</span>
					</div>
				</div>
			</div>
			<div class="m2 h18vh min-w-360px tm">
				<boxTitle title="摄像头视频监控" />
				<div w="100%" h="100%" text="white" flex overflow-auto p2>
					<template v-for="item in 10" :key="item">
						<div mr2 flex flex-col items-center justify-around>
							<img
								src="@/assets/img/jk.png"
								alt="星关广场云台"
								h="65%"
								w="6rem"
							/>
							<span>星关广场云台</span>
						</div>
					</template>
				</div>
			</div>
			<div class="m2 m-t0 h60vh min-h-300px min-w-360px tm">
				<alarmMessage title="报警讯息列表" />
			</div>
		</div>
		<div class="h84vh w20vw flex flex-col">
			<div class="h18vh min-h-180px tm mtl">
				<shushiData title="舒适度数据统计" />
			</div>
			<div class="h30vh tm mtl" flex flex-col>
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
			<div class="h30vh tm mtl">
				<nengxiaoChart title="系统能效统计" />
			</div>
			<div class="h30vh tm mtl">
				<runningChart title="机主运行状况" />
			</div>
		</div>
	</div>
</template>
<style scoped>
.icon {
	background-image: url('@/assets/img/title.png');
}
</style>
