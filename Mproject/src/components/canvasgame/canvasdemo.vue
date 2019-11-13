<template>
    <div id="canvasdemo"  @click="canClick($event)">
        <!-- 背景音乐按钮 -->
        <button @click.stop="backMusicPlay()">背景音乐({{backMuserBool?'开':'关'}})</button>
        <!-- 五个图层 -->
        <canvas id="myCanvas0"></canvas>
        <canvas id="myCanvas1"></canvas>
        <canvas id="myCanvas2"></canvas>
        <canvas id="myCanvas3"></canvas>
        <canvas id="myCanvas4"></canvas>
        <!-- 音效 -->
        <div v-show="false">
            <!-- 点击音效  本来三十个 我只用了前二十个 只有二十个点击区域 -->
            <audio controls="controls" v-for="(v,i) in mp3List2" :id="'myadio'+i">
                <source :src="v" type="audio/mp3" />
                <source :src="v" type="audio/ogg" />
                Your browser does not support this audio format.
            </audio>  
            <!-- 背景音效  应该是有一个播放顺序，但是老夫真 排列不出来 -->
            <audio controls="controls" v-for="(v,i) in backmp32" :id="'myadiob'+i" >
                <source :src="v" type="audio/mp3" />
                <source :src="v" type="audio/ogg" />
                Your browser does not support this audio format.
            </audio>  
        </div>
    </div>
    
