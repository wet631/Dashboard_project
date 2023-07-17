<template>
  <div class="box">
    <div class="title">当日</div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import axios from "axios";
// 引入
import * as echarts from "echarts/core";

export default {
  name: "leftOne",
  data() {
    return {
      peopleList: [],
    };
  },
  mounted() {
    // 初始化
    this.chart = echarts.init(this.$refs.chart);
  },
  created() {
    this.getAttendancesList();
  },
  watch: {
    "$store.state.baseUnit"() {
      this.chart.resize();
      this.setChart();
    },
  },
  methods: {
    setChart() {
      const options = {
        legend: {
          itemWidth: 15, // 设置图例项的宽度
          itemHeight: 8, // 设置图例项的高度
          data: ["民警", "辅警"],
          textStyle: {
            color: "rgba(55,255,249,1)",
          },
          itemStyle: {},
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "#1F6EFF",
          padding: [8, 12],
          textStyle: {
            color: "#fff",
          },
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "5%",
          right: "6%",
          bottom: "10%",
          height: "60%",
          // containLabel(grid 区域是否包含坐标轴的刻度标签)
          containLabel: true,
          splitLine: {
            show: true, // 显示网格线
            lineStyle: {
              color: "#152a63", // 将网格线的颜色设置为不同的颜色
            },
          },
        },
        xAxis: [
          {
            type: "category",
            data: this.peopleList.map((item) => item.date),
            axisLabel: {
              formatter: function (value) {
                return value;
              },
              interval: 0,
              textStyle: {
                color: "#009bd2", // 设置 Y 轴标签的颜色
              },
            },
            axisLine: {
              lineStyle: {
                color: "#009bd2", // 设置 x 轴线的颜色
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#009bd2", // 设置 Y 轴标签的颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: "#009bd2", // 设置网格背景线的颜色
              },
            },
          },
        ],
        series: [
          {
            name: "民警",
            type: "bar",
            stack: "总量",
            barWidth: 8,
            data: [150, 232, 201, 134, 90],
            itemStyle: {
              color: "#006CFF",
            },
            emphasis: {
              // hover样式
              itemStyle: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
                z: 999, // 提高层级
              },
            },
          },
          {
            name: "辅警",
            type: "bar",
            barWidth: 8,
            stack: "总量",
            itemStyle: {
              borderRadius: [5, 5, 0, 0],
              color: "#7BD21E",
            },
            data: [100, 300, 291, 234, 290],
            emphasis: {
              // hover样式
              itemStyle: {
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
                z: 999, // 提高层级
              },
            },
          },
        ],
      };
      this.chart.setOption(options);
    },
    async getAttendancesList() {
      const { data } = await axios.get("/api/peoples");
      if (data.code == "200") {
        this.peopleList = data.list;
        // console.log(this.peopleList, "this.peopleList");
        this.setChart();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 2.5rem;
  background: url("../assets/pic/kuang-1@2x.png") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  .title {
    width: 100%;
    height: 0.34rem;
    text-align: center;
    color: #b5e3ff;
    font-size: 0.2rem;
    font-weight: bolder;
    margin-bottom: 0.1rem;
  }
  .chart {
    flex: 1;
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
