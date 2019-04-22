<template>
  <div>
    <fcHeader></fcHeader>
    <Draw></Draw>
    <div class="content">
      <ul>
        <li>
          <h2>课程列表</h2>
          <p>Course List</p>
          <p class="icon icon-th-large"></p>
        </li>
        <li>
          <h2>课程添加</h2>
          <p>Course Add</p>
          <p class="icon icon-plus"></p>
        </li>
        <li>
          <h2>课程置顶</h2>
          <p>Course Up</p>
          <p class="icon icon-arrow-up"></p>
        </li>
        <li>
          <h2>视频管理</h2>
          <p>Video Manage</p>
          <p class="icon icon-facetime-video"></p>
        </li>
        <li>
          <h2>用户管理</h2>
          <p>Video Manage</p>
          <p class="icon icon-user"></p>
        </li>
        <li>
          <h2>学员管理</h2>
          <p>Video Manage</p>
          <p class="icon icon-file"></p>
        </li>
      </ul>
    </div>
    <!-- 图表 -->
    <div style="clear:both"></div>
    <!-- 有用 -->
    <div>
      <div class="ecOne ec" id='ec1'></div>
      <div class="ecTwo ec" id='ec2'></div>
      <div class="ecThree ec" id='ec3'></div>
    </div>
  </div>
</template>

<script>
import fcHeader from './header'
import Draw from './draw'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼图组件
require('echarts/lib/chart/pie')
require('echarts/lib/chart/bar')
// 引入提示框 工具箱和图例组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/legend')
// import echarts from 'echarts'

export default {
  components: { fcHeader, Draw }, /* 自定义组件  把header 注册到 home.vue 里面 ,然后自定义组件*/
  mounted() {
    this.draw1()
    this.draw2()
  },
  methods: {
    draw1() {
      // 基于准备好的dom，初始化echarts实例
      // let myChart = this.$echarts.init(document.getElementById('ec1'))
      // 这里之所以使用 require 而不是 import，是因为 require 可以直接从 node_modules 中查找，而 import 必须把路径写全。
      var myChart = echarts.init(document.getElementById('ec1'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ],
        backgroundColor: 'white'
      });
    },
    draw2(){
var myChart = echarts.init(document.getElementById('ec2'));
  myChart.setOption({
    backgroundColor:"white",
    title: {
        text: '浏览器占比变化',
        subtext: '纯属虚构',
        x: 'right',
        y: 'bottom'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Chrome', 'Firefox', 'Safari', 'IE9+', 'IE8-']
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    calculable: false,
    series: (function() {
        var series = [];
        for (var i = 0; i < 30; i++) {
            series.push({
                name: '浏览器（数据纯属虚构）',
                type: 'pie',
                itemStyle: {
                    normal: {
                        label: { show: i > 28 },
                        labelLine: { show: i > 28, length: 20 }
                    }
                },
                radius: [i * 4 + 40, i * 4 + 43],
                data: [
                    { value: i * 128 + 80, name: 'Chrome' },
                    { value: i * 64 + 160, name: 'Firefox' },
                    { value: i * 32 + 320, name: 'Safari' },
                    { value: i * 16 + 640, name: 'IE9+' },
                    { value: i * 8 + 1280, name: 'IE8-' }
                ]
            })
        }
        series[0].markPoint = {
            symbol: 'emptyCircle',
            symbolSize: series[0].radius[0],
            effect: { show: true, scaleSize: 12, color: 'rgba(250,225,50,0.8)', shadowBlur: 10, period: 30 },
            data: [{ x: '50%', y: '50%' }]
        };
        return series;
    })()
})

    }/* draw2结束 */
  }
}





</script>

<style>
.content ul li {
  width: 13%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  float: left;
  margin-left: 3%;
  text-align: center;
  color: #fff;
  line-height: 40px;
  margin-top: 200px;
}

.content ul li h2 {
  margin-top: 40px;
}

.content ul li p:nth-of-type(2) {
  font-size: 30px;
}

.content ul li:hover h2 {
  transform: translate(0, 10px);
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  transition: all 1s;
}

.ec {
  background: #ffffff;
  height: 370px;
  margin: 7%;
  float: left;
}

.ecOne,
.ecTwo {
  width: 530px;
}

.ecThree {
  width: 530px;
}
</style>
