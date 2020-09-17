<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components: {
    'navbar': navbar
  }
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
#app {
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
