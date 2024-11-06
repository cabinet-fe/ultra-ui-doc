<template>
    <u-multi-select
      :visibility-limit="3"
      filterable
      v-model="checked"
      :options="options"
      @update:model-value="console.log"
    />
  </template>
  
  <script setup lang="ts">
  import { shallowRef } from "vue"
  
  const checked = shallowRef([])
  
  const options = Array.from({ length: 80 }).map((_, i) => ({
    label: `选项${i}`,
    value: i,
  }))
  </script>
  