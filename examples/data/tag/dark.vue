<template>
  <div class="flex flex-wrap gap-2">
    <u-tag dark>默认</u-tag>
    <u-tag v-for="item of types" dark :type="item">
      {{ item.toUpperCase() }}
    </u-tag>
  </div>
</template>

<script lang="ts" setup>
import type { ColorType } from 'ultra-ui/types/component-common'

const types: ColorType[] = ['primary', 'info', 'success', 'warning', 'danger']
</script>
