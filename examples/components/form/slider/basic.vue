<template>
  <u-slider v-model="sliderValue"></u-slider>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const sliderValue = ref(10)
</script>
