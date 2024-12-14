<template>
  <u-paginator :total="1000" simple v-model:page-number="pageNumber" />
  <div>当前页: {{ pageNumber }}</div>
</template>

<script setup>
import { ref } from 'vue'

const pageNumber = ref(1)
</script>
