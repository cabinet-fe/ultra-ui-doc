<template>
  <u-table :data="data" :columns="columns" tree style="max-height: 400px">
  </u-table>
</template>

<script lang="ts" setup>
import { defineTableColumns } from 'ultra-ui'

const columns = defineTableColumns(
  [
    { name: '单位编码', key: 'code', fixed: 'left' },
    { name: '单位名称', key: 'name', fixed: 'left' },
    { name: '单位类型', key: 'type' },
    { name: '单位地址', key: 'address' },
    { name: '单位电话', key: 'phone' }
  ],
  { align: 'center' }
)

const data = Array.from({ length: 10 }).map((_, index) => ({
  code: `${index + 1}`.padStart(3, '0'),
  name: `单位${index + 1}`,
  type: '单位',
  address: '单位地址',
  phone: '单位电话',
  children: Array.from({ length: Math.round(Math.random() * 3) }).map(
    (_, ci) => ({
      code: `${index + 1}`.padStart(3, '0') + `${ci + 1}`.padStart(3, '0'),
      name: `单位${index + 1}-${ci + 1}`,
      type: '部门',
      address: '单位地址',
      phone: '单位电话'
    })
  )
}))
</script>
