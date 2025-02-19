<template>
  <div>
    <u-form :model="model" show-initial-data>
      <u-input label="姓名" field="name" />
      <u-number-input label="年龄" field="age" />
    </u-form>

    <u-button type="primary" @click="model.setInitialData(initialData)">
      覆盖初始数据
    </u-button>
  </div>
</template>

<script lang="ts" setup>
import { FormModel } from 'ultra-ui'

const model = new FormModel({
  name: { value: '张三' },
  age: { value: 18 }
})

const initialData = {
  name: '李四',
  age: 20
}
</script>
