<template>
    <doc-title>Radio 单选框示例</doc-title>
    <Demo :component="Radio1Demo" />
    <Demo :component="Radio2Demo" />
    <Attr :columns="columns" :data="data"/>
</template>
<script lang="ts">
  import Demo from '../Demo.vue'
  import Attr from '../Attr.vue'
  import { columns } from "../../lib/data";
  import { ref } from "vue";
  import DocTitle from '../DocTitle.vue';
  import Radio1Demo from '../../components/DocUI/Radio1.Demo.vue';
  import Radio2Demo from '../../components/DocUI/Radio2.Demo.vue';
export default{
    components:{
        Demo,
        DocTitle,
        Attr
    },
    setup() {
        const data = ref([
      {
        params: 'label',
        desc: '相当于原生radio标签的value',
        type: 'string / number / boolean',
        select: '自定义',
        default: '自定义',
      },
      {
        params: 'v-model:value',
        desc: '双向绑定',
        type: '随着label属性类型改变',
        select: '自定义',
        default: 'label属性中的任意一个值',
      },
    ]);
    return{
        Radio1Demo,Radio2Demo, data, columns
    }
    },
}
</script>