<template>
  <u-number-input v-model="value" currency />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const value = shallowRef()
</script>
