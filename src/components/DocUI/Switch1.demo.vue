<demo>常规用法</demo>
<template>
  <!-- v-model自动监听外面的update:value事件 -->
    <Switch v-model:value="bool" />
    </template>
    
    <script lang="ts">
    import Switch from '../../lib/Switch.vue'
    import {
      ref
    } from 'vue'
    export default {
      components: {
        Switch,
      },
      setup() {
        const bool = ref(false)
        return {
          bool
        }
      }
    }
    </script>