<template>
  <u-dialog title="将弹框最大化测试">
    <template #trigger> <u-button>打开</u-button> </template>

    <div>
      <span>grid宽度: </span>
      <u-number-input
        v-model="width"
        :step="10"
        :min="30"
        :max="100"
        style="width: 100px"
        :clearable="false"
        suffix="vw"
      />
      <span>当前断点: {{ point }}</span>
    </div>

    <div>对象断点</div>
    <u-grid
      :gap="8"
      :cols="cols"
      class="gap-2 mb-4"
      :style="{ width: `${width}vw` }"
      @breakpoint-change="point = $event.name"
    >
      <u-grid-item
        :span="1"
        class="h-20 bg-blue-200 flex items-center justify-center"
        v-for="i of 6"
        :key="i"
      >
        {{ i }}
      </u-grid-item>
    </u-grid>

    <div>函数断点</div>
    <u-grid
      :gap="8"
      :cols="colsFn"
      class="gap-2"
      :style="{ width: `${width}vw` }"
    >
      <u-grid-item
        :span="1"
        class="h-20 bg-blue-200 flex items-center justify-center"
        v-for="i of 6"
        :key="i"
      >
        {{ i }}
      </u-grid-item>
    </u-grid>
  </u-dialog>
</template>

<script lang="ts" setup>
import { type BreakCols, type Breakpoint } from 'ultra-ui'
import { ref } from 'vue'

const cols: BreakCols = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 6
}

const width = ref(50)
const point = ref<Breakpoint>()

const colsFn = (point?: Breakpoint) => {
  if (!point) return 0
  if (point.name === 'xs' || point.name === 'sm') return 1
  return 2
}
</script>
