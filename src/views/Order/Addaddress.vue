<template>
  <div class="addAddress">
    <Header isLeft title="添加地址" />

    <div class="viewbody">
      <div class="content">
        <Formblock v-model="tagsinfo.name" label="联系人" placeholder="姓名" />
        <div class="formblock">
          <div class="label-wrap">
            <div class="label">性别</div>
            <TabTag
              :selectTag="tagsinfo.sexs"
              @checkTag="checkTag"
              :tags="sexs"
            />
          </div>
        </div>
        <Formblock
          v-model="tagsinfo.phone"
          label="电话"
          placeholder="手机号码"
        />
        <Formblock
          v-model="tagsinfo.address"
          label="地址"
          placeholder="小区/写字楼/学校"
          icon="angle-right"
        />
        <Formblock
          v-model="tagsinfo.bottom"
          label="门牌号"
          placeholder="10栋2单元404"
          textarea="textarea"
          icon="edit"
        />
        <div class="formblock">
          <div class="label-wrap">
            <div class="label">标签</div>
            <TabTag
              :selectTag="tagsinfo.tags"
              @checkTag="checkTag"
              :tags="tags"
            />
          </div>
        </div>
      </div>
      <div class="form-button-wrap">
        <div class="form-button" @click="Addaddress">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Formblock from "@/components/Order/Formblock.vue";
import TabTag from "@/components/Order/TabTag.vue";
export default {
  name: "addaddress",
  data() {
    return {
      title: "",
      tags: ["家", "学校", "公司"],
      sexs: ["先生", "女士"],
      tagsinfo: {
        name: "",
        phone: "",
        sexs: "",
        tags: "",
        address: "",
        bottom: "",
      },
    };
  },
  components: {
    Header,
    Formblock,
    TabTag,
  },
  methods: {
    checkTag(item) {
      if (item == "先生" || item == "女士") {
        this.tagsinfo.sexs = item;
      } else {
        this.tagsinfo.tags = item;
      }
      //   console.log(this.tagsinfo);
    },
    Addaddress() {
      //   this.$axios
      //     .post(`/api/user/add_address/5cd437f`, this.tagsinfo)
      //     .then((res) => {
      //       console.log(res);
      //     });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.tagsinfo = to.params;
    });
  },
};
</script>

<style scoped>
.addAddress {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
}
.viewbody {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.content {
  padding-left: 4vw;
  background: #fff;
  font-size: 0.94rem;
}

.formblock {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
}
.formblock .label-wrap {
  display: flex;
  align-items: center;
  flex-basis: 17.333333vw;
  padding: 3.733333vw 0;
  line-height: 4.8vw;
  color: #333;
  font-weight: 700;
}
.formblock .label-wrap .label {
  width: 10vw;
  margin-right: 5vw;
}
/* 确定按钮 */
.form-button-wrap {
  padding: 5.333333vw 4vw;
  display: flex;
}
.form-button-wrap .form-button {
  background: #00d762;
  text-align: center;
  border-radius: 0.533333vw;
  flex: 1;
  font-size: 1.1rem;
  line-height: 5.066667vw;
  color: #fff;
  padding: 3.333333vw 0;
  border: none;
  font-weight: 500;
}
</style>
