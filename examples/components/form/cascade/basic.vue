<template>
  <div>
    <ul class="flex flex-wrap gap-4 config">
      <li>
        <label>多选</label>
        <u-checkbox v-model="config.multiple"></u-checkbox>
      </li>
      <li>
        <label>分隔符</label>
        <u-input
          v-model="config.separator"
          style="width: 60px"
          :clearable="false"
        ></u-input>
      </li>
      <li>
        <label>禁用</label>
        <u-checkbox v-model="config.disabled"></u-checkbox>
      </li>
      <li>
        <label>只读</label>
        <u-checkbox v-model="config.readonly"></u-checkbox>
      </li>
      <li>
        <label>筛选</label>
        <u-checkbox v-model="config.filterable"></u-checkbox>
      </li>
      <li>
        <label>严格模式</label>
        <u-checkbox v-model="config.strict"></u-checkbox>
      </li>
    </ul>

    <u-cascade :data="data" v-model="value" v-bind="config"></u-cascade>

    <div>
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, shallowRef, watch } from 'vue'

const value = shallowRef<string | undefined | string[]>('1/15/151')

const config = reactive({
  multiple: false,
  separator: '/',
  disabled: false,
  readonly: false,
  filterable: false,
  strict: false
})

watch([() => config.multiple, () => config.separator], () => {
  value.value = undefined
})

const data = [
  {
    label: '江苏省',
    value: '1',

    children: [
      { label: '南京市', value: '11' },
      { label: '无锡市', value: '12' },
      { label: '徐州市', value: '13' },
      { label: '常州市', value: '14' },
      {
        label: '苏州市',
        value: '15',
        children: [
          { label: '姑苏区', value: '151' },
          { label: '吴中区', value: '152' },
          { label: '相城区', value: '153' },
          { label: '虎丘区', value: '154' },
          { label: '吴江区', value: '155' },
          { label: '常熟市', value: '156' },
          { label: '张家港市', value: '157' },
          { label: '昆山市', value: '158' }
        ]
      },
      { label: '南通市', value: '16' },
      { label: '连云港市', value: '17' },
      { label: '淮安市', value: '18' },
      { label: '盐城市', value: '19' },
      { label: '扬州市', value: '110' }
    ]
  }
]
</script>

<style scoped>
.config {
  margin-bottom: 12px !important;
  li {
    display: flex;
    align-items: center;
  }

  label {
    flex-shrink: 0;
    margin-right: 8px;
  }
}
</style>
