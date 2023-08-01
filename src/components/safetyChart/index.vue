<template>
	<div class="flex justify-around pt-2">
		<span flex flex-col items-center>
			<div class="icon h64px w64px bg-no-repeat"></div>
			<div class="tag">业主人数</div>
			<div text="#2d65a1" m1>2318</div>
		</span>
		<span>
			<div h64px w64px>当前社区总人数</div>
			<div>12530</div>
			<div tag>访客人数</div>
			<div>880</div>
		</span>
		<span>
			<div h64px w64px>黑名单</div>
			<div>25</div>
			<div tag>外来人数</div>
			<div>174</div>
		</span>
	</div>
</template>

<style scoped>
.icon {
	background-image: url('@/assets/img/title.png');
}
</style>
