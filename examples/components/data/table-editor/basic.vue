<template>
  <u-table-editor :columns="columns" v-model="data">
    <template #column:name="{ model }">
      <u-input v-bind="model" />
    </template>
    <template #column:age="{ model }">
      <u-number-input v-bind="model" />
    </template>
    <template #column:gender="{ model }">
      <u-select v-bind="model" :options="genderOptions" />
    </template>
  </u-table-editor>
</template>

<script setup lang="ts">
import { defineTableColumns } from 'ultra-ui'
import { shallowRef } from 'vue'

const columns = defineTableColumns([
  { key: 'name', name: '姓名' },
  { key: 'age', name: '年龄' },
  { key: 'gender', name: '性别' }
])

const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' }
]

const data = shallowRef([])
</script>
