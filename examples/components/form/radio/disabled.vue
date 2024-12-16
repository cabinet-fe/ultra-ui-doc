<template>
  <div>
    <u-radio
      v-for="{ label, value } of items"
      v-model="radio1"
      :value="value"
      :disabled="value === '3'"
    >
      {{ label }}
    </u-radio>
    <div>
      <u-radio
        v-for="{ name, id } of items2"
        v-model="radio2"
        :value="id"
        :disabled="id === '4'"
      >
        {{ name }}-{{ id }}
      </u-radio>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue"

const radio1 = shallowRef()
const radio2 = shallowRef()

const items = [
  { label: "前端开发", value: "1" },
  { label: "后端开发", value: "2" },
  { label: "数据库", value: "3" },
  { label: "云计算", value: "4" },
]
const items2 = [
  { name: "前端开发", id: "1" },
  { name: "后端开发", id: "2" },
  { name: "数据库", id: "3" },
  { name: "云计算", id: "4" },
]
</script>
