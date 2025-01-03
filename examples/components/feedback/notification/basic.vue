<template>
  <u-button type="primary" @click="show">show notification</u-button>
</template>

<script setup lang="ts">
import { Notification } from 'ultra-ui'

const show = () =>
  Notification({
    title: `this is a title`,
    message: 'this is a notification,this is a notificationthis is a notification,this is a notification,this is a notification,this is a notification,this is a notification',
    type: '',
    duration: 0,
    closable: false,
    onClose: () => {},
    buttonText: '确认',
    onClick: () => {}
  })
</script>
