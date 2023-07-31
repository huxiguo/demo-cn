<script setup lang="ts">
import boxTitle from '@/components/boxTitle/index.vue'
</script>

<template>
  <div class="h100% flex items-start justify-between">
    <div class="h90% w20% flex flex-col">
      <div class="tm m2 h20% p4">
        <!-- title -->
        <boxTitle title="安防概况" />
        <!-- chart -->
      </div>
      <div class="tm m2 m-t0 h80%">下</div>
    </div>
    <div class="h90% w20% flex flex-col">
      <div class="tm mtl h10%">黑名单</div>
      <div class="tm mtl h30%">访客</div>
      <div class="tm mtl h30%">业主关怀</div>
      <div class="tm mtl h30%">报警数据</div>
    </div>
  </div>
</template>