<template>
  <div class="order-main">
    <Header title="订单" />
    <div class="order" v-if="orderList.orderInfo">
      <div class="order-card-body">
        <div class="order-card-wrap">
          <img :src="orderList.orderInfo.shopInfo.image_path" />
          <div class="order-card-content">
            <div class="order-card-head">
              <div class="title">
                <a>
                  <span>{{ orderList.orderInfo.shopInfo.name }}</span>
                  <i class="fa fa-angle-right"></i
                ></a>
                <p>订单已经完成</p>
              </div>
              <p class="date-time"></p>
            </div>
            <div class="order-card-detail">
              <p class="detail">
                {{ orderList.orderInfo.selectFoods[0].name }}
              </p>
              <p v-if="orderList.totalPrice" class="price">
                ￥{{ orderList.totalPrice }}
              </p>
            </div>
          </div>
        </div>
        <div class="order-card-bottom">
          <button class="cardbutton">再来一单</button>
        </div>
      </div>
    </div>
    <div v-else class="noorder">
      <div v-if="isLogin" class="noorder-warp">
        <img
          src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"
          alt=""
        />
        <span>暂无订单</span>
      </div>
      <div v-else class="noorder-warp">
        <img
          src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"
          alt=""
        />
        <span>登录后查看外卖订单</span>
        <button @click="$router.push('/login')" class="btn">立即登录</button>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TabBar from "@/components/TabBar.vue";
export default {
  data() {
    return {
      orderList: {
        orderInfo: this.$store.getters.orderInfo,
        totalPrice: this.$store.getters.totalcount,
        remarkInfo: this.$store.getters.remarkInfo,
        userInfo: this.$store.getters.userInfo,
      },
      isLogin: localStorage.getItem("ele_login"),
    };
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  methods: {
    // getData() {
    //   let orderList = {
    //     orderInfo: this.$store.getters.orderInfo,
    //     totalPrice: this.$store.getters.totalcount,
    //     remarkInfo: this.$store.getters.remarkInfo,
    //     userInfo: this.$store.getters.userInfo,
    //   };
    //   this.orderList = orderList;
    //   console.log(this.orderList);
    // },
  },

  components: {
    TabBar,
    Header,
  },
};
</script>

<style scoped>
.order-main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.noorder {
  width: 100%;
  margin-top: 80px;
  box-sizing: border-box;
  margin-bottom: 2.666667vw;
  background-color: #eee;
  overflow-y: hidden;
}
.noorder-warp {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.noorder-warp img {
  width: 240px;
  height: 210px;
}
.noorder-warp span {
  color: #999;
}
.noorder-warp .btn {
  width: 120px;
  height: 40px;
  margin: 10px auto;
  border: none;
  color: #fff;
  border-radius: 5px;
  background-color: #56d176;
}
.order {
  width: 100%;
  height: 100%;
  margin-top: 40px;
  overflow: auto;
  box-sizing: border-box;
  margin-bottom: 2.666667vw;
}
.order-card-body {
  margin-top: 2.666667vw;
  background-color: #fff;
  padding: 3.733333vw 0 0 4vw;
}
.order-card-wrap {
  display: flex;
}
.order-card-wrap > img {
  height: 8.533333vw;
  border-radius: 0.533333vw;
  border: 1px solid #eee;
  width: 8.533333vw;
  margin-right: 2.666667vw;
}
.order-card-content {
  flex: 1;
}
.order-card-head {
  border-bottom: 1px solid #eee;
  padding-right: 3.466667vw;
  padding-bottom: 2.666667vw;
}
.order-card-head .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order-card-head .title > a {
  font-size: 1rem;
  line-height: 1.5em;
  color: #333;
  text-decoration: none;
}
.order-card-head .title > a > span {
  display: inline-block;
  max-width: 10em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order-card-head .title > a > i {
  margin-left: 1.333333vw;
  color: #ccc;
  vertical-align: super;
}
.order-card-head .title > p {
  font-size: 0.8rem;
  text-align: right;
  color: #333;
  max-width: 14em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.date-time {
  font-size: 0.6rem;
  color: #999;
}
.order-card-detail {
  display: flex;
  justify-content: space-between;
  padding: 4vw 3.466667vw 4vw 0;
  font-size: 0.8rem;
}
.order-card-detail .detail {
  color: #666;
  display: flex;
  align-items: center;
}
.order-card-detail .price {
  flex-basis: 16vw;
  text-align: right;
  color: #333;
  font-weight: 700;
}
.order-card-bottom {
  display: flex;
  border-top: 1px solid #eee;
  padding: 2.666667vw 4.266667vw;
  justify-content: flex-end;
}
.cardbutton {
  padding: 1.333333vw 2.666667vw;
  border: 1px solid #2395ff;
  border-radius: 0.533333vw;
  background-color: transparent;
  outline: none;
  font-size: 0.8rem;
  color: #2395ff;
  margin-left: 2vw;
}
</style>
