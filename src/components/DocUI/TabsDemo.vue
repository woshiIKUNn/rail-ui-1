<template>
  <doc-title>Tabs 标签栏示例</doc-title>
  <Demo :component="Tabs1Demo" />
  <Attr :columns="columns" :data="data"/>
  </template>
  
  <script lang="ts">
  import Demo from '../Demo.vue'
  import Tabs1Demo from './Tabs1.demo.vue'
  import Attr from '../Attr.vue'
  import { columns } from "../../lib/data";
  import { ref } from "vue";
  import DocTitle from '../DocTitle.vue';
  export default {
    components: {
     Demo,
     Attr,
     DocTitle
    },
    setup() {
      const data = ref([
      {
        params: 'Tab',
        desc: 'tab页签',
        type: 'component',
        select: 'selected',
        default: '--',
      },
    ]);
      return {
        Tabs1Demo,
        data, 
        columns
      }
    }
  }
  </script>