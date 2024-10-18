<template>
  <u-button :type="button.type" v-for="button of buttons">
    {{ button.text }}
  </u-button>
</template>

<script lang="ts" setup>
const buttons = [
  { type: 'primary', text: '主题' },
  { type: 'success', text: '成功' },
  { type: 'warning', text: '警告' },
  { type: 'danger', text: '危险' },
  { type: 'info', text: '信息' }
] as Array<{ type: any; text: string }>
</script>
