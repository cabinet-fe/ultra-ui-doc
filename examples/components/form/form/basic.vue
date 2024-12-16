<template>
  <u-form :model="model">
    <u-input field="name" label="姓名" />
    <u-number-input field="age" label="年龄" />

    <CustomInput field="name" label="自定义输入姓名" />
  </u-form>
</template>

<script lang="ts" setup>
import { FormModel } from 'ultra-ui'
import { defineComponent, h } from 'vue'

const CustomInput = defineComponent({
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () =>
      h('input', {
        value: props.modelValue,
        onInput: (e: Event) =>
          emit('update:modelValue', (e.target as HTMLInputElement).value)
      })
  }
})

const model = new FormModel({
  name: {},
  age: {}
})
</script>
