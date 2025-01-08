<template>
  <u-card>
    <u-card-header>
      <u-checkbox v-model="collapsed">折叠</u-checkbox>
    </u-card-header>
    <u-menu
      :menus="menus"
      :current-path="currentPath"
      :collapsed="collapsed"
      @item-click="handleItemClick"
      :style="{
        width: collapsed ? '64px' : '200px',
        borderRight: '1px solid #e0e0e0'
      }"
    />
  </u-card>
</template>

<script lang="ts" setup>
import { message, type MenuItem } from 'ultra-ui'
import { ref } from 'vue'

const menus = [
  { title: '菜单一', path: '/menu1' },
  { title: '菜单二', path: '/menu2' },
  { title: '菜单三', path: '/menu3' },
  {
    title: '菜单四',
    path: '/menu4',
    children: [
      { title: '子菜单一', path: '/menu4/1' },
      { title: '子菜单二', path: '/menu4/2' }
    ]
  }
]

const currentPath = ref('/menu1')

const collapsed = ref(false)

const handleItemClick = (item: MenuItem) => {
  currentPath.value = item.path
  message.success(`点击了${item.title}`)
}
</script>
