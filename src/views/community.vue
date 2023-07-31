<script setup lang="ts">
import boxTitle from '@/components/boxTitle/index.vue'
</script>

<template>
  <div class="h100% flex items-start justify-between">
    <div class="h90% w20% flex flex-col">
      <div class="m2 h20% p4 tm">
        <!-- title -->
        <boxTitle title="安防概况" />
        <!-- chart -->
      </div>
      <div class="m2 m-t0 h80% tm">下</div>
    </div>
    <div class="h90% w20% flex flex-col">
      <div class="h10% tm mtl">黑名单</div>
      <div class="h30% tm mtl">访客</div>
      <div class="h30% tm mtl">业主关怀</div>
      <div class="h30% tm mtl">报警数据</div>
    </div>
  </div>
</template>