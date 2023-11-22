<demo>
    常规使用
    </demo>
    <template>
    <Tabs v-model:selected="selected">
      <Tab title="学习">学习</Tab>
      <Tab title="吃饭">吃饭</Tab>
      <Tab title="睡觉">睡觉</Tab>
    </Tabs>
    </template>
    
    <script lang="ts">
    import Tabs from '../../lib/Tabs.vue'
    import Tab from '../../lib/Tab.vue'
    import {
      ref
    } from 'vue'
    export default {
      components: {
        Tabs,
        Tab
      },
      setup() {
        const selected = ref('学习')
        return {
          selected
        }
      }
    }
    </script>