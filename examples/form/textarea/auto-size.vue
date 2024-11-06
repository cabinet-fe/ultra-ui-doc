<template>
    <u-textarea v-model="textareaValue" :rows="6" :autosize="true"/>
  </template>
  
  <script setup lang="ts">
  import { shallowRef } from 'vue';
  
  const textareaValue = shallowRef("Textarea")
  </script>
  