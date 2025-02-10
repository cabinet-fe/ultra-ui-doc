<template>
  <u-dialog v-model="visible" style="width: 500px" title="尝试切换最大化状态">
    <template #trigger>
      <u-button>打开</u-button>
    </template>

    <template #default="{ maximized }">
      <div
        :style="{
          background: '#ccc',
          height: maximized ? '100%' : '300px'
        }"
      ></div>
    </template>
  </u-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
