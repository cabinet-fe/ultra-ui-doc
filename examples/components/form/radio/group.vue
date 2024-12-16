<template>
  <u-radio-group :items="items" v-model="radio1" />
</template>

<script setup lang="ts">
import { shallowRef } from "vue"

const radio1 = shallowRef()

const items = [
  { label: "前端开发", value: "1" },
  { label: "后端开发", value: "2" },
  { label: "数据库", value: "3" },
  { label: "云计算", value: "4" },
]
</script>
