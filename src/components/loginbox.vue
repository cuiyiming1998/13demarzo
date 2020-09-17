<template>
  <div class='loginbox'>
    <div class='text-input'>
      <el-form ref='loginForm' :rules='rules' :model='formData'>
        <el-form-item prop='username'>
          <el-input
            prefix-icon='el-icon-user'
            v-model='formData.username'
            placeholder='用户名'
            class='input'
          >
          </el-input>
        </el-form-item>
        <el-form-item prop='password'>
          <el-input
            prefix-icon='el-icon-key'
            v-model='formData.password'
            placeholder='密码'
            show-password
            class='input'
          >
          </el-input>
        </el-form-item>
      </el-form>
      <el-button class='btn-login' @click="login('loginForm')">登录</el-button>
      <div class='options'>
        <span>忘记密码？</span>
        <span @click='toSignup'>免费注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '*请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '*请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    login (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log('success')
        }
      })
    },

    // 去注册页面
    toSignup () {
      this.$parent.option = '注册'
    }
  }
}
</script>

<style lang="less" scoped>
.loginbox {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 30px 0;
  .text-input {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .input {
      margin: 10px 0;
    }
    .btn-login {
      margin: 10px 0;
      width: 100%;
    }
    .options {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>
