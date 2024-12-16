<template>
  <u-tree :data="data" style="height: 300px" />
</template>

<script lang="ts" setup>
const data = Array.from({ length: 10 }, (_, index) => ({
  label: `节点${index + 1}`,
  children: Array.from({ length: 3 }, (_, index) => ({
    label: `子节点${index + 1}`
  }))
}))
</script>
