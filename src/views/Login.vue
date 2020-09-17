
<template>
  <div>
    <loginbox v-if="option === '登录'"></loginbox>
    <signupbox v-else></signupbox>
  </div>
</template>

<script>
import loginbox from '../components/loginbox'
import signupbox from '../components/signupbox'

export default {
  data: () => {
    return {
      option: '登录'
    }
  },

  mounted () {
  },

  components: {
    loginbox,
    signupbox
  }
}
</script>

<style lang="less" scoped>

</style>
