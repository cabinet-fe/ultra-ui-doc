<template>
  <u-password-input v-model="value" />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const value = shallowRef()
</script>
