<template>
  <div>
    <u-button
      @mouseenter="dropdownRef?.open({ virtual: spanRef, real: $event.target })"
      @mouseleave="dropdownRef?.close()"
    >
      浮动触发离开关闭
    </u-button>
  </div>

  <div style="display: flex; justify-content: flex-end">
    <span ref="spanRef">触发位置</span>
  </div>
  <u-dropdown class="bb" width="200px" ref="dropdownRef" trigger="click">
    <template #content>
      <ul>
        <li>第一层hover第一层hover第一层hover第一层hover第一层hover</li>
        <li>第二层hover</li>
        <li>第三层hover</li>
        <li>第四层hover</li>
        <li>第五层hover</li>
        <li>第六层hover</li>
      </ul>
    </template>
  </u-dropdown>
</template>

<script setup lang="ts">
import type { DropdownExposed } from "ultra-ui"
import { shallowRef } from "vue"

const spanRef = shallowRef<HTMLSpanElement>()

const dropdownRef = shallowRef<DropdownExposed>()
</script>
