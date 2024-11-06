<template>
  <u-pop-confirm
    title="Are you sure to delete this?"
    @confirm="confirmEvent"
    @cancel="cancelEvent"
    alignment="start"
  >
    <template #reference>
      <u-button>删除</u-button>
    </template>
  </u-pop-confirm>
</template>

<script setup lang="ts">
const confirmEvent = () => {
  console.log("confirm")
}
const cancelEvent = () => {
  console.log("cancel")
}
</script>