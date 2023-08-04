<script setup lang="ts">
import bengChart from '@/components/bengChart/index.vue'
import dianyaChart from '@/components/dianyaChart/index.vue'
import dianliuChart from '@/components/dianliuChart/index.vue'
import visitorChart from '@/components/visitorChart02/index.vue'
const value = ref('')

const options = [
	{
		value: 'Option1',
		label: 'Option1'
	},
	{
		value: 'Option2',
		label: 'Option2'
	},
	{
		value: 'Option3',
		label: 'Option3'
	},
	{
		value: 'Option4',
		label: 'Option4'
	},
	{
		value: 'Option5',
		label: 'Option5'
	}
]
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
			<div class="h5vh min-h-60px tm">
				<div h="100%" w="100%" class="selectBox">
					<el-select
						v-model="value"
						class="w100%"
						placeholder="请选择"
						size="large"
						:popper-append-to-body="false"
						disabled
					>
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						/>
					</el-select>
				</div>
			</div>
			<div class="h25vh tm mtl">
				<dianyaChart />
			</div>
			<div class="h25vh tm mtl">
				<div h="100%" w="100%">
					<dianliuChart />
				</div>
			</div>
			<div class="h25vh tm mtl">
				<div h="100%" w="100%">
					<visitorChart title="超时访客数据" />
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.el-select :deep(.el-input__wrapper) {
	background-color: transparent;
	box-shadow: 0 0 0 0;
	border: 1px solid #3f51b5;
}
.el-select :deep(.el-input__wrapper .el-input__inner) {
	color: #fff !important;
	font-size: 1rem;
}
:deep(.el-input__wrapper:hover) {
	box-shadow: 0 0 0 0 !important;
}
:deep(.el-input.is-focus .el-input__wrapper) {
	box-shadow: 0 0 0 0 !important;
}
:deep(.el-select .el-input__wrapper.is-focus) {
	box-shadow: 0 0 0 0 !important;
}
</style>
