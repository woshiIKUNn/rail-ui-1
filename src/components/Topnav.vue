<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg>
          <use xlink:href="#icon-m019"></use>
        </svg>
      </router-link>
    <ul class="menu">
      <li class="toptext">
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
    <use xlink:href="#icon-Menu"></use>
    </svg>
  </div>
  
</template>
<script lang="ts">
import {
  inject,
  Ref
} from "vue";
export default {
  props:{
    toggleMenuButtonVisible:{
      type: Boolean,
      default: false
    }
  },
  // 用 provide 和 inject 实现切换功能
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible!.value = !menuVisible!.value;
    };
    return {
      toggleMenu
    };
  }, 
};
</script>
<style lang="scss" scoped>
$color: #fdfdfd;
.topnav {
  background: radial-gradient(circle, rgba(135,139,159,1) 9%, rgba(255,252,252,1) 100%);
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgba(51,51,51,.1);
  z-index: 20;
  >.logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
      color: rgb(12, 12, 12);
    }
  }
  .toptext{
    font-weight:bold;
    color: black;
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
  }
  >.toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    >.menu {
      display: none;
    }
    >.logo {
      margin: 0 auto;
    }
    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>