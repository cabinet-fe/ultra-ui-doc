<template>
  <div>
    <u-input v-model="color" />
    <u-button @click="setPrimaryColor" type="primary">更改主题色</u-button>
    <u-button @click="resetTheme">重置主题</u-button>
  </div>
</template>

<script lang="ts" setup>
import { currentTheme } from 'ultra-ui/styles/theme'
import { shallowRef } from 'vue'
import { WebCache } from 'cat-kit/fe'
import { message } from 'ultra-ui'

const color = shallowRef(currentTheme.value!.theme.color.primary)

function isValidColorString(value: string) {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
}
function setPrimaryColor() {
  if (!isValidColorString(color.value)) {
    return message.error('请输入正确的颜色值')
  }

  currentTheme.value!.theme.color.primary = color.value

  // 持久化保存
  WebCache.local.set('theme', currentTheme.value!.theme)
}

function resetTheme() {
  WebCache.local.remove('theme')
  message.success('重置成功，即将刷新页面', {
    onClose: () => {
      location.reload()
    }
  })
}
</script>
