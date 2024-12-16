<template>
  <u-button @click="visible = true">打开</u-button>

  <u-dialog style="width: 500px" title="标题" v-model="visible">
    弹框内容
  </u-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
