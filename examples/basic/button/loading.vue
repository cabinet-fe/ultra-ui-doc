<template>
  <div class="flex flex-wrap gap-2">
    <u-button loading :loadingIcon="Refresh">默认</u-button>
    <u-button loading type="primary">主题</u-button>
    <u-button loading type="success" plain>成功</u-button>
    <u-button loading type="warning">警告</u-button>
    <u-button loading type="danger" text>危险</u-button>
    <u-button loading type="info">信息</u-button>
  </div>
</template>

<script setup lang="ts">
import { Refresh } from 'icon-ultra'
</script>
