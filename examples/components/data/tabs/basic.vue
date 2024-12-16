<template>
  <div><u-checkbox v-model="config.editable">可编辑</u-checkbox></div>
  <div><u-checkbox v-model="config.keepAlive">保活</u-checkbox></div>
  <div><u-checkbox v-model="config.fixedHeight">固定高度</u-checkbox></div>
  <div>
    <span>方位： </span>
    <u-radio-group
      radioType="btn"
      :items="[
        { label: '上', value: 'top' },
        { label: '下', value: 'bottom' },
        { label: '左', value: 'left' },
        { label: '右', value: 'right' }
      ]"
      v-model="config.position"
    />
  </div>

  <u-tabs
    :items="items"
    v-model="active"
    :position="config.position"
    :editable="config.editable"
    :keep-alive="config.keepAlive"
    @create="message.success('点击了新增按钮')"
    :style="{
      height: config.fixedHeight ? '300px' : ''
    }"
  >
    <template #a>
      <div>设置了保活，点击次数就不会丢失</div>
      <CountComponent />
    </template>

    <template #c>
      <p v-for="i of 30">{{ i }}</p>
    </template>
  </u-tabs>
</template>

<script lang="ts" setup>
import { message, UButton } from 'ultra-ui'
import { defineComponent, h, reactive, ref } from 'vue'

const CountComponent = defineComponent({
  setup() {
    const count = ref(0)
    return () =>
      h(UButton, { onClick: () => count.value++ }, () => `点了${count.value}次`)
  }
})

const config = reactive({
  editable: false,
  sortable: false,
  keepAlive: false,
  position: 'top' as any,
  fixedHeight: false
})

const active = ref('a')

const items = [
  { key: 'a', name: '标签页1' },
  { key: 'b', name: '标签页2', disabled: true },
  { key: 'c', name: '标签页3' }
]
</script>

<style lang="scss" scoped></style>
