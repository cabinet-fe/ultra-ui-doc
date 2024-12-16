<template>
  <u-textarea v-model="textareaValue" />
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

const textareaValue = shallowRef("Textarea")
</script>
