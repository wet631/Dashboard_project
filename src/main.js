import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./utils/rem";
import './mock';
// // 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图和饼状图图表，图表后缀都为 Chart，具体为 图标名称+Chart （注意图标名称为首字母大写）
import { BarChart, LineChart } from "echarts/charts";
import { LegendComponent } from "echarts/components";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";

import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
import { DataZoomComponent } from 'echarts/components';
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent,
  DataZoomComponent
]);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
