<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="sear_val" placeholder="请输入城市名" />
      </div>
      <button @click="$router.go(-1)">取消</button>
    </div>
    <div>
      <div class="location">
        <Location />
      </div>
      <div class="select">
        所在地区<input type="button" value="选择地区" v-model="select_val" />
      </div>
      <div class="desc">
        <span>详细信息</span>
        <textarea placeholder="请输入详细地址" name=""></textarea>
      </div>
    </div>
    <div class="btn">
      <button>保存</button>
    </div>
  </div>
</template>

<script>
import LcCity from "lc-city-selector";
import Location from "@/components/Location.vue";
export default {
  name: "city",
  data() {
    return {
      sear_val: "",
      select_val: "",
    };
  },
  created() {
    var that = this;
    var City = new LcCity({
      confirm: function (data) {
        console.log(data); // data就是选中的地区，一个拼接好的字符串
        that.select_val = data;
      },
    });
    City.show();
  },
  components: {
    Location,
  },
};
</script>

<style scoped>
.city {
  width: 100%;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
  background: #fff;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  outline: none;
  color: #009eef;
  background-color: #fff;
  border: none;
}

.location,
.select {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.select {
  border-bottom: 1px solid #ccc;
}
.select input {
  width: 180px;
  height: 25px;
  background-color: #fff;
  padding: 5px;
  line-height: 15px;
  margin-left: 10px;
  border: none;
}
.desc {
  margin-left: 10px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.desc span {
  margin-top: 15px;
}
.desc textarea {
  width: 70%;
  height: 150px;
  margin-top: 10px;
  margin-left: 5px;
  padding: 5px;
  border: 1px solid red;
  resize: none;
  outline: none;
  border: none;
}
.btn button {
  width: 100%;
  height: 40px;
  background-color: #009eef;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
</style>