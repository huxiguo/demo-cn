<template>
	<div class="flex justify-between pt-2">
		<span flex flex-col items-center>
			<div class="icon h64px w21 bg-center bg-no-repeat"></div>
			<div tag>业主人数</div>
			<div text="#2d65a1" m1>2318</div>
		</span>
		<span w21 flex flex-col items-center>
			<div h64px flex flex-col items-center justify-around>
				<span text="#487ee9 3">当前社区总人数</span>
				<span text="#8ec8fc 6">12530</span>
			</div>
			<div tag>访客人数</div>
			<div text="#2d65a1 4">880</div>
		</span>
		<span w21 flex flex-col items-center>
			<div h64px flex flex-col items-center justify-around>
				<span p1 border="rd-1" bg="#343651" text="#8ec8fc 3">黑名单</span>
				<span text="#8ec8fc 4">25</span>
			</div>
			<div tag>外来人数</div>
			<div text="#2d65a1 4">174</div>
		</span>
	</div>
</template>

<style scoped>
.icon {
	background-image: url('@/assets/img/title.png');
}
</style>
