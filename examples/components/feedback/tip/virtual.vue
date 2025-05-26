<template>
  <div>
    <u-button @click="pop(dom1!.el!)" ref="virtualTriggerDom2">
      触发按钮1
    </u-button>

    <span class="mx-4"> </span>

    <u-button @click="pop(dom2!.el!)" ref="virtualTriggerDom1">
      触发按钮2
    </u-button>

    <u-tip v-model:visible="visible" trigger="click" :trigger-dom="triggerDom">
      <template #content> 两级反转 </template>
    </u-tip>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, useTemplateRef } from 'vue'

const visible = shallowRef(false)

const dom1 = useTemplateRef('virtualTriggerDom1')
const dom2 = useTemplateRef('virtualTriggerDom2')

const triggerDom = shallowRef<HTMLElement>()

function pop(dom: HTMLElement) {
  visible.value = true
  triggerDom.value = dom
}
</script>
