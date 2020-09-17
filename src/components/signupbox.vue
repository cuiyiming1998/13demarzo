<template>
  <div class='loginbox'>
    <div class='text-input'>
      <el-form ref='loginForm' :rules='rules' :model='formData'>
        <el-form-item prop='username'>
          <el-input
            prefix-icon='el-icon-user'
            v-model='formData.username'
            placeholder='用户名'
            :minlength=6
            maxlength="16"
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
            minlength="6"
            maxlength="16"
            class='input'
          >
          </el-input>
        </el-form-item>
        <el-form-item prop='repassword'>
          <el-input
            prefix-icon='el-icon-key'
            v-model='formData.repassword'
            placeholder='再次确认密码'
            show-password
            minlength="6"
            maxlength="16"
            class='input'
          >
          </el-input>
        </el-form-item>
      </el-form>
      <el-button class='btn-login' @click="signup('loginForm')">注册</el-button>
      <el-button class='btn-login' @click="goBack">返回登录</el-button>
    </div>
  </div>
</template>

<script>
import { clearParams } from '../utils/utils'

export default {
  data () {
    // 再次输入密码校验
    let repasswordVlidate = (rule, value, callback) => {
      if (this.formData.repassword !== this.formData.password) {
        this.password = ''
        this.repassword = ''
        callback(new Error('*两次密码输入不一致'))
      } else {
        callback()
      }
    }
    return {
      formData: {
        username: '',
        password: '',
        repassword: ''
      },
      rules: {
        username: [
          { required: true, message: '*请输入用户名', trigger: 'blur' },
          { min: 6, max: 16, message: '*长度在6到16个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '*请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '*长度在6到16个字符', trigger: 'blur' },
          { validator: repasswordVlidate, trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '*请再次确认密码', trigger: 'blur' },
          { min: 6, max: 16, message: '*长度在6到16个字符', trigger: 'blur' },
          { validator: repasswordVlidate, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 注册
    signup (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {

        } else if (this.formData.password !== this.formData.repassword) {
          this.formData.password = ''
          this.formData.repassword = ''
        }
      })
    },

    // 返回登录
    goBack () {
      this.formData = clearParams(this.formData)
      this.$parent.option = '登录'
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
