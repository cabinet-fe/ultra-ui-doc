<template>
  <div>
    <u-paginator
      v-model:page-number="pageState.current"
      v-model:page-size="pageState.size"
      :total="120"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const pageState = reactive({
  current: 1,
  size: 40
})
</script>
