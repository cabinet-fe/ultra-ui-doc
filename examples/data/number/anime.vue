<template>
  <div>
    <u-number :value="1234" tween v-if="refreshed" :duration="duration" />

    <div class="mt-2">
      动画持续时间
      <u-number-input
        v-model="duration"
        :clearable="false"
        :min="100"
        :precision="0"
        :step="1000"
        style="width: 100px"
      />
      <u-button @click="refresh">刷新动画</u-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

const value = ref(1234)

const refreshed = ref(true)

const duration = ref(1000)

const refresh = () => {
  refreshed.value = false
  nextTick(() => {
    refreshed.value = true
  })
}
</script>
