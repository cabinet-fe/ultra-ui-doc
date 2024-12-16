<template>
  <div>
    <u-radio v-for="{ label, value } of items" v-model="radio1" :value="value">
      {{ label }}
    </u-radio>
    <div>
      <u-radio v-for="{ name, id } of items2" v-model="radio2" :value="id">
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
]
const items2 = [
  { name: "数据库", id: "1" },
  { name: "云计算", id: "2" },
]
</script>
