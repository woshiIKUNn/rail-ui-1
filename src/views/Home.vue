<template>
  <div>
  <div class="topNav-wrapper">
    <Topnav />
    <div class="banner">
      <h1>hole UI for Vue3</h1>
      <h2>一款面向未来的 UI 框架</h2>
      <p class="actions">
        <a href="#">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</div>
<div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-TS"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" >
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
},
};
</script>
<style lang="scss" scoped>

.topNav-wrapper {
  background: linear-gradient(171deg, rgba(255,252,252,1) 0%, rgba(41,46,68,1) 74%);
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
    padding: 8px 10px;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(30px);
    border-radius: 18px;
    a {
      
      margin:0 8px;
      padding: 8px 24px;
      display: inline-block;
      height: 38px;
      line-height: 28px;
      
      border:none;
      
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
</style>
