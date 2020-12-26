<template>
  <div class="login">
    <div class="loginDiv">
      <div class="imgDiv">
        <img :src="logo" width="125px" height="125px" />
      </div>
      <div class="titleDiv">
        <span>乐店客好望</span>
      </div>
      <div class="form">
        <div class="user">
          <i class="iconfont iconzu675"></i>
          <input
            v-model="username"
            type="text"
            class="Inp"
            placeholder="请输入账号"
          />
        </div>
        <div class="password">
          <i class="iconfont iconzu519"></i>
          <input
            v-model="password"
            type="password"
            class="Inp"
            placeholder="请输入密码"
          />
        </div>
        <div class="code">
          <div class="codeL">
            <i class="iconfont iconzu676"></i>
            <input type="code" class="Inp" placeholder="请输入验证码" />
          </div>
          <img
            :src="code"
            width="135px"
            height="44px"
            style="margin-left:16px"
          />
          <div class="reCode">
            <span>看不清</span>
            <span>换一张</span>
          </div>
        </div>
        <div class="submit">
          <span class="subBtn" @click="login">登录</span>
        </div>
      </div>
      <div class="footer">
        <div class="remPassword">
          <input type="checkbox" class="check" />
          <span class="remPasswordSpan">记住登录密码</span>
        </div>
        <div class="forgetPassword">
          <span class="forgetPasswordSpan">忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('@/assets/img/login/logo.png'),
      code: require('@/assets/img/login/code.png'),
      username: '',
      password: ''
    }
  },
  methods: {
    // 点击登录按钮触发事件
    login() {
      // 登录成功
      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push({ path: '/' })
        this.$message({
          message: '登录成功',
          type: 'success'
        })
      } else {
        // 登录失败
        this.$message.error('账号或者密码错误')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background: black url('../../assets/img/login/background.png');
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
//登录框
.loginDiv {
  width: 678px;
  height: 678px;
  background: #ffffff;
  box-shadow: 0px 0px 27px rgba(0, 0, 0, 0.37);
  opacity: 1;
  border-radius: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//logo->div
.imgDiv {
  text-align: center;
  margin-top: 42px;
}
//标题div
.titleDiv {
  width: 301px;
  height: 47px;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  letter-spacing: 4px;
  span {
    font-size: 32px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #141414;
    opacity: 1;
  }
}

//form表单div
.form {
  .user,
  .password,
  .codeL {
    width: 411px;
    height: 53px;
    border-bottom: 1px solid #707070;
    opacity: 0.5;
    margin: auto;
  }
  .user,
  .password,
  .codeL {
    margin-top: 64px;
    display: flex;
    align-items: center;
    padding-top: 22px;
    box-sizing: border-box;
    .Inp {
      width: 100%;
      border: 0;
      outline: none;
      padding-left: 12px;
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: #b9b9b9;
      }
      &::before {
        content: '';
      }
    }
  }
  .user {
    margin-top: 36px;
  }
  .password,
  .codeL {
    margin-top: 32px;
  }
  .codeL {
    width: 197px;
    margin: 0;
  }
  .code {
    width: 411px;
    margin: auto;
    margin-top: 32px;
    display: flex;
    .reCode {
      width: 50px;
      height: 41px;
      font-size: 16px;
      color: #4a92ff;
      margin-left: 6px;
      cursor: pointer;
    }
  }
  //提交按钮div
  .submit {
    margin-top: 54px;
    text-align: center;
    .subBtn {
      display: inline-block;
      width: 410px;
      height: 58px;
      line-height: 58px;
      background: #38414a;
      opacity: 1;
      border-radius: 36px;
      font-size: 20px;
      font-weight: 300;
      color: #ffffff;
      opacity: 1;
      text-align: center;
    }
  }
}
//所有阿里图标
.iconfont {
  font-size: 21px;
}

//底部footer
.footer {
  width: 411px;
  margin: auto;
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  .remPassword {
    .check {
      width: 15px;
      height: 15px;
      border: 1px solid #141414;
      border-radius: 4px;
      margin: 0;
      vertical-align: middle;
    }
    .remPasswordSpan {
      font-size: 16px;
      font-weight: 300;
      color: #141414;
      margin-left: 4px;
      vertical-align: middle;
    }
  }
  .forgetPassword {
    .forgetPasswordSpan {
      width: 66px;
      height: 20px;
      font-size: 16px;
      font-weight: 300;
      color: #4a92ff;
      cursor: pointer;
    }
  }
}
</style>
