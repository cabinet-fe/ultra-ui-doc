<template>
  <u-scroll style="height: 300px" ref="scrollRef">
    <p v-for="i in 1000">
      {{ i }}
    </p>
  </u-scroll>

  <u-button
    @click="
      scrollRef?.scrollTo({
        y: scrollRef?.contentRef?.scrollHeight
      })
    "
  >
    滚动到最底部
  </u-button>
</template>

<script lang="ts" setup>
import type { ScrollExposed } from 'ultra-ui'
import { shallowRef } from 'vue'

const scrollRef = shallowRef<ScrollExposed>()
</script>
