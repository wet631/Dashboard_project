<template>
  <div id="app">
    <div class="inner">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  // font-family: PingFangSC, "Microsoft Yahei", "微软雅黑", Helvetica, Arial,
  //   sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  background-color: rgb(5, 3, 30);
  // display: flex;
  // align-items: center;
  // justify-content: center;
  font-size: 0.14rem;
  .inner {
    width: 19.2rem;
    height: 10.8rem;
    position: relative;
  }
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-image__error {
  font-size: 0.3rem !important;
}
tbody {
  vertical-align: top;
}
</style>
