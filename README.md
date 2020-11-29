# vue-ele-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

.toFixed(1)  //保留一位

点击tab后 根据索引值i 和当前的点击的值current是否相等来显示高亮

显示蒙板css

```
:class="{ view : isview}"
```

```
.view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}
```

```
 filterSort(i) {
      this.currentFilter = i;
      switch (i) {
        case 0:						 //如果i等于0
          this.isView = true;		//显示蒙版
          this.$emit("searchFixed", true); //注册事件让搜索栏向上
          break;
        default:
          this.hiedView();
          break;
      }
 },
 hiedView(){
 	this.isView = false;			//取消蒙版
 	this.$emit("searchFixed", true);//注册事件让搜索栏向下	
 }
```

上拉加载 下拉刷新

```
<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</mt-loadmore>

loadTop() {
  ...// 加载更多数据
  this.$refs.loadmore.onTopLoaded();
}
```

购物车 



封装 -0+ CartControll.vue

```
<template>
  <div class="cartcontroll">
    <span
      @click.stop="decreaseCount"
      class="cartbutton button-minus"
      v-if="food.count > 0"
    >
      <i class="fa fa-minus"></i>
    </span>
    <span class="cartcount" v-if="food.count > 0">{{ food.count }}</span>
    <span @click.stop="increaseCount" class="cartbutton">
      <i class="fa fa-plus-circle"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "CartControll",
  data() {
    return {
      food: {
        count: 0, //用foreach添加count 在赋值渲染
      },
    };
  },
  methods: {
    decreaseCount() {
      this.food.count--;
    },
    increaseCount() {
      this.food.count++;
    },
  },
};
</script>

<style scoped>
.cartcontroll {
  display: inline-flex;
  align-items: center;
}
.cartbutton {
  display: inline-block;
  vertical-align: middle;
}
.cartbutton i {
  color: rgb(35, 149, 255);
  vertical-align: middle;
  font-size: 1.5rem;
}
.button-minus {
  width: 4.866667vw;
  height: 4.866667vw;
  border: 1px solid rgb(35, 149, 255);
  border-radius: 50%;
  text-align: center;
}
.button-minus i {
  font-size: 1rem;
}
.cartcount {
  display: inline-block;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  vertical-align: middle;
  font-size: 0.8rem;
  width: 6.933333vw;
  overflow: hidden;
}
</style>
```

路由跳转传传参数

```
this.$router.push({name:“ ”, params:“ ”})

beforeRouteEnter(to, from, next) {

    next((vm) => {

      vm.tagsinfo = to.params;

    });

  },
  
  两种方式的区别是query传参的参数会带在url后边展示在地址栏，params传参的参数不会展示到地址栏。需要注意的是接收参数的时候是route而不是router。两种方式一一对应，名字不能混用
  由于动态路由也是传递params的，所以在 this.$router.push() 方法中path不能和params一起使用，否则params将无效。需要用name来指定页面。s
```

