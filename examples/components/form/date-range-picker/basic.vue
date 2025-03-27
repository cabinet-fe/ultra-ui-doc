<template>
  <div>
    <div>
      <u-radio-group v-model="dateType" :items="items" />
    </div>

    <u-date-range-picker v-model="value" :type="dateType"></u-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef, watchEffect } from 'vue'

const value = shallowRef<[string, string]>()

const dateType = shallowRef<'date' | 'month' | 'year'>('date')

const items = [
  { label: '日期', value: 'date' },
  { label: '月份', value: 'month' },
  { label: '年份', value: 'year' }
]
</script>
