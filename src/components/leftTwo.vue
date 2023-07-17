<template>
  <div class="box">
    <div class="title">预警</div>
    <div class="overview"></div>
    <div class="sub-title" v-if="showChart">
      <img src="../assets/pic/left2_subtitle_icon@2x.png" alt="" />
      <div class="subtitile-text">考勤</div>
    </div>
    <div class="sub-title" v-else>
      <div class="subtitle-text scorl-list">扣分列表</div>
    </div>
    <div class="chart" ref="chart" v-show="showChart"></div>
  </div>
</template>

<script>
var yData1 = [12, 5, 12, 46, 22];
var yData2 = [13, 7, 10, 38, 17];
import axios from "axios";
import * as echarts from "echarts/core";
export default {
  data() {
    return {
      showChart: true,
      list: [],
    };
  },
  mounted() {
    this.getAttendancesList();
    this.chart = echarts.init(this.$refs.chart);
  },
  methods: {
    setOption() {
      const options = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "#1F6EFF",
          textStyle: {
            color: "#fff",
          },
          axisPointer: {
            type: "shadow",
          },
          borderColor: "#1F6EFF", //提示框的边框颜色
        },
        legend: {
          // 让图例旁边变成线 而不是线段
          icon: "roundRect",
          itemHeight: 3,
          textStyle: {
            color: "rgba(55,255,249,1)",
            fontSize: 14,
          },
          data: ["签到率", "签退率"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          height: "75%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: this.list.map((item) => item.date),
            interval: 0,
            // x轴坐标 0度线的样式
            axisLine: {
              lineStyle: {
                color: "#009bd2",
              },
            },
            // x轴的文字的样式
            axisLabel: {
              textStyle: {
                color: "#009bd2",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "%",
            nameTextStyle: {
              color: "red",
            },
            // 网格线段样式
            splitLine: {
              show: true,
              lineStyle: {
                color: "#009bd2",
                // 网格显示虚线
                type: "dashed",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#0AA9E0",
              },
            },
          },
        ],
        series: [
          {
            name: "签到率",
            type: "line",
            // 线段点消失
            symbol: "none",
            // line的颜色
            itemStyle: {
              normal: {
                color: "#3057ef",
              },
            },
            data: yData1,
          },
          {
            name: "签退率",
            type: "line",
            symbol: "none",
            // line的颜色
            itemStyle: {
              normal: {
                color: "#5cd244",
              },
            },
            data: yData2,
          },
        ],
      };
      this.chart.setOption(options);
    },
    async getAttendancesList() {
      const { data } = await axios.get("/api/posts");
      if (data.code == "200") {
        this.list = data.data;
        this.setOption();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 3.76rem;
  background: url("../assets/pic/kuang-2@2x.png") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: #fff;
  .title {
    width: 100%;
    height: 0.34rem;
    text-align: center;
    color: #b5e3ff;
    font-size: 0.2rem;
    font-weight: bolder;
    margin-bottom: 0.1rem;
  }
  .overview {
    width: 92%;
    height: 1.11rem;
    background: url("../assets/pic/left2_inner_border@2x.png") no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sub-title {
    display: flex;
    align-items: center;
    margin-bottom: 0.05rem;
    border: 0.01rem solid transparent;
    width: 100%;
    img {
      width: 0.2rem;
      height: 0.2rem;
      margin-right: 0.1rem;
      margin-left: 0.1rem;
    }
    .subtitle-text {
      flex: 1;
      overflow: hidden;
      color: #bde4ff;
      font-size: 0.17rem;
      text-align: left;
    }
    .scorl-list {
      color: #35edef;
    }
  }
  .chart {
    flex: 1;
    padding-bottom: 0.2rem;
    box-sizing: border-box;
    width: 100%;
  }
  .table-area {
    flex: 1;
    width: 100%;
    margin-bottom: 0.15rem;
    overflow: hidden;
    .table-inner {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
  .table-area::-webkit-scrollbar {
    display: none;
  }
}
</style>
