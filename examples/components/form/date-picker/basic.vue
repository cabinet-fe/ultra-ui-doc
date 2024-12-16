<template>
  <div>
    <div>
      <u-radio-group v-model="dateType" :items="items" />
    </div>

    <u-date-picker v-model="d" :type="dateType"></u-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { date } from 'cat-kit/fe'
import { shallowRef, watchEffect } from 'vue'

const d = shallowRef<string>()

const dateType = shallowRef<'date' | 'month' | 'year'>('date')

watchEffect(() => {
  d.value = {
    date: date().format(),
    month: date().format('YYYY-MM'),
    year: date().format('YYYY')
  }[dateType.value]
})

const items = [
  { label: '日期', value: 'date' },
  { label: '月份', value: 'month' },
  { label: '年份', value: 'year' }
]
</script>
