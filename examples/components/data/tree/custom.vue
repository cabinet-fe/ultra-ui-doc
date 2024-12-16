<template>
  <u-tree :data="data" style="height: 300px" v-slot="{ node, data }">
    {{ node.index }} <u-tag type="primary">{{ node.label }}</u-tag>
  </u-tree>
</template>

<script lang="ts" setup>
const data = Array.from({ length: 10 }, (_, index) => ({
  label: `节点${index + 1}`,
  children: Array.from({ length: 3 }, (_, index) => ({
    label: `子节点${index + 1}`
  }))
}))
</script>
