<template>
    <div id="canvasdemo"  @click="canClick($event)">
        <canvas id="myCanvas0"></canvas>
        <canvas id="myCanvas1"></canvas>
        <canvas id="myCanvas2"></canvas>
        <canvas id="myCanvas3"></canvas>
        <canvas id="myCanvas4"></canvas>
    </div>
</template>
<script>
export default {
    name:'canvasedemo',
    data(){
        return{
            canWidth:0,//canvas 宽度
            canHeight:0,//canvas 高度
            colorMap:['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5','#2196f3','#03a9f4','#00bcd4',
                      '#009688','#4caf50','#8bc34a','#cddc39','#ffeb3b','#ffc107','#ff9800','#ff5722',
                      '#795548','#9e9e9e','#9e9e9e' ],//颜色 列表 这里暂时是Chrome 几个推荐颜色 后期可以自己加
            pageindex:0,//图层
        }
    },
     components: {
    
  },
    created(){
           
    },
    destroyed() {
     
    },
     methods: {
         canClick(ev){//canvas 点击事件
            var x, y;
            if (ev.layerX || ev.layerX == 0) {
                x = ev.layerX;
                y = ev.layerY;
            } else if (ev.offsetX || ev.offsetX == 0) { // Opera
                x = ev.offsetX;
                y = ev.offsetY;
            }
            // return {x: x, y: y}
             let canX = document.getElementById('canvasdemo').clientWidth;
            let canY = document.getElementById('canvasdemo').clientHeight;
            //默认是pc
            let numX = 5;
            let numY = 4;
            /*判断是否是移动端 */
                let ismobile =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                 if(ismobile){//移动端 修改 点击块数量;
                    numX = 4;
                    numY = 5;
                 }
           /*判断点击区域  从上往下 从这往有 一共 20个
            排列模板 ： （pc为例，移动端只是每排数量不同）
              1  2  3  4  5
              6  7  8  6  7
              ...
           */
          let regionNum; //点击区域编号
            if(Math.ceil(y/(canY/numY))==1){// 如果 是第一行 则就是第一行;
                regionNum =  Math.ceil(x/(canX/numX));
            }else{// 大于第一行时  列数要加上 行数乘以10
                if(ismobile){
                    regionNum =  Math.ceil(x/(canX/numX))+(Math.ceil(y/(canY/numY))-1)*4;
                }else{
                    regionNum =  Math.ceil(x/(canX/numX))+(Math.ceil(y/(canY/numY))-1)*5;
                }
                
            }
            console.log(regionNum,y,canY,numY)
                if(this.pageindex>4){//
                        this.pageindex = 0;
                }
                this.pageindex++;
            switch(regionNum) {
                    case 1://点击区域1
                        this.canvas1();
                        break;
                    case 2://点击区域2
                        console.log('点击第2区域')
                        this.canvas2();
                        break;
                    case 3://点击区域3
                        console.log('点击第3区域')
                        this.canvas3();
                        break;    
                    default:
                        this.canvas1()
                        console.log('点击未知区域',regionNum)
                } 
         },
         canvasInit(){//初始化
            let myCanvas0 = document.getElementById('myCanvas0');
            let myCanvas1 = document.getElementById('myCanvas1');
            let myCanvas2 = document.getElementById('myCanvas2');
            let myCanvas3 = document.getElementById('myCanvas3');
            let myCanvas4 = document.getElementById('myCanvas4');
            //修改canvas 的大小
             myCanvas0.setAttribute("width",document.body.clientWidth+'px');
            myCanvas0.setAttribute("height",document.body.clientHeight+'px');
            myCanvas1.setAttribute("width",document.body.clientWidth+'px');
            myCanvas1.setAttribute("height",document.body.clientHeight+'px');
            myCanvas2.setAttribute("width",document.body.clientWidth+'px');
            myCanvas2.setAttribute("height",document.body.clientHeight+'px');
            myCanvas3.setAttribute("width",document.body.clientWidth+'px');
            myCanvas3.setAttribute("height",document.body.clientHeight+'px');
            myCanvas4.setAttribute("width",document.body.clientWidth+'px');
            myCanvas4.setAttribute("height",document.body.clientHeight+'px');
            //将宽高赋值给全局变量
            this.canWidth = myCanvas0.clientWidth;//获取canvas 的宽度
            this.canHeight = myCanvas0.clientHeight;//获取canvas 的高度
            //清空画布
                let cxt0=document.getElementById("myCanvas0").getContext("2d");
                cxt0.clearRect(0,0,this.canWidth,this.canHeight); 
                let cxt1=document.getElementById("myCanvas1").getContext("2d");
                cxt1.clearRect(0,0,this.canWidth,this.canHeight);
                let cxt2=document.getElementById("myCanvas2").getContext("2d");
                cxt2.clearRect(0,0,this.canWidth,this.canHeight); 
                let cxt3=document.getElementById("myCanvas3").getContext("2d");
                cxt3.clearRect(0,0,this.canWidth,this.canHeight);
                let cxt4=document.getElementById("myCanvas4").getContext("2d");
                cxt4.clearRect(0,0,this.canWidth,this.canHeight);
         },
         randomNumber(){//生成所需要的随机数
           let mx = Math.floor(Math.random()*(this.canWidth+1));//随机x 下标
           let my = Math.floor(Math.random()*(this.canHeight+1));// 随机y 下标
           let msize = Math.floor(Math.random()*(10+1))/10;//随机大小
           let mcolor = this.colorMap[Math.floor(Math.random()*(this.colorMap.length+1))];//随机颜色
           let mrotate = Math.floor(Math.random()*(360+1));// 随机旋转角度
           return {mx:mx,my:my,mcolor:mcolor,mrotate:mrotate,msize:msize};
         },
         canvas1(){//绘制矩形
                var canvas = document.getElementById("myCanvas"+this.pageindex);
                if(canvas == null)
                return false;
                //获取上下文
                let x=0,y=0,size=1,mbool=true,arr=[];
                 let context = canvas.getContext('2d');
                    for(let i=0;i<7;i++){
                        let obj = this.randomNumber();
                        arr.push(obj)
                        //设定填充图形的样式
                        context.fillStyle = "rgba(0,0,0,0)";
                        context.strokeStyle = obj.mcolor;
                        context.lineWidth = 3;
                        context.fillRect(obj.mx+x,obj.my+y,300*obj.msize,300*obj.msize);              
                        context.strokeRect(obj.mx+x,obj.my+y,300*obj.msize,300*obj.msize);
                    }
                   window.requestAnimationFrame(draw);
                        
                function draw(){
                     let context = canvas.getContext('2d');
                            context.clearRect(0,0,10000,10000);
                        if(x>=300||size<=0){
                            return
                        }
                        if(x<10&&mbool){
                             x++;
                             y++;
                             size+=0.01;  
                        }else{
                            mbool=false
                            x--;
                            y--;
                            size-=0.01;
                        }
                       
                        for(let a=0;a<arr.length;a++){
                             
                            context.fillStyle = "rgba(0,0,0,0)";
                            context.strokeStyle = arr[a].mcolor;
                            context.lineWidth = 3;
                            context.fillRect(arr[a].mx+x,arr[a].my+y,300*arr[a].msize*size,300*arr[a].msize*size);              
                            context.strokeRect(arr[a].mx+x,arr[a].my+y,300*arr[a].msize*size,300*arr[a].msize*size);
                        }
                   
                         window.requestAnimationFrame(draw);
                }
                
         },
          canvas2(){//绘制多边形
                
         },
         canvas3(){//绘制圆
        var canvas = document.getElementById("myCanvas"+this.pageindex);
                if(canvas == null)
                return false;
                //获取上下文
                let x=0,y=0,size=1,mbool=true,arr=[];
                 let context = canvas.getContext('2d');
                    for(let i=0;i<7;i++){
                        let obj = this.randomNumber();
                        console.log(obj)
                        arr.push(obj)
                        context.fillStyle = "rgba(0,0,0,0)";
                        context.strokeStyle = obj.mcolor;
                        context.lineWidth = 5;
                        context.beginPath();
                        context.arc(obj.mx,obj.my,100*obj.msize,0,2*Math.PI);
                        context.stroke();
                    }
                    
                   window.requestAnimationFrame(draw);
                        
                function draw(){
                     let context = canvas.getContext('2d');
                            context.clearRect(0,0,10000,10000);
                        if(x>=300||size<=0){
                            return
                        }
                        if(x<10&&mbool){
                             x++;
                             y++;
                             size+=0.01;  
                        }else{
                            mbool=false
                            x--;
                            y--;
                            size-=0.01;
                        }
                       
                        for(let a=0;a<arr.length;a++){
                            context.fillStyle = "rgba(0,0,0,0)";
                            context.strokeStyle = arr[a].mcolor;
                            context.lineWidth = 5;
                            context.beginPath();
                            context.arc(arr[a].mx+x,arr[a].my+y,100*arr[a].msize*size,0,2*Math.PI);
                            context.stroke();
                        }
                   
                         window.requestAnimationFrame(draw);
                }
                

         }
    },
    mounted(){  
        this.canvasInit();
       
        // this.canvas1();
        // this.canvas2();
        // this.canvas3();
    },
}
</script>
<style>
#canvasdemo,#myCanvas,html,body,#app{
    height: 100%;
    width: 100%;
    margin: 0;
    padding:0;
    overflow: hidden;
}
#canvasdemo{
    position: relative;
    
}
#canvasdemo canvas{
    position: absolute;
}
</style>
