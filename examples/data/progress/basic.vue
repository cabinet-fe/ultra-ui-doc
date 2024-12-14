<template>
  <div>
    <span>进度： </span>
    <u-number-input
      v-model="config.percentage"
      :max="100"
      style="width: 100px"
      :min="0"
      :step="8"
    />
  </div>
  <div>
    <span>样式： </span>

    <u-radio-group :items="types" v-model="config.type"></u-radio-group>
  </div>

  <div class="mb-4">
    <span>环形进度条尺寸 </span>

    <u-number-input
      v-model="config.size"
      style="width: 100px"
      :min="0"
      :step="10"
    />
  </div>

  <u-card class="mb-4">
    <u-card-header> 条形进度条 </u-card-header>
    <u-card-content>
      <u-progress v-bind="config" />
    </u-card-content>
  </u-card>

  <u-card class="mb-4">
    <u-card-header> 圆形进度条 </u-card-header>
    <u-card-content>
      <u-progress v-bind="config" circle />
    </u-card-content>
  </u-card>

  <u-card>
    <u-card-header> 动态状态 </u-card-header>
    <u-card-content>
      <u-progress :percentage="config.percentage" :type="getType">
        <template #default="{ percentage }">
          {{ percentage }}% &nbsp;
          <span v-if="percentage < 70"></span>
          <span v-else-if="percentage <= 90">内存所剩不多 </span>
          <span v-else-if="percentage < 100">
            内存严重不足 <u-icon><WarnTriangleFilled /></u-icon>
          </span>
          <span v-else
            >该换电脑了 <u-icon><WarnTriangleFilled /></u-icon
          ></span>
        </template>
      </u-progress>
      <u-progress
        :percentage="config.percentage"
        :size="config.size"
        circle
        :type="getType"
        v-slot="{ percentage, type }"
      >
        <div :style="`color: var(--color-${type})`">{{ percentage }}%</div>
      </u-progress>
    </u-card-content>
  </u-card>
</template>

<script lang="ts" setup>
import type { ColorType } from 'ultra-ui/types/component-common'
import { shallowReactive } from 'vue'
import { WarnTriangleFilled } from 'icon-ultra'

const types = ['primary', 'info', 'success', 'warning', 'danger'].map(t => {
  return {
    label: t,
    value: t
  }
})

const config = shallowReactive({
  percentage: 0,
  type: 'primary' as ColorType,
  size: 100
})

const getType = (percentage: number) => {
  if (percentage < 70) {
    return 'success'
  }
  if (percentage <= 90) {
    return 'warning'
  }
  return 'danger'
}
</script>
