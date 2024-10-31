<template>
  <div>
    <div class="mb-4">
      渲染数量：
      <u-number-input v-model="count" :min="0" class="w-[100px]" :step="100" />
    </div>

    <div class="h-[200px] overflow-hidden">
      <div v-for="i in count">
        {{ Math.random() * i }}
      </div>
    </div>

    <u-form :model="model" class="mt-4">
      <u-input
        field="name"
        span="full"
        placeholder="表单内输入"
        @update:model-value="handleMeasureStart('表单内输入')"
      />
    </u-form>

    <div>
      <u-input
        v-model="name"
        @update:model-value="handleMeasureStart('数据绑定输入')"
        placeholder="数据绑定输入"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FormModel } from 'ultra-ui'
import { nextTick, ref } from 'vue'

const model = new FormModel({
  name: {}
})

const name = ref('')

const count = ref(100)

function handleMeasureStart(name: string) {
  const label = `${name}重渲染`

  console.time(label)

  nextTick(() => {
    console.timeEnd(label)
  })
}
</script>
