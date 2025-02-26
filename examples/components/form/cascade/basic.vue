<template>
  <div>
    <u-cascade :data="data" v-model="value"></u-cascade>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const value = shallowRef('1/1-5/1-5-1')

const data = [
  {
    label: '江苏省',
    value: '1',

    children: [
      { label: '南京市', value: '1-1' },
      { label: '无锡市', value: '1-2' },
      { label: '徐州市', value: '1-3' },
      { label: '常州市', value: '1-4' },
      {
        label: '苏州市',
        value: '1-5',
        children: [
          { label: '姑苏区', value: '1-5-1' },
          { label: '吴中区', value: '1-5-2' },
          { label: '相城区', value: '1-5-3' },
          { label: '虎丘区', value: '1-5-4' },
          { label: '吴江区', value: '1-5-5' },
          { label: '常熟市', value: '1-5-6' },
          { label: '张家港市', value: '1-5-7' },
          { label: '昆山市', value: '1-5-8' }
        ]
      },
      { label: '南通市', value: '1-6' },
      { label: '连云港市', value: '1-7' },
      { label: '淮安市', value: '1-8' },
      { label: '盐城市', value: '1-9' },
      { label: '扬州市', value: '1-10' }
    ]
  }
]
</script>
