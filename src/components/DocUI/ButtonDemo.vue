<template >
  <div>
  <doc-title>Button 按钮示例</doc-title>
  <Demo :component="Button1Demo" />
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
  <Attr :columns="columns" :data="data"/>
</div>
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
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
        params: 'theme',
        desc: '按钮颜色',
        type: 'string',
        select: 'primary / warning / success / danger / info / link',
        default: 'default',
      },
      {
        params: 'size',
        desc: '尺寸大小',
        type: 'string',
        select: 'small / normal / large',
        default: 'normal',
      },
      {
        params: 'loading',
        desc: '是否加载',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]);
    return { 
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      columns, 
      data
     };
  },
};
</script>