<template>
  <div class="address">
    <Header :isLeft="true" title="添加地址" />
    <div class="city_search">
      <div class="search">
        <span class="city" @click="$router.push('/city')">
          {{ city }}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input
          type="text"
          v-model="search_val"
          placeholder="小区/写字楼/学校等"
        />
      </div>
      <Location />
    </div>
    <div class="area">
      <ul class="area_list" v-for="(item, i) in area_list" :key="i">
        <li @click="select(item)">
          <h4>{{ item.district }}</h4>
          {{ item.district }} {{ item.name }} {{ item.address }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Location from "@/components/Location.vue";
export default {
  components: {
    Header,
    Location,
  },
  methods: {
    select(item) {
      //   console.log(item.district + item.name + item.address);
      this.$store.dispatch(
        "setAddress",
        item.district + item.name + item.address
      );
      this.$router.push("/");
    },
  },
  data() {
    return {
      search_val: "",
      city: "北京",
      area_list: [],
    };
  },
  computed: {
    address() {
      return this.$store.state.Location.formattedAddress;
    },
  },
  watch: {
    search_val() {
      var that = this;
      AMap.plugin("AMap.Autocomplete", function () {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: that.city,
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(that.search_val, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          //   console.log(result);
          that.area_list = result.tips;
        });
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    next((vm) => {
      vm.city = to.params.city;
    });
  },
};
</script>

<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}

.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}

.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #222;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>