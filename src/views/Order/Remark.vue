<template>
  <div class="remark">
    <Header :isLeft="true" title="添加备注" />
    <div class="view-body">
      <section>
        <textarea
          v-model="text"
          placeholder="填写额外对餐厅或骑手小哥备注的信息"
          maxlength="100"
        >
        </textarea>
        <div class="switch" v-for="item in radioItem" :key="item.name">
          <div
            @click="selected(item)"
            :class="{ selected: item.select == true }"
            class="switch-item item-line"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="switch" v-for="(item, i) in switchItem" :key="i">
          <span
            @click="item.select = !item.select"
            :class="{ selected: item.select == true }"
            class="switch-item item-line"
          >
            <span>{{ item.name }}</span>
          </span>
        </div>
        <button @click="submit" class="btn-submit">确定</button>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  neme: "Remark",
  data() {
    return {
      radioItem: [
        { select: false, name: "不要辣" },
        { select: false, name: "少点辣" },
        { select: false, name: "多点辣" },
      ],
      switchItem: [
        { select: false, name: "不要香菜" },
        { select: false, name: "不要洋葱" },
        { select: false, name: "多点醋" },
        { select: false, name: "多点葱" },
      ],
      text: "",
    };
  },
  methods: {
    selected(item) {
      this.radioItem.forEach((selectd) => {
        selectd.select = false;
      });
      item.select = true;
    },
    submit() {
      var remark = "";
      this.radioItem.forEach((item) => {
        if (item.select) {
          remark += item.name + ",";
        }
      });
      this.switchItem.forEach((item) => {
        if (item.select) {
          remark += item.name + ",";
        }
      });
      remark += this.text;
      this.$store.dispatch("setRemarkInfo", {
        tableware: this.$store.state.remarkInfo.tableware,
        remark: remark,
      });
      this.$router.go(-1);
    },
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.remark {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
}

.view-body {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  font-size: 0.8rem;
  color: #333;
}
.view-body section {
  margin-top: 2.133333vw;
  padding: 4.266667vw;
  background-color: #fff;
  margin-bottom: 2.133333vw;
}
.view-body section textarea {
  width: 100%;
  height: 29.866667vw;
  margin-bottom: 4.266667vw;
  padding: 4.266667vw;
  border: 1px solid #ccc;
  border-radius: 0.666667vw;
  background-color: #f9f9f9;
  color: #666;
  resize: none;
  box-sizing: border-box;
  outline: none;
}
.switch {
  display: inline-block;
  margin: 0 2.666667vw 2.666667vw 0;
  border: 1px solid #ddd;
  overflow: hidden;
  border-radius: 1.066667vw;
}
.switch-item {
  display: inline-block;
  padding: 0 2.133333vw;
  height: 8vw;
  line-height: 8vw;
  text-align: center;
  color: #666;
}
.item-line::after {
  content: " ";
  display: inline-block;
  height: 4vw;
  width: 1px;
  background: #ddd;
  line-height: 8vw;
  vertical-align: middle;
  left: 2.266667vw;
  position: relative;
}
.btn-submit {
  display: block;
  padding: 3.466667vw 0;
  color: #fff;
  background-color: #00e067;
  border-radius: 0.533333vw;
  opacity: 0.98;
  outline: none;
  border: none;
  width: 92vw;
  margin: 3.133333vw auto 0;
  font-size: 1rem;
}

/* 选中样式 */
.switch-item.selected {
  background: #0186ff;
  color: #fff;
  position: relative;
}
</style>
