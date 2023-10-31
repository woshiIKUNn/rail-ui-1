<template>
  <nav class="topNav" >
    <div class="logo">
      LOGO
      <!-- <img src="../assets/menu.svg" class="toggleAside" > -->
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </nav>
  
</template>


<style lang="scss" scoped>
nav.topNav {
  display: flex;
  padding: 16px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 11;
  justify-content: center;
  align-content: center;
  transition: all 0.25s;


  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .toggleAside{
    width: 50px;
    height: 50px;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }



  @media (max-width: 500px) {
    > .toggleAside {
      display: inline-block;
    }
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
