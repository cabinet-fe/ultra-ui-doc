<template>
  <div
    @contextmenu.prevent="
      contextmenu.pop({
        menus: [{ label: '可以点但是没什么用' }],
        mousePosition: $event
      })
    "
  >
    右键这个地方
  </div>
</template>

<script lang="ts" setup>
import { contextmenu } from 'ultra-ui'
</script>
