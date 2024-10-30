<template>
  <div>
    <u-form :disabled="disabled" :readonly="readonly" :model="model">
      <u-input field="name" label="姓名" />

      <u-multi-select field="interest" label="兴趣" :options="interestList" />
      <u-date-picker field="contractDate" label="合同日期" />
    </u-form>

    <div class="text-right pt-4">
      <u-checkbox v-model="disabled"> 禁用 </u-checkbox>
      <u-checkbox v-model="readonly"> 只读 </u-checkbox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FormModel } from 'ultra-ui'
import { shallowRef } from 'vue'

const readonly = shallowRef(false)
const disabled = shallowRef(false)

const interestList = ['电影', '健身', '读书', '游戏', '科技', '音乐'].map(
  item => ({ label: item, value: item })
)

const model = new FormModel({
  name: {},
  interest: {},
  contractDate: {}
})
</script>
