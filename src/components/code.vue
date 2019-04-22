<template>
    <div>
        <canvas @click='changeVeri' id='canvas' width="100%" height="34px"></canvas>
    </div>
</template>
<script>
/* cnpm install axios --save-dev */
import Axios from "axios"  /* 引入外部的一个包 不属于VUE不需要vue.use */
export default {
    //   name:code,  /* 优化的 写了会报错...? */
    data() {
        return {
            //1.定义变量
            canvas: '',/* 获取canvas元素  var ocanvsa= document.getElementById('canvas') */
            width: '',/* 当前canvsa 当前的宽 */
            height: '',/* 当前canvsa 当前的高 */
            ctx: "",/* 当前canvsa 绘制2D的环境 */
        }
    }, mounted() {
        // 2.实例挂载之后 获取 元素节点ID
        //  在 方法里定义 需要This 获取这个canvas对象或变量
        this.canvas = document.getElementById('canvas');
        // console.log(this.canvas)
        //3.设置宽高
        this.width = this.canvas.width
        this.height = this.canvas.height
        //4.设置2D环境
        this.ctx = this.canvas.getContext('2d')
        this.getver(this.drawPic)
    }, methods: {
        //请求验证码
        //5产生随机数
        getver(fn) {
            Axios({
                url: 'http://127.0.0.1:3000/VueHandler/AdminLoginAndRegHandler?action=verification',
                method: 'get',  /* methods  get方式304 post直接报错 */
                // params:{
                //     veri:
                // }
            }).then(function(res) {/* res 随便写 */
                fn(res.data.data) /* 也是回调函数 */
            })
        }
        ,
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        //6产生随机颜色
        randomColor(min, max) {
            var r = this.randomNum(min, max);
            var g = this.randomNum(min, max);
            var b = this.randomNum(min, max);
            return 'rgb(' + r + ',' + g + ',' + b + ')'
        },
        //7绘制文字
        drawPic(returnTxt) {

            //绘制背景颜色
            this.ctx.fillStyle = this.randomColor(80, 180) /* 设置fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）。 */
            // 绘制矩形
            this.ctx.fillRect(0, 0, this.width, this.height)/*fillRect 参数1,2 从坐标XY 0 0开始 ,参数34宽高*/
            //设置文字
            for (var i = 0; i < 4; i++) {
                //56th
                var txt = returnTxt[i]
                this.ctx.fillStyle = this.randomColor(150, 200)  /* 先设置颜色 */
                this.ctx.font = this.randomNum(20, 30) + "px Arial" /* 再设置字体,字体取色 就近原则 */
                var x = 10 * i + 5;
                var y = this.randomNum(9, 15);
                var deg = this.randomNum(-15, 15)
                //设置旋转角度
                this.ctx.translate(x, y)    /* 重新映射画布上的(x,y)位置*/
                this.ctx.rotate(deg * Math.PI / 180) /* 旋转当前绘图 旋转弧度 */
                this.ctx.fillText(txt, x, y) /* fillText在画布上绘制"被填充的"文本。 x轴间距,y上下的距离*/
                //初始化 度数 
                this.ctx.rotate(-deg * Math.PI / 180)
                this.ctx.translate(-x, -y)
            }
            //绘制干扰线
            for (var i = 0; i < 5; i++) { /* 绘制图形或线条需要先设置颜色 */
                this.ctx.strokeStyle = this.randomColor(100, 200)     /* 绘制线颜色 */
                /* 开启画笔 */
                this.ctx.beginPath();
                //绘制线条的起始位置
                this.ctx.moveTo(this.randomNum(0, 100), this.randomNum(0, 32))
                this.ctx.lineTo(this.randomNum(0, 100), this.randomNum(0, 32))
                //绘制完成 关闭画笔
                this.ctx.closePath()
                this.ctx.stroke() /* 实际填充颜色 */
            }
            //绘制小点
            for (var i = 0; i < 20; i++) {
                this.ctx.fillStyle = this.randomColor(0, 255)
                this.ctx.beginPath();
                this.ctx.arc(this.randomNum(0, 50), this.randomNum(0, 32), 1, 0, 2 * Math.PI)
                /* arc (X,Y,半径,开始位置,结束位置) */
                this.ctx.closePath()
                this.ctx.fill()
            }
        },
        changeVeri() {
            this.getver(this.drawPic)
        }
    }

}
</script>
<style scoped>
/* scoped  当前作用域 */
</style>