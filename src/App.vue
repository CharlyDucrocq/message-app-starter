<template>
  <div class="app">
    <Messages v-on:unreadcount="updateUnread($event)"/>
    <Menu :unreadMessages="this.unread"/>
  </div>
</template>

<script>
  import Menu from "./components/Menu.vue";
  import Messages from "./components/Messages.vue";

export default {
  name: "App",
  data(){
    return {
      unread: Number
    };
  },
  components: {
    Menu,
    Messages,
  },
  methods:{
    updateUnread(val){
      if(val === 0) val = null;
      this.unread = val;
    }
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
</style>
