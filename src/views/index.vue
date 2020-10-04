<template>
  <div class="index">
    <div class="header">
      <div
        class="address_map"
        @click="$router.push({ name: 'address', params: { city } })"
      >
        <i class="fa fa-map-marker"></i>
        <span>{{ address }}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>

    <div class="search_wrap" :class="{ fixedview: fixedviewShow }">
      <div class="shop_search" @click="$router.push('/search')">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
    <mt-swipe class="swiper" :auto="4000">
      <mt-swipe-item v-for="(item, i) in datalist" :key="i">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>
    <mt-swipe class="entries" :auto="0">
      <mt-swipe-item>
        <div class="foodentry" v-for="(item, i) in entries" :key="i">
          <div class="img_wrap">
            <img :src="item.icon" alt="" srcset="" />
          </div>
          <span>{{ item.name }}</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 推荐商家 -->
    <div class="shoplist-title">推荐商家</div>
    <FilterView
      @searchFixed="searchFixed"
      @update="update"
      :filterData="filterData"
    />
    <!-- 商家信息 -->
    <mt-loadmore
      :top-method="loadData"
      :bottom-method="loadMore"
      ref="loadmore"
      :autoFill="false"
      :bottom-all-loaded="allLoaded"
      :bottomPullText="bottomPullText"
    >
      <ul>
        <div class="shoplist">
          <IndexShop
            v-for="(item, i) in restaurants"
            :key="i"
            :restaurant="item.restaurant"
          />
        </div>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Loadmore } from "mint-ui";

import IndexShop from "../components/Indexshop.vue";
import FilterView from "../components/FilterView.vue";
export default {
  data() {
    return {
      datalist: [],
      entries: [],
      isSort: false,
      fixedviewShow: false,
      page: 1,
      size: 5,
      allLoaded: false,
      bottomPullText: "上拉刷新",
      restaurants: [], //存放所有商家 的数据
      filterData: {
        navTab: [
          { name: "综合排序" },
          { name: "距离最近" },
          { name: "品质联盟" },
          { name: "筛选" },
        ],
        sortBy: [
          { name: "综合排序" },
          { name: "综好评优先", code: "rating" },
          { name: "钥量最高" },
          { name: "起送价最低", code: "react_orderBy_number" },
          { name: "配送最快" },
          { name: "配送费最低", code: "rating" },
          { name: "人均从低到高" },
          { name: "人均从高到低", code: "rating" },
          { name: "通用排序" },
        ],
        screenBy: [
          {
            title: "商家服务(可多选)",
            id: "mpv",
            data: { name: "蜂鸟专送", select: false, code: "" },
          },
          {
            title: "优惠活动(可多选)",
            id: "offer",
            data: { name: "首单立减", select: false, code: "" },
          },
          {
            title: "人均消费(单选)",
            id: "per",
            data: { name: "20元以下", select: false, code: "" },
          },
        ],
      },
    };
  },
  components: {
    FilterView,
    IndexShop,
  },
  computed: {
    address() {
      return this.$store.getters.address;
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get("http://api.cms.liulongbin.top/api/getlunbo")
        .then(({ data }) => {
          this.datalist = data.message;
        });
      this.$axios
        .get(
          "https://www.fastmock.site/mock/ae3a2c74c182f166d86cab7a2466dca7/foodlist/api/food"
        )
        .then(({ data }) => {
          this.entries = data.data.kingkongList;
        });
      this.loadData();
    },
    loadData() {
      this.page = 1;
      this.allLoaded = false;
      this.bottomPullText = "上拉加载更多";
      // 拉取商家信息
      this.$axios
        .post(`/api/profile/restaurants/${this.page}/${this.size}`)
        .then(({ data }) => {
          this.restaurants = data;
          this.$refs.loadmore.onTopLoaded();
        });
    },
    loadMore() {
      if (!this.allLoaded) {
        this.page++;
        this.$axios
          .post(`/api/profile/restaurants/${this.page}/${this.size}`)
          .then(({ data }) => {
            this.$refs.loadmore.onBottomLoaded(); //加载完重新渲染
            if (data.length > 0) {
              data.forEach((item) => {
                this.restaurants.push(item);
              });
              if (data < this.size) {
                this.allLoaded = true;
                this.bottomPullText = "没有更多了哦";
              }
            } else {
              this.allLoaded = true;
              this.bottomPullText = "没有更多了哦";
            }
          });
      }
    },
    searchFixed(data) {
      this.fixedviewShow = data;
    },
    update(condation) {
      console.log(condation);
    },
  },
};
</script>

<style scoped>
.index {
  background-color: #fff;
}
.header,
.search_wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}

.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100px;
}

.entries {
  background: #fff;
  height: 33.2vw;
  text-align: center;
  overflow: hidden;
}
.foodentry {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 2.933333vw;
}
.foodentry .img_wrap {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.foodentry span {
  display: block;
  color: #666;
  font-size: 0.32rem;
}
/* 推荐商家 */
.shoplist-title {
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-size: 16px;
  color: #333;
  background: #fff;
}
.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.shoplist-title:before {
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  margin-left: 3.466667vw;
}

.fixedview {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;
}

.mint-loadmore {
  height: calc(100vh - 85px);
  overflow: auto;
}
</style>