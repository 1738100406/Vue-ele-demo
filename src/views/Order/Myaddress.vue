<template>
  <div class="myAddress">
    <div class="address-view" v-if="allAddress">
      <div class="address-card" v-for="(item, i) in allAddress" :key="i">
        <div class="address-card-select">
          <i v-if="selectIndex === i" class="fa fa-check-circle"></i>
        </div>
        <div class="address-card-body" @click="setAddressInfo(item, i)">
          <div class="address-card-title">
            <div class="username">{{ item.name }}</div>
            <div class="gender">{{ item.sex }}</div>
            <span class="phone">{{ item.phone }}</span>
          </div>
          <p class="address-card-address">
            <span class="tag">{{ item.tag }}</span>
            <span class="address-text">{{ item.address }}</span>
          </p>
        </div>
        <div class="address-card-edit">
          <i @click="handEdit(item)" class="fa fa-edit"> </i>
          <i class="fa fa-close"> </i>
        </div>
      </div>
    </div>
    <div class="address-view-bottom" @click="goaddress">
      <i class="fa fa-plus"></i>
      <span>添加地址</span>
    </div>
    <Header :isLeft="true" title="我的地址" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      allAddress: JSON.parse(localStorage.getItem("userinfo")).myAddress,
      selectIndex: 0,
    };
  },
  methods: {
    handEdit(item) {
      this.$router.push({
        name: "addaddress",
        params: item,
      });
    },
    goaddress() {
      this.$router.push({
        name: "addaddress",
        params: {
          name: "",
          phone: "",
          sexs: "",
          tags: "",
          address: "",
          bottom: "",
        },
      });
    },
    setAddressInfo(item, i) {
      this.selectIndex = i;
      this.$store.dispatch("setUserInfo", item);
      if (!this.$store.getters.orderInfo) {
        this.$router.push("/me");
      } else {
        this.$router.push("/settlement");
      }
    },
  },
  created() {},
  components: {
    Header,
  },
};
</script>

<style scoped>
.myAddress {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
}

.address-view-bottom {
  position: fixed;
  height: 13.866667vw;
  bottom: 0;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.266667vw solid #ddd;
  color: #3190e8;
  font-size: 1rem;
}
.address-view-bottom > i {
  font-size: 1.3rem;
  margin-right: 8px;
}

.address-view {
  height: 100%;
  overflow-y: auto;
  padding-bottom: 13.866667vw;
}
.address-card {
  background-color: #fff;
  padding: 4vw;
  border-bottom: 1px solid #ddd;
  display: flex;
  min-height: 18.133333vw;
}
.address-card-body {
  flex: 1;
  overflow: hidden;
}
.address-card-title {
  display: flex;
  font-size: 1rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 1.066667vw;
}
.address-card-title .username {
  color: #333;
  font-weight: 700;
}
.address-card-title .gender {
  padding: 0 1.6vw 0 0.8vw;
}
.address-card-address {
  color: #666;
  font-size: 0.84rem;
  display: flex;
  align-items: center;
}
.address-card-address .tag {
  display: inline-block;
  position: relative;
  margin-right: 0.8vw;
  padding: 0.533333vw;
  color: #ff5722;
  white-space: nowrap;
  border: 1px solid #ff5722;
  border-radius: 0.133333vw;
  font-size: 0.6rem !important;
  line-height: 2.666667vw;
}
.address-text {
  line-height: 4.533333vw;
}

/* 编辑和删除 */
.address-card-edit {
  flex-basis: 13.066667vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.address-card-edit > i {
  color: #aaa;
  font-size: 1.2rem;
}

/*  选中图标 */
.address-card-select {
  flex-basis: 7.333333vw;
  min-width: 7.333333vw;
  display: flex;
  align-items: center;
}
.address-card-select > i {
  font-size: 1.5rem;
  color: #4cd964;
}
</style>