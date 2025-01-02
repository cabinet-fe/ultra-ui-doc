<template>
  <u-slider v-model="sliderValue" :step="10" show-stops></u-slider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const sliderValue = ref()
</script>
