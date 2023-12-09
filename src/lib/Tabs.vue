<template>
    <div class="gulu-tabs">
      <div class="gulu-tabs-nav" ref="container">
        <div class="gulu-tabs-nav-item" 
        v-for="(title) in titles" 
        @click="select(title)" 
        :class="{selected: title=== selected}" 
       >{{title}}</div>
      </div>
      <div class="gulu-tabs-content">
        <component :is="current" :key="current.props!.title"/>
</div>
</div>
</template>
    <script lang="ts">
    import Tab from './Tab.vue'
    import {
      computed
    } from 'vue'

    export default {
      props: {
        selected: {
          type: String
        }
      },
      setup(props, context) { 
        // 如何在运行时确认子组件类型 检查 context.slots.default()数组

        const defaults = context.slots.default!()
        defaults.forEach((tag) => {
          if (tag.type !== Tab) {
            throw new Error('Tabs 子标签必须是 Tab')// 防御性编程 避免用户传错
          }
        })
        
        const titles = defaults.map((tag) => {
          return tag.props!.title
        })

        const current = computed(() => {
        return defaults.filter((tag) => {
        return tag.props!.title === props.selected;
      })[0];
    });
        const select = (title: string) => {
          context.emit('update:selected', title)
        }
        return {
          defaults,
          titles,
          select,
          current
        }
      }
    }
    </script>
    <style lang="scss" scoped>
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
      &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
          cursor: pointer;
          padding: 8px 16px;
      
          &.selected {
            color: $blue;
            border-bottom:1px solid ;
          }
    }
        &-indicator {
          position: absolute;
          height: 3px;
          background: $blue;
          left: 0;
          bottom: -1px;
          width: 100px;
          transition: all 250ms;
        }
      }
      &-content {
        padding: 8px 0;
      }
    }
    </style>