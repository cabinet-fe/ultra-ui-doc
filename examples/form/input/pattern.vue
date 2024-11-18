<template>
  <u-input v-model="value" placeholder="请输入小写字母" :pattern="/^[a-z]*$/" />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const value = shallowRef('')
</script>
