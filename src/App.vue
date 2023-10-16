<template>
  <div>导航 |
    <router-link to="/">lunzi</router-link>|
    <router-link to="/xxx">lunzi2</router-link>
  </div>
  <hr>
  <router-view />
</template>

<script>


export default{
  name: 'App',
  }


</script>
