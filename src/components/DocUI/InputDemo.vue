<template>
    <doc-title>Input 输入框示例</doc-title>
    <Demo :component="Input1Demo" />
    <Demo :component="Input2Demo" />
    <Demo :component="Input3Demo" />
    <Attr :columns="columns" :data="data"></Attr>
</template>
<script lang="ts">
import Input1Demo from '../../components/DocUI/Input1.demo.vue';
import Input2Demo from '../../components/DocUI/Input2.demo.vue';
import Input3Demo from '../../components/DocUI/Input3.demo.vue';
import Demo from '../Demo.vue'
import Attr from '../Attr.vue'
import { columns } from "../../lib/data";
import { ref } from "vue";
import DocTitle from '../DocTitle.vue';

export default {
  name: 'InputDoc',
  components: {
    Demo,
    DocTitle, 
    Attr
   },
  setup() {
    const data = ref([
      {
        params: 'placeholder',
        desc: '占位符',
        type: 'string',
        select: '任意字符串',
        default: '空',
      },
      {
        params: 'name',
        desc: 'name属性',
        type: 'string',
        select: '任意字符串',
        default: '空',
      },
      {
        params: 'type',
        desc: '文本框类型',
        type: 'string',
        select: '支持所有原生input的类型',
        default: 'text',
      },
      {
        params: 'disabled',
        desc: '禁用',
        type: 'boolean',
        select: 'false/true',
        default: 'false',
      },
    ]);
    return {Input1Demo,Input2Demo,Input3Demo, data, columns};
  }
};

</script>