<template>
  <u-card width="400">
    <u-card-cover
      src="http://5b0988e595225.cdn.sohucs.com/images/20190625/2a57bb7082f84e33b53dd79b30b949df.jpeg"
    />

    <u-card-action
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <u-text :max-rows="1" as="title"> 卡片描述 </u-text>
      <button-common-props tag="span" size="small">
        <u-button :icon="Star" type="primary" />
        <u-button :icon="Lock" type="warning" />
        <u-button :icon="MoreFilled" />
      </button-common-props>
    </u-card-action>
  </u-card>
</template>

<script setup lang="ts">
import { MoreFilled, Star, Lock } from 'icon-ultra'
import { type ButtonProps, useComponentProps } from 'ultra-ui'

const ButtonCommonProps = useComponentProps<ButtonProps>({
  circle: true,
  // type: 'primary',
  // text: true,
  iconSize: 18,
  loading: false
})
</script>
