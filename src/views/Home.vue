<template>
  <div class="topNav-wrapper">
    <TopNav isHome />
    <div class="banner">
      <h1>black hole UI for Vue3</h1>
      <h2>一款面向未来的 UI 框架</h2>
      <p class="actions">
        <router-link to="/doc">
            开始 
        </router-link>
        <a href="#">
            Github
        </a>
      </p>
    </div>
  </div>
  <div class="content">
    <ul>
      <li v-for="item in contentList" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import TopNav from '../components/Topnav.vue';

const contentList = [
  {
    title: 'Vue 3',
    description: '使用了最新的 Vue3 Composition API',
  },
  {
    title: 'TypeScript',
    description: '源代码采用了 TypeScript 编写',
  },
  {
    title: 'Vite',
    description: '官网基于 Vite2.x 构建',
  },
  {
    title: '文档完整',
    description: '所有组件拥有完整的使用文档及示例',
  },
];
</script>
<style lang="scss" scoped>

.topNav-wrapper {
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgb(15, 9, 5) 40%,
    rgb(107, 57, 10) 60%,
    rgb(8, 8, 8) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  color: #fff;

  .topNav {
    background: transparent;
    border-bottom: none;
    box-shadow: none;
  }
}

.banner {
  top: 286px;
  padding: 100px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  > .actions {
    margin-top: 40px;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    a {
      margin:0 8px;
      padding: 0 8px;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
    }
  }
}

.content {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 500px) {
    width: 500px;
    > ul {
      > li {
        width: 100%;
      }
    }
  }
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 25%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
</style>
