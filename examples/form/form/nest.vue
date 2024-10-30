<template>
  <u-form :model="model">
    <u-input field="name" label="姓名" />
    <u-number-input field="age" label="年龄" />
    <u-input field="mate.name" label="配偶姓名" />
    <u-number-input field="mate.age" label="配偶年龄" />
  </u-form>

  <div class="text-right">
    {{ JSON.stringify(model.data, null, 2) }}
  </div>
</template>

<script lang="ts" setup>
import { FormModel } from 'ultra-ui'

const model = new FormModel({
  name: {},
  age: {},
  'mate.name': {},
  'mate.age': {}
})
</script>
