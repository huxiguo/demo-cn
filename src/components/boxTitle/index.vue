<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div flex items-center>
    <!-- 左侧图标 -->
    <span class="icon inline-block h6 w8 bg-no-repeat"></span>
    <!-- 右侧文本信息 -->
    <span class="text-5 font-700 text-#475ada">{{ props.title }}</span>
  </div>
</template>

<style scoped>
.icon {
  background-image: url('@/assets/img/titleImg.png');
}
</style>