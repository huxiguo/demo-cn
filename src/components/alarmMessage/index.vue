<script setup lang="ts">
import boxTitle from '@/components/boxTitle/index.vue'
import alarmMeaageItem from '@/components/alarmMessageItem/index.vue'
const props = defineProps<{
	title: string
}>()

// 报警讯息列表数据
interface InfoListIntance {
	id: string
	title: string
	type: number
	time: string
}
const infoList: InfoListIntance[] = [
	{
		id: '1',
		title: '报警讯息列表1',
		type: 0,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '2',
		title: '报警讯息列表2',
		type: 1,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '3',
		title: '报警讯息列表3',
		type: 2,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '4',
		title: '报警讯息列表4',
		type: 0,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '5',
		title: '报警讯息列表5',
		type: 1,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '6',
		title: '报警讯息列表6',
		type: 2,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '7',
		title: '报警讯息列表7',
		type: 0,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '8',
		title: '报警讯息列表8',
		type: 1,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '9',
		title: '报警讯息列表9',
		type: 2,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '10',
		title: '报警讯息列表10',
		type: 0,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '11',
		title: '报警讯息列表11',
		type: 1,
		time: '2021-08-01 12:00'
	},
	{
		id: '12',
		title: '报警讯息列表12',
		type: 2,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '13',
		title: '报警讯息列表13',
		type: 0,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '14',
		title: '报警讯息列表14',
		type: 1,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '15',
		title: '报警讯息列表15',
		type: 2,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '16',
		title: '报警讯息列表16',
		type: 0,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '17',
		title: '报警讯息列表17',
		type: 1,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '18',
		title: '报警讯息列表18',
		type: 2,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '19',
		title: '报警讯息列表19',
		type: 0,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '20',
		title: '报警讯息列表20',
		type: 1,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '21',
		title: '报警讯息列表21',
		type: 2,
		time: '2021-08-01 12:00:00'
	},
	{
		id: '22',
		title: '报警讯息列表22',
		type: 0,
		time: '2021-08-01 12:00:00'
	}
]
</script>

<template>
	<div h="100%" overflow-hidden>
		<boxTitle :title="props.title" />
		<div m-t-3 h="100%" overflow-auto>
			<template v-for="item in infoList" :key="item.id">
				<alarmMeaageItem :info="item" />
			</template>
		</div>
	</div>
</template>
