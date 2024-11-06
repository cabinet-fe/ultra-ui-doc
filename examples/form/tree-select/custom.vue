<template>
  <u-tree-select
    v-model="treeSelect"
    :data="data"
    label-key="name"
    value-key="id"
    filterable
    v-slot="{ data }"
  >
    {{ data.name }} {{ data.id }}
  </u-tree-select>
</template>

<script setup lang="ts">
import { shallowRef } from "vue"

const treeSelect = shallowRef()
const data = shallowRef<any[]>([
  { name: "前端开发", id: 1 },
  {
    name: "后端开发",
    id: 2,
    children: [
      {
        name: "Node.js",
        id: 3,
        children: [
          {
            name: "Express",
            id: 4,
            children: [
              { name: "中间件", id: 5 },
              { name: "路由", id: 6 },
              { name: "控制器", id: 7 },
            ],
          },
        ],
      },
      {
        name: "Python",
        id: 8,
        children: [
          { name: "Flask", id: 9 },
          { name: "Django", id: 10 },
          { name: "FastAPI", id: 11 },
        ],
      },
    ],
  },
  { name: "数据库", id: 12 },
  { name: "DevOps", id: 13 },
  { name: "云计算", id: 14 },
])
</script>
