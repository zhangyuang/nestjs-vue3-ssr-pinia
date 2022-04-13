<template>
  <router-view :reactiveFetchData="props.reactiveFetchData" />
</template>

<script lang="ts" setup>
// 在这里可以进行一些全局组件的注册逻辑
import { defineProps } from 'vue'
const props = defineProps<{
  reactiveFetchData: any
}>()
</script>

<style lang="less">
@import '@/common.less';
</style>
