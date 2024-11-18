<template>
  <div>设置对象断点</div>
  <u-grid :gap="8" :cols="cols" class="gap-2">
    <u-grid-item
      :span="1"
      class="h-20 bg-blue-200 flex items-center justify-center"
      v-for="i of 6"
      :key="i"
    >
      {{ i }}
    </u-grid-item>
  </u-grid>

  <div>设置函数断点</div>
  <u-grid :gap="8" :cols="colsFn" class="gap-2">
    <u-grid-item
      :span="1"
      class="h-20 bg-blue-200 flex items-center justify-center"
      v-for="i of 6"
      :key="i"
    >
      {{ i }}
    </u-grid-item>
  </u-grid>
</template>

<script lang="ts" setup>
import { message, type BreakCols, type Breakpoint } from 'ultra-ui'

const cols: BreakCols = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 6
}

const colsFn = (point?: Breakpoint) => {
  if (!point) return 0
  if (point.name === 'xs' || point.name === 'sm') return 1
  return 2
}
</script>
