<template>
  <div class="app">
    <Errors id="errors-list"/>
    <router-view/>
    <Menu/>
  </div>
</template>

<script>
  import Menu from "./components/Menu.vue";
  import Errors from "./components/Errors";

export default {
  name: "App",
  data(){
    return {

    };
  },
  components: {
    Errors,
    Menu,
  },
  methods:{

  }
};
</script>

<style>
html, body {
  height: 100%;
}
#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #errors-list {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top : 0;
  }
</style>
