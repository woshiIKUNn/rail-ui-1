<template>
     <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
        <div class="content">
        <aside v-if="menuVisible">
        <h2 class="gulu-h2">文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
        <h2 class="gulu-h2">组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
        <h2 class="gulu-h2">更多项目</h2>
        <ol>
          <li>
            <router-link to="/doc/rocket">火箭记账vue3</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
        </div>
    </div>
</template>

<script lang="ts">
import { Ref, inject } from 'vue';
import Topnav from '../components/Topnav.vue';

export default {
    components: { Topnav },
    setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
      return {menuVisible}
  }
}
</script>

<style lang="scss" scoped>
.gulu-h2{
    font-size: 24px;
    padding-left: 0px;
  }
  .layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 99;
> .nav {
    flex-shrink: 0;
  
}
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    color: rgb(5, 5, 5);
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
  
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: rgb(179,179,179);
  background: linear-gradient(171deg, rgba(255,252,252,1) 0%, rgba(41,46,68,1) 74%);
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 10;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      >a {
        display: block;
        padding: 16px 4px 20px;
        text-decoration: none;
      }
      .router-link-active {
        background: rgb(183, 182, 187);
      }
    }
  }
}
main {
  overflow: auto;
}
</style>