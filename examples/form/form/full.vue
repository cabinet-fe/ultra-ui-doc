<template>
  <div>
    <div class="text-center mb-4 font-size-xl">
      试着将浏览器宽度缩小，看看效果
    </div>

    <u-form
      :disabled="disabled"
      :readonly="readonly"
      :model="model"
      label-width="80px"
      ref="formRef"
      v-slot="{ data }"
    >
      <u-input field="name" label="姓名" />
      <u-number-input field="age" label="年龄" />
      <u-radio-group :items="genderList" label="性别" field="sex" />

      <u-checkbox
        label="是否已婚"
        field="married"
        tips="当已婚时，填写配偶数据"
      />

      <template v-if="data.married">
        <u-input label="配偶名称" field="mate.name" tips="这是嵌套数据" />
        <u-number-input label="配偶年龄" field="mate.age" tips="这是嵌套数据" />
      </template>
      <u-password-input field="id" label="身份证" />
      <u-input prefix="+86-" field="phone" label="手机" />
      <u-input field="email" label="邮箱" />
      <u-select field="bank" label="银行" :options="bankList" />
      <u-multi-select
        field="interest"
        span="full"
        label="兴趣"
        :options="interestList"
      />
      <u-date-picker field="contractDate" label="合同日期" />
    </u-form>
    <div>操作记录：</div>
    <u-scroll class="max-h-[200px]">
      <div v-for="item in changedList" :key="item.field">
        在 {{ item.time }} 将 {{ item.field }}值改为{{ item.val }}
      </div>
    </u-scroll>

    <div class="flex justify-end gap-2 mt-4">
      <u-checkbox v-model="disabled"> 禁用 </u-checkbox>
      <u-checkbox v-model="readonly"> 只读 </u-checkbox>

      <u-button @click="model.resetData()" text type="primary">
        重置数据
      </u-button>
      <u-button @click="handleMockData" type="primary"> 模拟回显 </u-button>
      <u-button @click="model.validate()" type="success">校验</u-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { date } from 'cat-kit/fe'
import { formField, FormModel } from 'ultra-ui'
import { shallowReactive, shallowRef } from 'vue'

const readonly = shallowRef(false)
const disabled = shallowRef(false)

const ageRules = shallowReactive(formField<number>({ required: true }))

const genderList = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' }
]

const interestList = ['电影', '健身', '读书', '游戏', '科技', '音乐'].map(
  item => ({ label: item, value: item })
)

const bankList = [
  '工商银行',
  '农业银行',
  '建设银行',
  '中国银行',
  '交通银行'
].map(item => ({ label: item, value: item }))

const model = new FormModel({
  name: { required: true },
  age: ageRules,
  sex: { value: 'male' },
  married: { value: false },
  'mate.name': { required: true },
  'mate.age': { required: true },
  phone: {
    required: true,
    validator(value) {
      if (!value) return ''
      if (/^1[0-9]{10}$/.test(value)) return ''
      return '你得输入一个手机号'
    }
  },
  id: { required: true },
  email: {
    match: [
      /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
      '这个时候你得输入一个邮箱'
    ]
  },
  bank: { required: true },
  interest: { required: true },
  contractDate: { required: true, value: date().format() }
})

const changedList = shallowRef<
  Array<{ field: string; val: any; time: string }>
>([])

model.onChange((field, value) => {
  changedList.value = [
    { field, val: value, time: date().format('HH:mm:ss') },
    ...changedList.value
  ]
})

function handleMockData() {
  model.setData({
    name: '张三',
    age: 24,
    married: true,
    mate: {
      name: '李四',
      age: 23
    },
    sex: 'male',
    phone: '13800138000',
    email: 'zhangsan@example.com',
    bank: '工商银行',
    interest: ['电影', '健身'],
    id: '123456789012345678',
    contractDate: date().format()
  })
}
</script>
