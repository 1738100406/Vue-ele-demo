<template>
  <div class="search">
    <Header :isLeft="true" title="搜索" />
    <div class="search_header">
      <div class="search_wrap">
        <i class="fa fa-search"></i>
        <input v-model="serach_val" type="text" name="" id="" />
        <button>搜索</button>
      </div>
    </div>
    <div class="shop" v-if="result">
      <Searchindex @click="shopClick" :data="result.restaurants" />
      <Searchindex @click="shopClick" :data="result.words" />
    </div>
    <div class="contan" v-if="SShow">商家详细</div>
  </div>
</template>

<script>
import Searchindex from "@/components/Searchindex.vue";
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      serach_val: "",
      result: null,
      SShow: false,
    };
  },
  methods: {
    shopClick() {
      this.serach_val = "";
      this.$router.push("/");
    },
  },
  watch: {
    serach_val(data) {
      //   console.log(data);
      this.$axios(`/api/profile/typeahead/${data}`).then((res) => {
        console.log(res);
        this.result = res.data;
      });
    },
  },
  components: {
    Header,
    Searchindex,
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.search_header {
  margin-top: 45px;
  background: #fff;
  padding: 0 4.266667vw;
}
.search_header .search_wrap {
  padding: 2.933333vw 2.933333vw 2.933333vw 0;
  display: flex;
  align-items: center;
  position: relative;
}
.search_wrap .fa-search {
  width: 2.933333vw;
  height: 2.933333vw;
  color: #888;
  position: absolute;
  top: 4.6666666vw;
  left: 2.933333vw;
}
.search_wrap input {
  flex-grow: 1;
  border-radius: 0.266667vw;
  background-color: #f8f8f8;
  padding: 1.733333vw 4vw 1.733333vw 8.8vw;
  color: #666;
  outline: none;
  border: none;
}
.search_wrap button {
  outline: none;
  border: none;
  color: #333;
  font-size: 0.426667rem;
  background: #fff;
  font-weight: 700;
  margin-left: 2.933333vw;
  font-size: 14px;
}

.shop {
  width: 100%;
  height: calc(100% - 95px);
  overflow: auto;
}

.empty_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
}
.empty_wrap img {
  width: 35vw;
  height: 35vw;
}
.empty_txt h4 {
  color: #666;
  font-size: 1rem;
  margin: 12vw 0 2vw 0;
}
.empty_txt span {
  color: #999;
  font-size: 0.8rem;
}
</style>