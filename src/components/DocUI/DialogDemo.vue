<template>
<doc-title>Dialog 对话框示例</doc-title>
<Demo :component="Dialog1Demo" />
<Demo :component="Dialog2Demo" />
<Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Attr from '../Attr.vue'
import { columns } from "../../lib/data";
import { ref } from "vue";
import DocTitle from '../DocTitle.vue';
export default{
  components: {
    Demo,
    Attr,
    DocTitle
  },
  setup() {
    const data = ref([
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        select: 'true / false',
        default: 'normal',
      },
      {
        params: 'width',
        desc: '宽度',
        type: 'string',
        select: '0%~100%',
        default: '60%',
      },
      {
        params: 'top',
        desc: '顶部距离',
        type: 'string',
        select: '数字+px',
        default: '130px',
      },
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        select: 'true / false',
        default: 'normal',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭弹出框',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
      {
        params: 'cancel',
        desc: '取消触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
    ]);
    return {
      Dialog1Demo,
      Dialog2Demo,
      columns, 
      data
    }
  }
}
</script>