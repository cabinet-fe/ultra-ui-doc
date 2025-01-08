<template>
  <u-button type="primary" @click="show"> show message confirm </u-button>
</template>

<script lang="ts" setup>
import { MessageConfirm } from 'ultra-ui'

const show = () =>
  MessageConfirm({
    title: 'this is a title',
    message: 'this is a message',
    confirmButtonType: 'primary',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    onClose: (action) => {}
  })
</script>
