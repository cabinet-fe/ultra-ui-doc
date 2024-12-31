<template>
  <u-button type="primary" @click="show"> show message </u-button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { message, type MessageType } from 'ultra-ui'

const config = reactive({
  message: 'this is a message',
  type: 'default' as MessageType,
  duration: 3000,
  closable: false,
  html: false,
  onClose: () => {},
  onClosed: () => {}
})

const show = () => message({ ...config })

</script>
