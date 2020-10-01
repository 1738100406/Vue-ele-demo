<template>
  <div class="login">
    <img class="logo" src="../assets/logo.png" />
    <inputGroup
      type="number"
      placeholder="账号"
      v-model="phone"
      :disabled="disabled"
      :btnTitle="btnTitle"
      :error="error.phone"
      @Btnclick="getVerifyCode"
    ></inputGroup>
    <!-- 验证码 -->
    <inputGroup
      type="number"
      placeholder="验证码"
      v-model="verifyCode"
      :disabled="disabled"
    ></inputGroup>
    <!-- 用户协议 -->
    <div class="login_des">
      <p>
        新用户登录即自动注册,表示同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import inputGroup from "@/components/inputGroup.vue";
export default {
  data() {
    return {
      phone: "",
      verifyCode: "",
      error: {},
      disabled: false,
      btnTitle: "获取验证码",
    };
  },
  methods: {
    getVerifyCode() {
      if (this.VerifyPhone()) {
        //发起网络请求
        this.Veridate();
      }
    },
    // 倒计时
    Veridate() {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.btnTitle = "获取验证码";
          this.disabled = false;
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    //验证手机号码
    VerifyPhone() {
      if (!this.phone) {
        this.error = {
          phone: "手机号码不能为空",
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
        this.error = {
          phone: "请填写正确的手机号",
        };
        return false;
      } else {
        this.error = {};
        return true;
      }
    },
  },
  components: {
    inputGroup,
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
  text-align: center;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des {
  color: #aaa;
  line-height: 22px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login_btn button[disabled] {
  background-color: #8bda81;
}
</style>
