<template>
  <div>
    <div class="mb-2">
      <u-action-group :max="max">
        <u-action
          v-for="button of buttons"
          @run="message.success(`点击了${button}按钮`)"
        >
          {{ button }}
        </u-action>
        <u-action need-confirm type="danger" @run="message.success('已删除')">
          删除
        </u-action>
      </u-action-group>
    </div>

    <div>
      <span class="pl-3">最大显示按钮数: </span>
      <u-number-input
        style="width: 100px"
        :step="1"
        :min="1"
        v-model="max"
        :clearable="false"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { message } from 'ultra-ui'
import { ref } from 'vue'

const buttons = ['查看', '编辑', '审批']

const max = ref(2)
</script>
