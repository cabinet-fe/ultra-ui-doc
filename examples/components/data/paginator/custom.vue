<template>
  <u-paginator
    :total="1000"
    :page-size-options="[10, 20, 50, 100]"
    v-model:page-number="pageState.current"
    v-model:page-size="pageState.size"
  />
  {{ pageState }}
</template>

<script setup>
import { reactive } from 'vue'

const pageState = reactive({
  current: 1,
  size: 20
})
</script>
