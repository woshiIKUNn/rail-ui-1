<template>
    <div class="topnav">
      <div class="logo" >LOGO</div>
      <ul class="menu">
        <li><router-link to="/">菜单1</router-link></li>
        <li><router-link to="/Doc">菜单2</router-link></li>
      </ul>
      <img src="../assets/menu.svg" class="toggleAside" @click="toggleMenu">
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = () =>{
      menuVisible!.value = !menuVisible?.value
    }
    return {toggleMenu}
  }
}
</script>
<style lang="scss" scoped>
  .topnav {
    background: rgb(48, 48, 49);
    display: flex;
    padding: 16px;
    color:white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    justify-content: center;
    align-items: center;
> .logo {
    max-width: 6em;
    margin-right: auto;
}
> .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap; 
  > li {
    margin: 0 1em;
  }
 }
 > .toggleAside{
  display: none;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
 }
 @media (max-width: 500px) {
  > .menu { display: none; }
  > .logo { margin: 0 auto; }
  > .toggleAside{ display: inline-block;  }
 }
}
</style>