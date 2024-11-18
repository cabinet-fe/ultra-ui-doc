<template>
  <u-number-input v-model="value" :step="10" />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const value = shallowRef()
</script>
