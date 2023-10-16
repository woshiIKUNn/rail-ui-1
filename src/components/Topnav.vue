<template>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li><router-link to="/">菜单1</router-link></li>
        <li><router-link to="/xxx">菜单2</router-link></li>
      </ul>
    </div>
</template>

<style lang="scss" scoped>
  .topnav {
    background: rgb(48, 48, 49);
    display: flex;
    padding: 16px;
    color:white;
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
}
</style>