<template>
  {{ sliderValue }}
  <u-slider
    v-model="sliderValue"
    :step="10"
    show-stops
    range
    vertical
  ></u-slider>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const sliderValue = ref([0, 60])
</script>
