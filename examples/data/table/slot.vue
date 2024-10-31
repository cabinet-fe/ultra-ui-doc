<template>
  <u-table :data="data" :columns="columns">
    <template #column:name="{ model }">
      <u-input v-bind="model" />
    </template>

    <template #header:gender="{ column }">
      <u-tip content="aaa">
        <span style="color: red">{{ column.name }}</span>
      </u-tip>
    </template>

    <template #column:gender="{ val }">
      <u-tag :type="val === '男' ? 'primary' : 'danger'">{{ val }}</u-tag>
    </template>
  </u-table>

  <div>
    <u-button @click="handleAdd">添加数据</u-button>
  </div>
</template>

<script lang="ts" setup>
import { date } from 'cat-kit/fe'
import { defineTableColumns } from 'ultra-ui'
import { h, shallowRef } from 'vue'

const columns = defineTableColumns(
  [
    {
      name: '学生ID',
      key: 'studentId',
      nameRender: ({ column }) => column.name
    },
    { name: '姓名', key: 'name', fixed: 'left', width: 200 },
    { name: '性别', key: 'gender' },
    { name: '出生日期', key: 'birthDate' },
    { name: '年级', key: 'grade' },
    { name: '班级', key: 'class' },
    { name: '入学日期', key: 'enrollmentDate', fixed: 'right' },
    { name: '家庭住址', key: 'address' }
  ],
  { align: 'center' }
)

const data = shallowRef<Record<string, any>[]>([])

function handleAdd() {
  data.value = [
    ...data.value,
    {
      studentId: data.value.length + 1,
      name: `学生${data.value.length + 1}`,
      gender: data.value.length % 2 === 0 ? '男' : '女',
      birthDate: date('1995-01-01')
        .calc(Math.round(Math.random() * 180), 'days')
        .format('yyyy-MM-dd'),
      grade: Math.ceil(Math.random() * 6),
      class: `班级${data.value.length + 1}`,
      enrollmentDate: date(
        Date.now() + Math.round(Math.random() * 100) * 86400000
      ).format('yyyy-MM-dd'),
      address: `地址${data.value.length + 1}`
    }
  ]
}
</script>
