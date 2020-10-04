<template>
  <div class="home">
    <router-view />
    <TabBar />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
export default {
  components: {
    TabBar,
  },
  methods: {},
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background-color: #eee;
}
</style>
