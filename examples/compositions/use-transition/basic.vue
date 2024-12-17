<template>
  <div class="box" ref="boxRef" @click="handleClick">点击</div>
</template>

<script lang="ts" setup>
import { useTransition } from 'ultra-ui'
import { shallowRef } from 'vue'

const boxRef = shallowRef<HTMLElement>()

const t = useTransition('css', {
  name: 'transform',
  target: boxRef,
  // 可以保留过渡后的状态，这样你就不需要指定一个初始状态以免出现闪烁
  keepEnterTo: true
})

const handleClick = () => {
  // 也可以使用 t.enter() 和 t.leave() 方法来触发过渡，
  // 他们分别是 t.toggle(true) 和 t.toggle(false) 的简写
  t.toggle(active => !active)
}
</script>

<style scoped>
.box {
  height: 100px;
  width: 100px;
  background-color: #ccc;
  will-change: transform;
}

.transform-enter-active,
.transform-leave-active {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.transform-enter-to,
.transform-leave-from {
  transform: translate(100px, 0) scale(1.5) rotate(180deg);
}
</style>
