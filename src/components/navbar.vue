<template>
  <el-menu mode="horizontal" class='navbar' text-color="black">
      <el-menu-item class='item'>
        <router-link to='/'>主页</router-link>
      </el-menu-item>
      <el-menu-item class='item'>
        <router-link to='/'>产品</router-link>
      </el-menu-item>
      <el-menu-item>
        <router-link to='/'>
        <p style='font-size: 40px'>
          13DE MARZO
        </p>
        <p style='font-size: 20px'>
          PARIS
        </p>
        </router-link>
      </el-menu-item>
      <el-menu-item class='item'>
        <router-link to='/'>购物车</router-link>
      </el-menu-item>
      <el-menu-item class='item'>
        <router-link to='/login'>登录</router-link>
      </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data: () => {
    return {
    }
  },

  mounted () {
  }
}
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 120px;
  font-weight: bold;
  text-align: center;
  margin: 0 40px;
  padding: 30px 0;
  .item {
    width: 100px;
  }
  a {
    text-decoration: none;
    font-size: 16px;
  }
  p {
    height: 50px;
    line-height: 50px;
  }
}
</style>
