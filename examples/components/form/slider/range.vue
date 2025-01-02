<template>
  <u-slider v-model="rangeValue" :step="10" show-stops range> </u-slider>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const rangeValue = ref([40, 60])
</script>
