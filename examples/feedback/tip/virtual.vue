<template>
  <div>
    <u-button
      @click="tipRef.trigger({ triggerDom: $refs.triggerDom, content: '7777' })"
      >触发按钮</u-button
    >

    <span ref="triggerDom">实际触发位置</span>

    <u-tip ref="tipRef" trigger="click"> </u-tip>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue"

const tipRef = shallowRef()
</script>
