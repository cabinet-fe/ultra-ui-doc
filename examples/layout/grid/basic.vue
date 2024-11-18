<template>
  <div>24格</div>
  <u-grid :gap="6" class="mb-6">
    <u-grid-item
      v-for="(item, index) of items"
      :key="index"
      :span="item.span"
      class="h-20 bg-blue-200 flex items-center justify-center"
    >
      占{{ item.span }}格
    </u-grid-item>
  </u-grid>

  <div>12格</div>
  <u-grid :cols="12" :gap="6">
    <u-grid-item
      class="h-20 bg-blue-200 flex items-center justify-center"
      v-for="i of 12"
    >
      {{ i }}
    </u-grid-item>

    <u-grid-item
      :span="item.span"
      class="h-20 bg-blue-200 flex items-center justify-center"
      v-for="(item, index) of items"
      :key="index"
    >
      占{{ item.span }}格
    </u-grid-item>
  </u-grid>
</template>

<script lang="ts" setup>
const items = [{ span: 2 }, { span: 4 }, { span: 6 }]
</script>
