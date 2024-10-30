<template>
  <u-form :model="model">
    <u-input field="name" label="姓名" />
    <u-number-input field="age" label="年龄" />
  </u-form>
</template>

<script lang="ts" setup>
import { FormModel } from 'ultra-ui'

const model = new FormModel({
  name: {},
  age: {}
})
</script>
