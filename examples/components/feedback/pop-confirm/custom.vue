<template>
  <u-pop-confirm
    title="自定义文字、图标"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
    confirm-text="继续"
    cancel-text="结束"
    :icon="Wps"
  >
    <template #reference>
      <u-button>自定义</u-button>
    </template>
  </u-pop-confirm>
</template>

<script setup lang="ts">
import { Wps } from "icon-ultra"
const confirmEvent = () => {
  console.log("confirm")
}
const cancelEvent = () => {
  console.log("cancel")
}
</script>
