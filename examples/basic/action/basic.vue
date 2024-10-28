<template>
  <div>
    <div>
      <span>最大显示按钮数: </span>
      <u-number-input
        style="width: 100px"
        :step="1"
        :min="1"
        v-model="max"
        :clearable="false"
      />
    </div>

    <u-action-group :max="max">
      <u-action v-for="button of buttons">{{ button }}</u-action>
      <u-action need-confirm type="danger">删除</u-action>
    </u-action-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const buttons = ['查看', '编辑', '审批']

const max = ref(2)
</script>
