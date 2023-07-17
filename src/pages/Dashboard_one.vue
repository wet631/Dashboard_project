<template>
  <div class="Dashboard_one">
    <div class="header"></div>
    <div class="left">
      <leftOne></leftOne>
      <leftTwo></leftTwo>
      <leftThree></leftThree>
    </div>
    <div class="right">
      <rightOne></rightOne>
    </div>
  </div>
</template>

<script>
import leftOne from "@/components/left/letfOne.vue";
import leftTwo from "@/components/left/leftTwo.vue";
import leftThree from "@/components/left/leftThree.vue";
import rightOne from "@/components/rightOne.vue";
// import {getMockAttendancesList} from '@/server/api'
export default {
  name: "Dashboard_one",
  data() {
    return {};
  },
  components: {
    leftOne,
    leftTwo,
    rightOne,
    leftThree
  },
  created() {
    // this.getList();
    // this.getPeoleList();
    // this.getAttendancesList();
  },
  methods: {
    // getList() {
    //   axios
    //     .get("/api/user")
    //     .then((response) => {
    //       console.log(response.data); // 模拟的用户数据
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    // getPeoleList() {
    //   axios
    //     .get("/api/peoples")
    //     .then((response) => {
    //       console.log(response.data, "个人数据"); // 模拟的用户数据
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    // getAttendancesList() {
    //   axios
    //     .get("/api/mock/attendances")
    //     .then((res) => {
    //       console.log(res.data, "数据"); // 模拟的用户数据
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
  },
};
</script>

<style scoped lang="scss">
.Dashboard_one {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
  word-break: break-all;
  color: #ffffff;
  overflow: hidden;
  .header {
    // background-color:pink;
    position: absolute;
    width: 100%;
    height: 0.86rem;
    left: 0;
    right: 0;
    top: 0;
    z-index: 410;
  }
  .left,
  .right {
    height: 9.55rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: 0.2rem;
    z-index: 410;
    // background-color: #fff;
  }
  .left {
    left: 0.18rem;
    width: 3.36rem;
  }
  .right {
    right: 0.18rem;
    width: 3.4rem;
  }
}
</style>
