<template>
  <u-multi-tree-select v-model="treeSelect" :data="data" filterable>
  </u-multi-tree-select>
</template>

<script setup lang="ts">
import { shallowRef } from "vue"

const treeSelect = shallowRef()
const data = shallowRef<any[]>([
  { label: "前端开发", value: 1 },
  {
    label: "后端开发",
    value: 2,
    children: [
      {
        label: "Node.js",
        value: 3,
        children: [
          {
            label: "Express",
            value: 4,
            children: [
              { label: "中间件", value: 5 },
              { label: "路由", value: 6 },
              { label: "控制器", value: 7 },
            ],
          },
        ],
      },
      {
        label: "Python",
        value: 8,
        children: [
          { label: "Flask", value: 9 },
          { label: "Django", value: 10 },
          { label: "FastAPI", value: 11 },
        ],
      },
    ],
  },
  { label: "数据库", value: 12 },
  { label: "DevOps", value: 13 },
  { label: "云计算", value: 14 },
])
</script>
