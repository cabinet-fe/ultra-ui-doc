<template>
  <div>
    <u-radio-group
      :items="items"
      v-model="type"
      @update:modelValue="load"
    ></u-radio-group>
    <u-table :data="data" :columns="columns" v-loading:[type]="loading" />
  </div>
</template>

<script setup lang="ts">
import { defineTableColumns, vLoading } from "ultra-ui"
import { shallowRef } from "vue"

let loading = shallowRef(true)

const type = shallowRef("spinner")

const items = [
  { label: "classic", value: "classic" },
  { label: "dot", value: "dot" },
  { label: "spinner", value: "spinner" },
  { label: "line", value: "line" },
]

const columns = defineTableColumns(
  [
    { name: "姓名", key: "name", align: "center", fixed: "left" },
    { name: "年龄", key: "age", fixed: "left" },
    { name: "性别", key: "sex", fixed: "right" },
  ],
  { minWidth: 180 }
)
const data = shallowRef<any>([])

const load = () => {
  data.value = []
  loading.value = true
  let time = setTimeout(() => {
    clearTimeout(time)
    data.value = Array.from({ length: 4 }).map((_, index) => {
      return {
        sex: index % 2 === 0 ? "男" : "女",
        name: "name1" + index,
        age: Math.random() * 100,
      }
    })
    loading.value = false
  }, 3000)
}

load()
</script>
