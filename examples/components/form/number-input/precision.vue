<template>
  <div class="mb-2">
    <span>固定精度</span>
    <u-number-input v-model="value" :precision="2" />
  </div>
  <div class="mb-2">
    <span>最小精度</span>
    <u-number-input v-model="value" :min-precision="2" />
  </div>
  <div>
    <span>最大精度</span>
    <u-number-input v-model="value" :max-precision="2" />
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const value = shallowRef()
</script>
