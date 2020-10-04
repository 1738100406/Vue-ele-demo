<template>
  <div :class="{ View: isView }" @click.self="hiedView">
    <!-- 导航 -->
    <div v-if="filterData" class="filter_wrap">
      <aside class="filter">
        <div
          class="filter-nav"
          v-for="(item, i) in filterData.navTab"
          :key="i"
          @click="filterSort(i)"
          :class="{ 'filter-bold': currentFilter === i }"
        >
          <span> {{ item.name }}</span>
          <i v-if="item.icon" class="'fa fa-' item.icon"></i>
        </div>
      </aside>
    </div>
    <!-- 排序 -->
    <div class="filter-extend" v-if="isView">
      <ul>
        <li
          @click="selected(item, i)"
          :class="{ selectName: currentSelect === i }"
          v-for="(item, i) in filterData.sortBy"
          :key="i"
        >
          <span>{{ item.name }}</span>
          <i v-show="currentSelect === i" class="fa fa-check"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: 0,
      isView: false,
      currentSelect: 0,
    };
  },
  methods: {
    filterSort(i) {
      this.currentFilter = i;
      switch (i) {
        case 0:
          this.isView = true;
          this.$emit("searchFixed", true);
          break;
        default:
          this.hiedView();
          break;
      }
    },
    hiedView() {
      this.isView = false;
      this.$emit("searchFixed", false);
    },
    selected(item, i) {
      this.currentSelect = i;
      this.filterData.navTab[0].name = this.filterData.sortBy[i].name;
      this.hiedView();
      this.$emit("update", { condation: item.code });
    },
  },
  props: ["filterData"],
  created() {},
};
</script>

<style scoped>
.filter_wrap {
  background: #fff;
  position: sticky;
  top: 54px;
  z-index: 1;
}
.filter {
  position: relative;
  border-bottom: 1px solid #ddd;
  line-height: 10.4vw;
  z-index: 9;
  height: 10.666667vw;
  display: flex;
  justify-content: space-around;
}
.filter-nav {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 0.8333rem;
}
.filter-nav i {
  width: 1.6vw;
  height: 0.8vw;
  margin-left: 1.333333vw;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
}

.filter-bold {
  font-weight: 600;
  color: #333;
}

.View {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}

.filter-extend {
  background-color: #fff;
  color: #333;
  padding-top: 2.133333vw;
  position: absolute;
  width: 100%;
  z-index: 4;
  left: 0;
  top: 24.533333vw;
}
.filter-extend li {
  position: relative;
  padding-left: 5.333333vw;
  line-height: 10.666667vw;
  overflow: hidden;
}
.fa-check {
  float: right;
  color: #009eef;
  margin-right: 3.733333vw;
  line-height: 10.666667vw;
}

.selectName {
  color: #009eef;
}
/* 筛选 */
.filter-sort {
  background: #fff;
  padding: 0 2.666667vw;
  line-height: normal;
}
.morefilter {
  margin: 2.666667vw 0;
  overflow: hidden;
}
.morefilter .title {
  margin-bottom: 2vw;
  color: #666;
  font-size: 0.5rem;
}
.morefilter ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.morefilter li {
  box-sizing: border-box;
  width: 30%;
  height: 9.333333vw;
  line-height: 9.333333vw;
  margin: 0.8vw 1%;
  background: #fafafa;
}
.morefilter li img {
  width: 3.466667vw;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.8vw;
}
.morefilter li span {
  margin-left: 2%;
  vertical-align: middle;
}

.morefilter-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 11.466667vw;
  box-sizing: border-box;
}
.morefilter-btn span {
  font-size: 0.826667rem;
  text-align: center;
  text-decoration: none;
  flex: 1;
}
.morefilter-clear {
  color: #ddd;
  background: #fff;
}
.morefilter-ok {
  color: #fff;
  background: #00d762;
  border: 0.133333vw solid #00d762;
}

.selected {
  color: #3190e8 !important;
  background-color: #edf5ff !important;
}

.edit {
  color: #333 !important;
}
</style>