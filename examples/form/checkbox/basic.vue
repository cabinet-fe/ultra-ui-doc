<template>
  <div>
    <u-checkbox v-model="checked">勾选</u-checkbox>

    {{ checked ? '勾上了' : '没勾上' }}
  </div>

  <div>
    <u-checkbox-group v-model="checkedList" :items="items" />
    {{ checkedList }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)
const checkedList = ref([])

const items = ['苹果', '香蕉', '橙子', '葡萄'].map(item => ({
  label: item,
  value: item
}))
</script>
