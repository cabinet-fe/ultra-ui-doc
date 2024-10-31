<template>
  <div class="mb-4">
    <span>数据量：</span>
    <u-number-input
      v-model="count"
      class="w-[100px]"
      :clearable="false"
      :min="0"
      :max="100000"
      :step="10000"
    />
  </div>
  <u-table :data="data" :columns="columns" style="max-height: 400px"> </u-table>
</template>

<script lang="ts" setup>
import { date } from 'cat-kit/fe'
import { defineTableColumns, shallowComputed } from 'ultra-ui'
import { ref } from 'vue'

const columns = defineTableColumns(
  [
    { name: '学生ID', key: 'studentId' },
    { name: '姓名', key: 'name', fixed: 'left' },
    { name: '性别', key: 'gender' },
    { name: '出生日期', key: 'birthDate' },
    { name: '年级', key: 'grade' },
    { name: '班级', key: 'class' },
    { name: '入学日期', key: 'enrollmentDate', fixed: 'right' },
    { name: '家庭住址', key: 'address' }
  ],
  { align: 'center' }
)

const count = ref(10000)

const data = shallowComputed(() => {
  return Array.from({ length: count.value }).map((_, index) => ({
    studentId: index + 1,
    name: `学生${index + 1}`,
    gender: index % 2 === 0 ? '男' : '女',
    birthDate: date('1995-01-01')
      .calc(Math.round(Math.random() * 180), 'days')
      .format('yyyy-MM-dd'),
    grade: Math.ceil(Math.random() * 6),
    class: `班级${index + 1}`,
    enrollmentDate: date(
      Date.now() + Math.round(Math.random() * 100) * 86400000
    ).format('yyyy-MM-dd'),
    address: `地址${index + 1}`
  }))
})
</script>
