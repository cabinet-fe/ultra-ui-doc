<template>
  <u-textarea v-model="textareaValue" :maxlength="maxlength" show-count />
  <u-button @click="maxlength += 10">改变maxlength</u-button>
</template>

<script setup lang="ts">
import { shallowRef } from "vue"

const textareaValue = shallowRef("Textarea")
const maxlength = shallowRef(100)
</script>
