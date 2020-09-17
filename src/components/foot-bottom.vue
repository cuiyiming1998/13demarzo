<template>
  <div class='foot'>
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
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.foot {
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  padding: 0px 200px;
  background: #222222;
  color: #dedede;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  .links {
    display: flex;
    flex-direction: column;
    .link {
      margin: 5px 0;
    }
  }
  .copyright {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding-bottom: 30px;
    color: #8b919d;
  }
  .name {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 6rem;
    color: gray;
  }
}
</style>
