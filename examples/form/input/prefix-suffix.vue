<template>
  <div>
    <div class="mb-4">
      <span>前缀字符串</span>
      <u-input v-model="value" prefix="+86" />
    </div>
    <div class="mb-4">
      <span>后缀字符串</span>
      <u-input
        v-model="value"
        placeholder="填写上一句"
        suffix=", 映日荷花别样红"
      />
    </div>
    <div>
      <span>后缀插槽</span>
      <u-input v-model="value">
        <template #suffix>
          <u-icon><Search /></u-icon>
        </template>
      </u-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import { Search } from 'icon-ultra'

const value = shallowRef('')
</script>
