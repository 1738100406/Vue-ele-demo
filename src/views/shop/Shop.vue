<template>
  <div class="shop" v-if="shopInfo">
    <!-- 头部 -->
    <nav class="header-nav">
      <div class="nav_bg">
        <img :src="shopInfo.rst.scheme" alt="" />
      </div>
      <div class="nav_back" @click="$router.push('/')">
        <i class="fa fa-chevron-left"></i>
      </div>
      <div class="shop_image">
        <img :src="shopInfo.rst.image_path" alt="" />
      </div>
    </nav>
    <!-- 商家信息 -->
    <div class="index-rst">
      <div class="rst-name" @click="showModel = true">
        <span>{{ shopInfo.rst.name }}</span>
        <i class="fa fa-caret-right"></i>
      </div>
      <!-- 弹窗 -->
      <InfoModel
        @close="showModel = false"
        :showModel="showModel"
        :rst="shopInfo.rst"
      />
      <!-- 优惠信息 -->
      <div class="rst-order">
        <span> 评分4.8 </span>
        <span> 月售2220单 </span>
        <span> 蜂鸟专送约41分钟</span>
      </div>
      <Activate :activities="shopInfo.rst.activities" />
      <!-- 公告 -->
      <div class="rst-promotion">
        <p>公告:{{ shopInfo.rst.promotion_info }}</p>
      </div>
      <!-- 导航栏 -->
      <NavBar />
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import InfoModel from "@/components/InfoModel.vue";
import Activate from "@/components/Shop/Activate.vue";
import NavBar from "@/components/Shop/NavBar.vue";
export default {
  data() {
    return {
      shopInfo: null,
      showModel: false,
    };
  },
  methods: {
    getDate() {
      this.$axios.get("/api/profile/batch_shop").then((res) => {
        this.shopInfo = res.data;
        // console.log(this.shopInfo);
      });
    },
  },
  components: {
    InfoModel,
    Activate,
    NavBar,
  },
  created() {
    this.getDate();
  },
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header-nav {
  position: relative;
}
.nav_bg img {
  width: 100%;
  height: 26.666667vw;
}
.nav_back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 26.666667vw;
  background: rgba(0, 0, 0, 0.5);
}
.nav_back i {
  color: #fff;
  font-size: 1.3rem;
  margin-left: 1.333333vw;
  margin-top: 1.333333vw;
}
.shop_image {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -10vw;
  margin-top: 11vw;
}
.shop_image img {
  width: 20vw;
  height: 20vw;
  border-radius: 0.8vw;
}

.index-rst {
  padding: 8vw 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: inset 0 -0.666667vw 0.666667vw hsla;
}
.index-rst .rst-name {
  flex: 1;
  width: 72vw;
  font-size: 1.3rem;
  font-weight: 700;
  white-space: nowrap;
  padding-right: 2.666667vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.6vw 0;
}
.rst-name span {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}

.index-rst .rst-order {
  white-space: nowrap;
  height: 3.2vw;
  margin-top: 1.733333vw;
  color: #666;
  text-align: center;
  font-size: 0.6rem;
}
.rst-order span {
  margin: 0 3px;
}
.index-rst .rst-promotion {
  width: 80vw;
  font-size: 0.6rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2.266667vw auto 2.666667vw;
  padding: 0;
  white-space: nowrap;
}
</style>