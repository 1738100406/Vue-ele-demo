<template>
  <div class="settlement">
    <Header isLeft title="结算" />
    <div class="view-body">
      <!-- 收货地址 -->
      <div class="cart-address">
        <div class="title">订单配送至</div>
        <div class="address-detail">
          <span v-if="userInfo">
            <span @click="$router.push('/myaddress')">{{
              userInfo.address
            }}</span>
          </span>
          <span v-else>
            <span v-if="haveAddress" @click="selectAddress">选择地址</span>
            <span @click="addaddress" v-else>新增收货地址</span>
            <i class="fa fa-angle-right"></i
          ></span>
        </div>

        <h2 v-if="userInfo" class="address-name">
          <span>{{ userInfo.name }}</span>
          <span class="">{{ userInfo.sex }}</span>
          <span class="phone">{{ userInfo.phone }}</span>
        </h2>
      </div>
      <Delivery :orderInfo="orderInfo.shopInfo" />
      <CartGroup :orderInfo="orderInfo" :totalPrice="totalPrice" />
      <!-- 备注信息 -->
      <div class="checkout-section">
        <CartItem
          @click="showTabware = true"
          title="餐具分数"
          :subHead="remarkInfo.tableware || '未选择'"
        />
        <CartItem
          @click="$router.push('/remark')"
          title="订单备注"
          :subHead="remarkInfo.remark || '口味 偏好'"
        />
        <CartItem title="发票信息" subHead="不需要开发票" />
      </div>

      <!-- 显示tabware -->
      <Tableware :showTabware="showTabware" @close="showTabware = false" />
    </div>
    <div class="action-bar">
      <span>￥{{ totalPrice }}</span>
      <button @click="handpay">去支付</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Delivery from "@/components/Order/Delivery.vue";
import CartGroup from "@/components/Order/CartGroup.vue";
import CartItem from "@/components/Order/CartItem.vue";
import Tableware from "@/components/Order/Tableware.vue";
export default {
  data() {
    return {
      haveAddress: true,
      showTabware: false,
    };
  },

  components: {
    Header,
    Delivery,
    CartGroup,
    CartItem,
    Tableware,
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    },
    orderInfo() {
      return this.$store.getters.orderInfo;
    },
    totalPrice() {
      return this.$store.getters.totalcount;
    },
    remarkInfo() {
      return this.$store.getters.remarkInfo;
    },
  },
  methods: {
    selectAddress() {
      if (localStorage.getItem("ele_login")) {
        this.$router.push("/myaddress");
      } else {
        this.$router.push("/login");
      }
    },
    addaddress() {
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
    getData() {
      this.$axios
        .post("/api/posts/sms_back", {
          phone: 17610351502,
          code: 552367,
        })
        .then((res) => {
          if (!this.$store.getters.userInfo) {
            // this.$store.dispatch('')
            return;
          }
          // console.log(res.data.user);
          if (res.data.user.myAddress.length > 0) {
            this.haveAddress = true;
          } else {
            this.haveAddress = false;
          }
        });
    },
    handpay() {
      if (localStorage.getItem("ele_login")) {
        this.$router.push("/pay");
      } else {
        this.$router.push("/login");
      }
    },
  },

  created() {
    if (!this.userInfo) {
      this.getData();
    }
    // console.log(this.$store);
  },
};
</script>

<style scoped>
.settlement {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 44px;
}

.view-body {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  font-size: 0.9rem;
  color: #333;
  padding-bottom: 14.133333vw;
  padding-left: 1.6vw;
  padding-right: 1.6vw;
  background-image: linear-gradient(
      0deg,
      #f5f5f5,
      #f5f5f5 65%,
      hsla(0, 0%, 96%, 0.3) 75%,
      hsla(0, 0%, 96%, 0)
    ),
    linear-gradient(270deg, #009eef, #009eef);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.cart-address {
  background-color: transparent;
  padding: 4.266667vw 2.133333vw 2.933333vw 2.133333vw;
  min-height: 25.133333vw;
  color: #fff;
  overflow: hidden;
}
.cart-address .title {
  font-size: 0.9rem;
  line-height: 1.21;
  color: hsla(0, 0%, 100%, 0.8);
}
.cart-address .address-detail {
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.88;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.address-detail > span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: calc(100% - 4vw);
}
.address-detail > i {
  margin-left: 2.133333vw;
}

/* 显示送货地址 */
.address-name {
  font-size: 0.86rem;
  line-height: 1.21;
  margin-bottom: 1.333333vw;
}
.address-name .phone {
  margin-left: 2.133333vw;
}
.address-tag {
  border: 0.133334vw solid hsla(0, 0%, 100%, 0.8);
  margin-left: 1.6vw;
  display: inline-block;
  padding: 0.533333vw;
  white-space: nowrap;
  border-radius: 0.133333vw;
  font-size: 0.6rem !important;
  line-height: 2.666667vw;
}

.checkout-section {
  margin-bottom: 2.133333vw;
  padding: 0 5.333333vw;
  background: #fff;
  box-shadow: 0 0.133333vw 0.266667vw 0 rgba(0, 0, 0, 0.05);
}

/* 底部支付样式 */
.action-bar {
  height: 11.733333vw;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #3c3c3c;
  z-index: 2;
}
.action-bar > span {
  color: #fff;
  font-size: 1.2rem;
  line-height: 11.733333vw;
  padding-left: 2.666667vw;
  vertical-align: middle;
}
.action-bar > button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: #00e067;
  min-width: 28vw;
  padding: 0 1.333333vw;
  border: none;
  color: #fff;
  font-size: 1.2rem;
}
</style>