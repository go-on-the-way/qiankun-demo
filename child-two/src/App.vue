<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <p v-if="isQiankun">
      主项目把router传给子项目，子项目用这个router来跳转
      <br>
      <span @click="goToPage('/about')">parent About</span> |
      <span @click="goToPage('/child-one/about')">child-one About</span>
    </p>
    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  methods: {
    goToPage(path){
      this.$root.parentRouter.push(path);
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
