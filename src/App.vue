<template>
  <div id="app">
    <navbar class="navbar"/>
    <router-view class="main"/>
    <foot-bottom class="footer"/>
  </div>
</template>

<script>
import navbar from './components/navbar'
import footBottom from './components/foot-bottom'
export default {
  name: 'App',
  components: {
    'navbar': navbar,
    'foot-bottom': footBottom
  }
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
#app {
  padding: 0;
  margin: 0;
  display: flex!important;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  min-width: 780px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  color: #666666;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
input.el-input__inner {
  border-radius: 0;
  width: 250px;
  height: 35px;
}

input.el-input__inner:focus {
  border-color: #333;
}
.el-button {
  border-radius: 0;
  color: white;
  background-color: #8e8e8e;
  border-color: #8e8e8e;
}
.el-button:hover {
  background-color: #8e8e8e;
  color: white;
  border-color: #8e8e8e;
}
.el-button:focus {
  background-color: #8e8e8e;
  color: white;
  border-color: #8e8e8e;
}
</style>
