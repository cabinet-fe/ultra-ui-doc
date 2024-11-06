<template>
  <u-select v-model="selected" :options="options" filterable />
</template>

<script setup lang="ts">
import { shallowRef } from "vue"

const selected = shallowRef()

const options = Array.from({ length: 80 }).map((_, i) => ({
  label: `选项${i}`,
  value: i + "",
}))
</script>
