<script setup lang="ts"></script>

<template>
  <div
    class="box relative h100% bg-cover bg-center bg-no-repeat px5 pt10 before-absolute before-bottom-0 before-left-0 before-right-0 before-top-0 before-content-empty">
    <routerView />
  </div>
</template>

<style>
.box {
  background-image: url(./assets/main.jpg);
  z-index: -1;
}

/* .box::before {
  z-index: -1;
  background: radial-gradient(ellipse at center,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 70%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.84) 84%,
      rgba(0, 0, 0, 0.88) 88%,
      rgba(0, 0, 0, 0.94) 92%,
      rgba(0, 0, 0, 0.98) 94%,
      rgba(0, 0, 0) 100%);
} */
</style>
