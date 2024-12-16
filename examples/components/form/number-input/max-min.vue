<template>
  <u-number-input
    v-model="value"
    :max="100"
    :min="0"
    placeholder="请输入0-100之间的数字"
  />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const value = shallowRef()
</script>