</template>
<script>
import mp3List from '@/assets/json/main.json'  //引入点击音效
import backmp3 from '@/assets/json/track.json' // 引入背景音效
export default {
    name:'canvasedemo',
    data(){
        return{
            canWidth:0,//canvas 宽度
            canHeight:0,//canvas 高度
            colorMap:['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5','#2196f3','#03a9f4','#00bcd4',
                      '#009688','#4caf50','#8bc34a','#cddc39','#ffeb3b','#ffc107','#ff9800','#ff5722',
                      '#795548','#9e9e9e','#9e9e9e','#fff' ],//颜色 列表 这里暂时是Chrome 几个推荐颜色 后期可以自己加
            pageindex:0,//图层
            clickNumber:0,//点击次数
            mp3List2:[],//点击音效列表
            backmp32:[],//音效二
            backMuserBool:false,//背景音乐开关
            backMuserTimer:null,//背景音乐定时器
        }
    },
     components: {
    
  },
    created(){
        // 处理映入的音效 json 文件 然后赋值给自己 的变量 通过 v-for 生成 audios标签 
         for(let key in mp3List){
             console.log(key)
             this.mp3List2.push(mp3List[key])
         }
         for(let key2 in backmp3){
             this.backmp32.push(backmp3[key2])
         }
           
    },
     methods: {
         backMusicPlay(){//播放背景音乐
            if(this.backMuserBool){// 开关开着的时候 点击关闭背景音乐
                this.backMuserBool=false;// 关闭背景音乐的 变量
                clearInterval(this.backMuserTimer);// 清除 背景音乐定时器
            }else{// 开关关闭的时候  点击打开背景音乐
                this.backMuserBool= true; // 打开背景音乐的 变量
                var index=0;
                var index2=0;
               this.backMuserTimer = setInterval(() => {// 启用定时器
                    if(index>=10){
                        index=-1
                    }
                    if(index2>=30){
                        index2=-1;
                    }
                    index++;
                    index2++;  
                    //基础音
                     document.getElementById('myadiob1').play();
                     document.getElementById('myadiob0').play();
                     // 低音
                    if(index2<10&&index2%2!=0){
                            document.getElementById('myadiob5').play();
                        }
                    if(index2%2==0&&index2<10){
                        document.getElementById('myadiob4').play();
                         document.getElementById('myadiob3').play();
                    }
                    //中音
                    if(index2<20&&index2>10&&index2%2!=0){
                            document.getElementById('myadiob7').play();
                        }
                    if(index2<20&&index2>10&&index2%2==0){
                        document.getElementById('myadiob6').play();
                        document.getElementById('myadiob3').play();
                       
                    }
                    // 高音
                    if(index2<30&&index2>20&&index2%2!=0){
                        document.getElementById('myadiob9').play();
                    }
                    if(index2<30&&index2>20&&index2%2==0){
                        document.getElementById('myadiob8').play();
                        document.getElementById('myadiob3').play();
                    }
                }, 130);
            }     
         },
         canClick(ev){//canvas 点击事件
            var x, y;
            // 获取点击区域的坐标
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
                if(this.clickNumber>=10){// 点击次数大于10 是清除一次 并 更换背景颜色
                    this.clickNumber=0;
                    this.canvasInit();//初始化
                    document.getElementById('canvasdemo').style.backgroundColor=this.randomNumber().mcolor;//修改div 的背景颜色
                }
                if(this.pageindex>4){//
                        this.pageindex = 0;
                }
                this.pageindex++;
                this.clickNumber++;
            switch(regionNum) {
                    case 1://点击区域1
                        this.canvas1();
                        document.getElementById('myadio0').play()
                        break;
                    case 2://点击区域2
                        console.log('点击第2区域')
                        document.getElementById('myadio1').play()
                        this.canvas2();
                        break;
                    case 3://点击区域3
                        console.log('点击第3区域')
                        document.getElementById('myadio2').play()
                        this.canvas3();
                        break;    
                    case 4://点击区域4
                     console.log('点击第4区域')
                     document.getElementById('myadio3').play()
                        this.canvas4();
                        break;
                    case 5://点击区域5
                     console.log('点击第5区域')
                     document.getElementById('myadio4').play()
                        this.canvas5();
                        break;
                    case 6://点击区域6
                    console.log('点击第6区域')
                    document.getElementById('myadio5').play()
                        this.canvas6();
                        break;
                    case 7://点击区域7
                    console.log('点击第7区域')
                    document.getElementById('myadio6').play()
                        this.canvas1();
                        break;
                    case 8://点击区域8
                    console.log('点击第8区域')
                        this.canvas1();
                        document.getElementById('myadio7').play()
                        break;
                    case 9://点击区域9
                        console.log('点击第9区域')
                        document.getElementById('myadio8').play()
                        this.canvas2();
                        break;
                    case 10://点击区域10
                        console.log('点击第10区域')
                        document.getElementById('myadio9').play()
                        this.canvas3();
                        break;    
                    case 11://点击区域11
                     console.log('点击第11区域')
                     document.getElementById('myadio10').play()
                        this.canvas4();
                        break;
                    case 12://点击区域12
                     console.log('点击第12区域')
                     document.getElementById('myadio11').play()
                        this.canvas5();
                        break;
                    case 13://点击区域13
                    console.log('点击第13区域')
                    document.getElementById('myadio12').play()
                        this.canvas6();
                        break;
                    case 14://点击区域14
                        this.canvas1();
                        document.getElementById('myadio13').play()
                        break;
                    case 15://点击区域15
                        console.log('点击第15区域')
                        document.getElementById('myadio14').play()
                        this.canvas2();
                        break;
                    case 16://点击区域16
                        console.log('点击第16区域')
                        document.getElementById('myadio15').play()
                        this.canvas3();
                        break;    
                    case 17://点击区域17
                     console.log('点击第17区域')
                     document.getElementById('myadio16').play()
                        this.canvas4();
                        break;
                    case 18://点击区域18
                     console.log('点击第18区域')
                     document.getElementById('myadio17').play()
                        this.canvas5();
                        break;
                    case 19://点击区域19
                    console.log('点击第19区域')
                    document.getElementById('myadio18').play()
                        this.canvas6();
                        break; 
                     case 20://点击区域20
                    console.log('点击第20区域')
                    document.getElementById('myadio19').play()
                        this.canvas6();
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
         canvas1(){//绘制正方形
                var that = this
                var canvas = document.getElementById("myCanvas"+this.pageindex);// 根据当前的 pageindex 选择图层
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
                   window.requestAnimationFrame(draw);// 按照帧数 重绘
                        
                function draw(){
                     let context = canvas.getContext('2d');
                         context.clearRect(0,0,10000,10000);// 清除画布
                            
                        if(x>=300||size<=0){// 太小 或者 x 过大 不再绘制
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
                    //    arr.length
                        for(let a=0;a<7;a++){
                             
                            context.fillStyle = "rgba(0,0,0,0)";
                            context.strokeStyle = arr[a].mcolor;
                            context.lineWidth = 3;
                            context.save(); // 配合 restore()  清除对 整体的影响
                            context.translate(arr[a].mx,arr[a].my);
                            context.rotate(size*30*Math.PI/180); // 旋转
                            context.fillRect(arr[a].mx,arr[a].my,300*arr[a].msize*size,300*arr[a].msize*size);              
                            context.strokeRect(arr[a].mx,arr[a].my,300*arr[a].msize*size,300*arr[a].msize*size);
                            context.restore();
                        }
                   
                         window.requestAnimationFrame(draw);
                }
                
         },
          canvas2(){//绘制四边形
                let arr = [],mathx=0,mcolor='',that=this,mbool1=false,mbool2=false;
                for(let i=0;i<4;i++){ // 生成四组坐标
                    let obj = this.randomNumber();
                    mcolor = obj.mcolor;
                    arr.push(obj.mx);
                    arr.push(obj.my);
                }
                
                let canvas = document.getElementById("myCanvas"+this.pageindex);
                 if(canvas == null)
                return false;
                var context = canvas.getContext("2d");
                context.fillStyle = "rgba(0,0,0,0)"; // 内部使用白色，如不指定，默认为黑色
                context.strokeStyle = mcolor; // 随机颜色
                
                context.lineWidth = 5; // 2个像素宽
                if(arr[2]>that.canWidth*0.7){
                        mbool1=true;
                }
                   if(arr[3]>that.canHeight*0.7){
                        mbool2=true;
                   }else{
                       arr[3]+=mathx;
                   }
                 window.requestAnimationFrame(polygon)
                function polygon() {
                     context.clearRect(0,0,10000,10000);
                     if(arr[2]>that.canWidth||arr[2]<0){
                         return
                     }
                     mathx+=0.5;
                    if(mbool1){
                         arr[2]-=mathx;
                    }else{
                         arr[2]+=mathx;
                    }
                   if(mbool2){
                       arr[3]-=mathx;
                   }else{
                       arr[3]+=mathx;
                   }
                   
                   
                   
                    let poly = arr;
                    context.beginPath();
                    context.moveTo(poly[0], poly[1]);

                    for (var i = 2; i < 8; i += 2) { // 循环连接坐标
                        context.lineTo(poly[i], poly[i + 1]);
                    }
                    context.closePath();
                    context.fill();
                    context.stroke();
                    window.requestAnimationFrame(polygon);
                }

    
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
                        
                        console.log(100*obj.msize)
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
                            if(100*arr[a].msize*size<0){
                                return
                            }
                            context.fillStyle = "rgba(0,0,0,0)";
                            context.strokeStyle = arr[a].mcolor;
                            context.lineWidth = 5;
                            context.beginPath();
                            context.arc(arr[a].mx+x,arr[a].my+y,100*arr[a].msize*size,0,2*Math.PI);
                            context.stroke();
                        }
                   
                         window.requestAnimationFrame(draw);
                }
                

         },
         canvas4(){//绘制五边形
                let arr = [],mathx=0,mcolor='',that=this,mbool1=false,mbool2=false;
                for(let i=0;i<5;i++){
                    let obj = this.randomNumber();
                    mcolor = obj.mcolor;
                    arr.push(obj.mx);
                    arr.push(obj.my);
                }
                
                let canvas = document.getElementById("myCanvas"+this.pageindex);
                 if(canvas == null)
                return false;
                var context = canvas.getContext("2d");
                context.fillStyle = "rgba(0,0,0,0)"; // 内部使用白色，如不指定，默认为黑色
                context.strokeStyle = mcolor; // 随机颜色
                
                context.lineWidth = 5; // 2个像素宽
                if(arr[4]>that.canWidth*0.7){
                        mbool1=true;
                }
                   if(arr[5]>that.canHeight*0.7){
                        mbool2=true;
                   }
                 window.requestAnimationFrame(polygon)
                function polygon() {
                     context.clearRect(0,0,10000,10000);
                     if(arr[4]>that.canWidth||arr[4]<0){
                         return
                     }
                     mathx+=1;
                    if(mbool1){
                         arr[4]-=mathx;
                    }else{
                         arr[4]+=mathx;
                    }
                   if(mbool2){
                       arr[5]-=mathx;
                   }else{
                       arr[5]+=mathx;
                   }
                   
                   
                   
                    let poly = arr;
                    context.beginPath();
                    context.moveTo(poly[0], poly[1]);

                    for (var i = 2; i < 10; i += 2) {
                        context.lineTo(poly[i], poly[i + 1]);
                    }
                    context.closePath();
                    context.fill();
                    context.stroke();
                    window.requestAnimationFrame(polygon);
                }

    
         },
         canvas5(){//绘制六边形
                let arr = [],mathx=0,mcolor='',that=this,mbool1=false,mbool2=false;
                for(let i=0;i<6;i++){
                    let obj = this.randomNumber();
                    mcolor = obj.mcolor;
                    arr.push(obj.mx);
                    arr.push(obj.my);
                }
                
                let canvas = document.getElementById("myCanvas"+this.pageindex);
                 if(canvas == null)
                return false;
                var context = canvas.getContext("2d");
                context.fillStyle = "rgba(0,0,0,0)"; // 内部使用白色，如不指定，默认为黑色
                context.strokeStyle = mcolor; // 随机颜色
                
                context.lineWidth = 5; // 2个像素宽
                if(arr[6]>that.canWidth*0.7){
                        mbool1=true;
                }
                   if(arr[7]>that.canHeight*0.7){
                        mbool2=true;
                   }
                 window.requestAnimationFrame(polygon)
                function polygon() {
                     context.clearRect(0,0,10000,10000);
                     if(arr[6]>that.canWidth||arr[6]<0){
                         return
                     }
                     mathx+=1;
                    if(mbool1){
                         arr[6]-=mathx;
                    }else{
                         arr[6]+=mathx;
                    }
                   if(mbool2){
                       arr[7]-=mathx;
                   }else{
                       arr[7]+=mathx;
                   }
                   
                   
                   
                    let poly = arr;
                    context.beginPath();
                    context.moveTo(poly[0], poly[1]);

                    for (var i = 2; i < 10; i += 2) {
                        context.lineTo(poly[i], poly[i + 1]);
                    }
                    context.closePath();
                    context.fill();
                    context.stroke();
                    window.requestAnimationFrame(polygon);
                }

    
         },
        canvas6(){//在画布中心绘制扇形
            function angleToRadian( angle ) {
                return Math.PI / 180 * angle;
            }
            let x = 0,y=0,that = this;let obj = this.randomNumber(),mbool=true;
            console.log(obj)
            var cvs = document.getElementById("myCanvas"+this.pageindex);
             if(cvs == null)
                return false;
            var ctx = cvs.getContext('2d');
            // ctx.lineWidth = 100; 
            ctx.strokeStyle = 'rgba(0,0,0,0)'; // 随机颜色
            window.requestAnimationFrame(draw);
            function draw(){
                y+=5;
                if(y>=720){
                    ctx.clearRect(0,0,10000,10000);
                    return
                }
                if(x>=360){
                    mbool=false
                }
                if(x<=0){
                    mbool=true;
                }
                ctx.clearRect(0,0,10000,10000);
                ctx.beginPath();
                ctx.moveTo( that.canWidth/2,that.canHeight/2 );
                ctx.fillStyle=obj.mcolor;
                    if(mbool){
                        x+=5;
                    }else{
                        x-=5;
                    }
                    ctx.arc(that.canWidth/2,that.canHeight/2,300*obj.msize, angleToRadian( 0 ), angleToRadian( x ) );
                    ctx.fill();
                    ctx.closePath();
                    ctx.stroke();
                
                window.requestAnimationFrame(draw);
            }
            

        },
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
    top:0;
    left: 0;
}
#canvasdemo button{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
}
#canvasdemo{
    background: #00bcd4;
}
</style>
