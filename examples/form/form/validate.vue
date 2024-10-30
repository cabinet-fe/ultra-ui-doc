<template>
  <u-form :model="model">
    <u-input field="name" label="姓名" />
    <u-input field="email" label="邮箱" />
  </u-form>

  <div class="text-right">
    <u-button @click="model.resetData()" text type="primary"> 重置 </u-button>
    <u-button class="ml-2" @click="model.validate()" type="primary">
      校验
    </u-button>
  </div>
</template>

<script lang="ts" setup>
import { FormModel } from 'ultra-ui'

const model = new FormModel({
  name: { required: true },
  email: {
    required: true,
    match: [
      /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      '邮箱格式不正确'
    ]
  }
})
</script>
