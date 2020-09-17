<template>
  <footer class='foot'>
    <div class='links'>
      <router-link to='/' class='link'>主页</router-link>
      <router-link to='/' class='link'>产品</router-link>
      <router-link to='/' class='link'>关于我们</router-link>
    </div>
    <div></div>
    <div class='copyright'>
      @2020 13demarzo 版权所有 <br/>
      浙ICP备20017728号
    </div>
    <div class='name'>
      13DE MARZO
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.foot {
  box-sizing: border-box;
  width: 100%;
  height: 30%;
  min-height: 180px;
  min-width: 980px;
  padding: 0px 10%;
  background: #222222;
  color: #dedede;
  display: grid;
  grid-template-columns: 1fr 3fr;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  .links {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .link {
      margin-top: 20px;
    }
  }
  .copyright {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    color: #8b919d;
  }
  .name {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 6em;
    color: gray;
  }
}
</style>
