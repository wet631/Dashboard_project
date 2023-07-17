<template>
  <div class="box">
    <div class="title">绩效</div>
    <div class="sub-title">
      <img src="../../assets//pic//left2_subtitle_icon@2x.png" alt="404" />
      <div class="subtitle-text">指标完成率</div>
      <div
        @click="getqntCount(0)"
        :class="clickType ? 'selector active' : 'selector'"
      >
        表格
      </div>
      <div
        @click="getqntCount(1)"
        :class="!clickType ? 'selector active' : 'selector'"
      >
        chart
      </div>
    </div>
    <div class="chart" ref="chart" v-if="disibleShow"></div>
    <div class="table" v-else>
      <div class="table-inner">
        <el-table>
          <el-table-colum label="单位名称"> </el-table-colum>
          <el-table-colum label="完成情况"> </el-table-colum>
          <el-table-colum label="比率"> </el-table-colum>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
export default {
  data() {
    return {
      disibleShow: true,
      clickType: true,
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.setOption();
  },
  methods: {
    setOption() {
      const options = {
        legend: {
          orient: "horizontal",
          icon: "rect",
          textStyle: { fontWeight: "bold", color: "#82B8E7" },
          itemHeight: 5,
          data: ["鄞州大队"],
        },
        gird: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          height: "80%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: ["三月", "四月", "五月", "六月", "七月", "八月", "九月"],
          axisLine:{
            lineStyle:{
                color:'#FE9329'
            }
          },
          axisLabel:{
            textStyle:{
                color:'#FE9329'
            }
          }
        },
        yAxis: {
          type: "category",
          // y轴的线 取消
          axisLine: {
            show: false, // 取消 y 轴的线
          },
          data: ["C", "B", "A"],
          axisLabel: {
            textStyle: {
              color: "#009bd2", // 设置 Y 轴标签的颜色
            },
          },
          // 分割线的颜色以及是否展示
          splitLine: {
            show: true, // 显示分隔线
            lineStyle: {
              color: "#009bd2", // 设置网格背景线的颜色
            },
          },
        },
        series: [
          {
            data: ["A", "C", "B", "A", "A", "B", "A"],
            type: "line",
            smooth: true,
            color: "#FE9329",
            symbolSize: 8,
          },
        ],
      };
      this.chart.setOption(options);
    },
    getqntCount(type) {
      if (type == 0) {
        this.clickType = true;
      } else {
        this.clickType = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 2.98rem;
  background: url("../../assets/pic/kuang-3@2x.png") no-repeat;
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
    margin-bottom: 0.05rem;
    cursor: pointer;
  }
  .sub-title {
    display: flex;
    align-items: center;
    margin-bottom: 0.05rem;
    border: 0.01rem solid transparent;
    width: 100%;
    margin-left: 0.2rem;
    img {
      width: 0.2rem;
      height: 0.2rem;
      margin-right: 0.1rem;
    }
    .selector {
      width: 0.48rem;
      height: 0.24rem;
      border: 0.01rem solid #048ead;
      background-color: transparent;
      color: #048ead;
      font-size: 0.13rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-radius: 0.12rem;
    }
    .selector.active {
      background-color: #048ead;
      color: white;
    }
  }
  .chart {
    flex: 1;
    overflow: hidden;
    padding-bottom: 0.24rem;
    box-sizing: border-box;
    width: 100%;
  }

  .table {
    flex: 1;
    overflow: hidden;
    padding-bottom: 0.24rem;
    box-sizing: border-box;
    width: 100%;
    .table-inner {
      width: 100%;
      height: 100%;
      border: 0.01rem solid #13addf;
      box-sizing: border-box;
      overflow-y: auto; /* 垂直滚动条 */
      .progress-bar {
        float: left;
        height: 100%;
        overflow: hidden;
        position: relative;
        width: 100%;
        margin-top: 0.05rem;
      }

      .progress-completed {
        display: inline-block;
        height: 0.2rem;
        background-color: #2278d8;
        text-align: center;
        transition: width 0.5s;
        border-bottom-left-radius: 0.1rem;
        border-top-left-radius: 0.1rem;
      }

      .progress-remaining {
        display: inline-block;
        height: 0.2rem;
        background-color: #134b89;
        color: #303133;
        transition: width 0.5s;
        border-bottom-right-radius: 0.1rem;
        border-top-right-radius: 0.1rem;
      }

      .progress-label {
        position: absolute;
        left: 20%;
        top: 0.01rem;
        font-size: 0.14rem;
        line-height: 0.2rem;
      }
      .progress-completed-low {
        border-bottom-right-radius: 0.1rem;
        border-top-right-radius: 0.1rem;
      }
      .progress-remaining-low {
        border-bottom-left-radius: 0.1rem;
        border-top-left-radius: 0.1rem;
      }
    }
    .table-inner::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
