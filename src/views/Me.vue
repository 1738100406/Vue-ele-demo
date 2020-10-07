<template>
  <div>
    <div class="me">
      <div @click="me" class="headInfo">
        <div class="head-img"></div>
        <div class="head-profile">
          <div v-if="userinfo" class="user-id">{{ userinfo._id }}</div>
          <div v-else class="user-id">登录/注册</div>
          <div class="user-phone">
            <span v-if="userinfo"
              ><i class="fa fa-mobile"></i> {{ phone }}</span
            >
            <span v-else><i class="fa fa-mobile"></i> 登录后享受更多折扣</span>
          </div>
        </div>
        <i class="fa fa-chevron-right"></i>
      </div>
      <div class="address-cell" @click="Myaddress">
        <i class="fa fa-location-arrow"></i>
        <div class="address-index">
          我的地址 <i class="fa fa-chevron-right"></i>
        </div>
      </div>
      <button v-if="userinfo" @click="loginOut" class="loginOut-btn">
        退出登录
      </button>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
export default {
  data() {
    return {
      userinfo: JSON.parse(localStorage.getItem("userinfo")),
      phone: JSON.parse(localStorage.getItem("ele_login")),
    };
  },
  methods: {
    me() {
      if (!localStorage.getItem("userinfo")) {
        this.$router.push("/login");
      }
    },
    Myaddress() {
      if (this.phone) {
        if (this.userinfo) {
          this.$router.push("/myaddress");
        } else {
          this.$router.push("/addaddress");
        }
      } else {
        this.$router.push("/login");
      }
    },
    loginOut() {
      window.localStorage.clear();
      window.location.reload();
      this.$router.push("/login");
    },
  },
  created() {},
  components: {
    TabBar,
  },
};
</script>

<style scoped>
.me {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.headInfo {
  display: flex;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 6.666667vw 4vw;
  color: #fff;
  align-items: center;
}
.head-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-position: 0px 0px;
  background-size: 60px;
  background-image: url(https://shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png);
}
.head-profile {
  overflow: hidden;
  margin-left: 4.8vw;
  flex-grow: 1;
}
.head-profile .user-id {
  max-width: 40vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.3rem;
  margin-bottom: 2.133333vw;
  font-weight: 700;
  display: flex;
  align-items: center;
}
.head-profile .user-phone {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}
.user-phone > i {
  margin-right: 0.666667vw;
  font-size: 1rem;
}
.headInfo > i {
  font-size: 1.2rem;
}

.address-cell {
  margin-top: 2.666667vw;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  line-height: 4.533333vw;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding-left: 6.666667vw;
  color: #333;
}
.address-cell > i {
  font-size: 1.3rem;
  color: rgb(74, 165, 240);
  margin-right: 2.666667vw;
}
.address-index {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3.733333vw 2.666667vw 3.733333vw 0;
  align-content: center;
}
.address-index > i {
  font-size: 1.3rem;
  color: #ccc;
}
.loginOut-btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 3.733333vw 0;
  margin: 5.333333vw 0;
  color: #ff5339;
  border-radius: 0.8vw;
  font-size: 1rem;
  font-weight: 700;
  background-color: #fff;
  border: 0;
}
</style>