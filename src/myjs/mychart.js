
function Industry(data){
  this.width = 1000;
  this.height = 265;
  this.containerHeight = 250
  this.min = Math.min.apply(null,data);
  this.max = Math.max.apply(null,data);
  this.ratio = this.containerHeight/(this.max-this.min)
  this.draw = function() {
    var x_gap = this.width / data.length;
    var canvas = (document.getElementById('industry_id'));
    var ctx = canvas.getContext("2d");
    //重绘整个画布
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.strokeStyle = ctx.fillStyle = 'blue'
    var y_first = this.containerHeight-this.ratio*(data[0]-this.min)
    ctx.beginPath();
    ctx.moveTo(0, y_first);
    for (let i = 1; i < data.length; i++) {
      var K_index = i + 1;
      //第n个蜡烛矩形的左x坐标 = (n-1)*x_gap+0.1*x_gap
      var x_index = (K_index - 1) * x_gap + 0.5 * x_gap;
      var y_true = this.containerHeight-this.ratio*(data[i]-this.min)
      ctx.lineTo(x_index, y_true);
    }
    ctx.stroke(); //描边。stroke不会自动closePath()
    

    //绘制y轴
    //绘制K线y坐标轴 均分成6份


    var y_ratio = (this.max - this.min) / 6

    for (let j = 1; j < 7; j++) {

      //真实坐标
      let y_true = this.min + j * y_ratio;
      //变换坐标
      let y = this.containerHeight-this.ratio*(y_true-this.min)
      //画格子横线 很浅的灰色
      ctx.strokeStyle = ctx.fillStyle = '#DCDCDC';
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
      //坐标值
      ctx.strokeStyle = ctx.fillStyle = 'gray';
      if(j==6)
         {
          ctx.fillText(y_true.toFixed(2), 0, y +10 );//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)
         }     
      else{
        ctx.fillText(y_true.toFixed(2), 0, y +5 );//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)

      }
     

    }
  }

  

}

Industry.getIndustrychart = function (data) {
  var jskchart = new Industry(data)
  jskchart.draw()
  
}
function MinuteChart(daycount,data,vol,lastClose){
  
  this.daycount = daycount;
  //
  this.lastClose = lastClose;
  this.close = data;
  this.vol = vol;
  //整个cavas的宽和高
  this.width = 1000;
  this.height = 515;

  //分钟线容器的高
  this.container_minute_height = 400;
  //成交量容器的高
  this.container_vol_height = 100; 
  
  //坐标值的长宽
  this.coordinate={
    width:50,
    height:14,
  }
  this.containerInfo={
    container_minute_min:this.lastClose*(0.97),
    container_minute_max:this.lastClose*(1.03),
    container_minute_ratio:0,
    container_vol_min:0,
    container_vol_max:0,
    container_vol_ratio:0,
  }
  this.Init = function(){
    var canvas = document.getElementById('id2');

     //取消绑定事件
    
     canvas.onmousewheel=function(){};
     
    if(!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
     //重绘整个画布
     ctx.clearRect(0, 0,this.width, this.height); 
     canvas =  document.getElementById('id');
     if(!canvas.getContext) return;
     var ctx = canvas.getContext("2d");
    //重绘整个画布
    ctx.clearRect(0, 0,this.width, this.height); 

   
    //以前一日收盘价为中间轴
    
            //求数值范围
         //默认前一日收盘价上下3%，检测若大于3%则更新坐标轴       
    if(this.close[this.close.length-1]>this.lastClose*1.03){
        this.containerInfo.container_minute_max = this.close[this.close.length-1];
    }
    if(this.close[this.close.length-1]<this.lastClose*0.97){
      this.containerInfo.container_minute_min = this.close[this.close.length-1];
    }
    //成交量
    this.containerInfo.container_vol_min = Math.min.apply(null,this.vol);
    this.containerInfo.container_vol_max = this.vol.reduce((x, y) => x > y ? x : y);
      //上下留点空隙
      this.containerInfo.container_minute_min -=( this.containerInfo.container_minute_max- this.containerInfo.container_minute_min)*0.1;
      this.containerInfo.container_minute_max  +=( this.containerInfo.container_minute_max- this.containerInfo.container_minute_min)*0.1 ;
    this.containerInfo.container_vol_min -=(this.containerInfo.container_vol_max-this.containerInfo.container_vol_min)*0.1;
    if(this.containerInfo.container_vol_min<0)  {this.containerInfo.container_vol_min = 0}
    this.containerInfo.container_vol_max+=(this.containerInfo.container_vol_max-this.containerInfo.container_vol_min)*0.1 ;
    //按比例缩放
    this.containerInfo.container_minute_ratio = this.container_minute_height/(this.containerInfo.container_minute_max-this.containerInfo.container_minute_min)
    this.containerInfo.container_vol_ratio = this.container_vol_height/(this.containerInfo.container_vol_max-this.containerInfo.container_vol_min)

    //绘制y轴
         //绘制K线y坐标轴 均分成8份

         //画出中间线
        
         ctx.strokeStyle = ctx.fillStyle = '#DCDCDC';
         ctx.beginPath();
         ctx.moveTo(0,this.transCoord('minute',this.lastClose));
         ctx.lineTo(this.width,this.transCoord('minute',this.lastClose));
         ctx.stroke(); 
        
        var y_ratio = (this.containerInfo.container_minute_max - this.lastClose)/4
         //往上画4个横线
        for(let j=1;j<5;j++){
         
          //真实坐标
           let y_true =this.lastClose+j*y_ratio;
           //变换坐标
           let y= this.transCoord('minute',y_true);
           //画格子横线 很浅的灰色
           ctx.strokeStyle = ctx.fillStyle = '#DCDCDC';
          ctx.beginPath();
          ctx.moveTo(0,y);
          ctx.lineTo(this.width,y);
          ctx.stroke(); 
        }
         //往下画4个
        y_ratio = (this.lastClose-this.containerInfo.container_minute_min)/4
         for(let j=1;j<5;j++){
         
          //真实坐标
           let y_true =this.lastClose-j*y_ratio;
           //变换坐标
           let y= this.transCoord('minute',y_true);
           //画格子横线 很浅的灰色
           ctx.strokeStyle = ctx.fillStyle = '#DCDCDC';
          ctx.beginPath();
          ctx.moveTo(0,y);
          ctx.lineTo(this.width,y);
          ctx.stroke(); 
        
        }




        //绘制成交量y坐标
        ctx.strokeStyle = ctx.fillStyle = 'black';

        var vol_y_ratio = (this.containerInfo.container_vol_max - this.containerInfo.container_vol_min)/3
       
       for(let j=1;j<3;j++){
         //真实坐标
          let y_true =this.containerInfo.container_vol_min+j*vol_y_ratio;
          //变换坐标
          let y= this.transCoord('vol',y_true);
         ctx.fillText(this.numToCUnit(y_true),0,y+this.coordinate.height/2);//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)

       }
       //绘制x轴坐标  平均分成八份
       var x_ratio  = this.width/8
       var timedata = ['09:30','10:00',"10:30","11:00",'11:30/13:00','13:30','14:00','14:30','15:00'];
       ctx.fillText('09:30',0,this.height);//09:30
       for(let j=1;j<8;j++){
         
        if(j==4){
          ctx.fillText(timedata[j],j*x_ratio-this.coordinate.width/2,this.height);//09:30
        }
        else{
          ctx.fillText(timedata[j],j*x_ratio-this.coordinate.width/4,this.height);//09:30
        }
        
       }
       ctx.fillText(timedata[8],this.width-this.coordinate.width/2,this.height);//15:00


      
       this.drawMinute();
       this.drawdotted();
    }



    this.drawMinute = function(){
      var canvas = (document.getElementById('id'));
      if(!canvas.getContext) return;
        var ctx = canvas.getContext("2d");
        //设置x轴间隔
      var x_gap = (this.width/8)/30;
      //画close分时图
      ctx.strokeStyle = ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.moveTo(0.5*x_gap,this.transCoord('minute',this.close[0]));
      for(let i=1;i<this.close.length;i++){
        ctx.lineTo(i*x_gap+0.5*x_gap,this.transCoord('minute',this.close[i]))
      }
      ctx.stroke();
      
      //画水波纹阴影，围成封闭图形
      ctx.strokeStyle = ctx.fillStyle = 'rgba(248,250,255,0.7)';
      ctx.beginPath();
      ctx.moveTo(0,this.transCoord('minute',this.close[0]));
      for(let i=1;i<this.close.length;i++){
        ctx.lineTo(i*x_gap+0.5*x_gap,this.transCoord('minute',this.close[i]))
      }
      ctx.lineTo((this.close.length-0.5)*x_gap,this.container_minute_height);
      ctx.lineTo(0,this.container_minute_height);
      ctx.closePath();
      ctx.fill();

      //画中间线
      ctx.strokeStyle = ctx.fillStyle = 'black';
      ctx.fillText(this.lastClose.toFixed(2),0,this.transCoord('minute',this.lastClose)+this.coordinate.height/4);//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)
      ctx.fillText('0.00%',this.width-this.coordinate.width/1.7,this.transCoord('minute',this.lastClose)+this.coordinate.height/4);

      var y_ratio = (this.containerInfo.container_minute_max - this.lastClose)/4
         //往上写4个
        for(let j=1;j<5;j++){
         
          //真实坐标
           let y_true =this.lastClose+j*y_ratio;
           //变换坐标
           let y= this.transCoord('minute',y_true);
           //坐标值
           ctx.strokeStyle = ctx.fillStyle = 'red';
          ctx.fillText(y_true.toFixed(2),0,y+this.coordinate.height/4);//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)
            //右侧写百分比
            var r = (y_true-this.lastClose)/this.lastClose
            ctx.fillText(this.numToCUnit(r),this.width-this.coordinate.width/1.7,y+this.coordinate.height/4);
        }
         //往下写4个
        y_ratio = (this.lastClose-this.containerInfo.container_minute_min)/4
         for(let j=1;j<5;j++){
         
          //真实坐标
           let y_true =this.lastClose-j*y_ratio;
           //变换坐标
           let y= this.transCoord('minute',y_true);
           //坐标值
           ctx.strokeStyle = ctx.fillStyle = 'green';
          ctx.fillText(y_true.toFixed(2),0,y+this.coordinate.height/4);//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)
          var r = -(y_true-this.lastClose)/this.lastClose
          ctx.fillText("-"+this.numToCUnit(r),this.width-this.coordinate.width/1.5,y+this.coordinate.height/4);
        }




      //循环画成交量
      ctx.strokeStyle = ctx.fillStyle = 'green';
     
      for(let i =0;i<this.vol.length;i++){
       
        ctx.beginPath();
        if(i>=1){
          ctx.strokeStyle = ctx.fillStyle = this.close[i]>=this.close[i-1]?'red':'green';
        }
        
        ctx.moveTo(i*x_gap+0.5*x_gap,this.container_vol_height+this.container_minute_height);   
        ctx.lineTo(i*x_gap+0.5*x_gap,this.transCoord('vol',this.vol[i]))
        ctx.stroke();
      }

       //xy坐标改变，收盘价提示
       ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
       ctx.fillRect(0,0,this.width,20);
       ctx.strokeStyle = ctx.fillStyle = 'black';
       ctx.fillText("均线：" , 0, 10);
         //xy变化，成交量变化提示
         ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
         ctx.fillRect(0,this.container_minute_height-this.coordinate.height,this.width,20);
         ctx.strokeStyle = ctx.fillStyle = 'black';
         ctx.fillText("成交量："+123,0, this.container_minute_height);
      
        
    }

this.drawdotted = function(){
  var canvas = document.getElementById('id2');
  var ctx = canvas.getContext("2d");
 // ctx.font = "10px Arial";
  canvas.style.cursor='pointer'; 
 // canvas.onmousewheel=scrollFunc;  //滚动事件
  canvas.addEventListener("mousemove", e=> { 
      //重绘鼠标移动的整个画布
           
      var cRect = canvas.getBoundingClientRect();              
      var canvasX = Math.round(e.clientX - cRect.left);        
      var canvasY = Math.round(e.clientY - cRect.top);  
     
         //设置x轴间隔
              
         var x_gap = (this.width/8)/30;
         var n = parseInt(canvasX/x_gap);
         var x_index = n*x_gap+0.5*x_gap;
        
         var vol = this.vol[n];
        
        // 真实值y = （height-坐标值y）/ratio +min
         //还原到真实值
      //   ma = ((this.container_k_height-ma)/this.containerInfo.container_k_ratio+this.containerInfo.container_k_min).toFixed(2)
     //    vol = ((this.container_k_height-ma)/this.containerInfo.container_k_ratio+this.containerInfo.container_k_min).toFixed(2)
         
            //每次都清除 重绘
       
         //重绘鼠标移动的整个画布
         ctx.clearRect(0, 0, cRect.width, cRect.height);  
         
       

         ctx.strokeStyle = ctx.fillStyle = 'gray';
         //画竖线 从上到下(应该往左一点 保证中间)
         //设置虚线
         ctx.setLineDash([2, 3]);  // [实线长度, 间隙长度]
         ctx.lineDashOffset = 0;
         ctx.beginPath();
         ctx.moveTo(x_index,0);
        ctx.lineTo(x_index-1,this.container_minute_height+this.container_vol_height);
         ctx.stroke(); //描边。stroke不会自动closePath()
         //画横线 从左到右
         //判断是否超出范围
         if(canvasY<this.container_vol_height+this.container_minute_height){
          ctx.beginPath();
          ctx.moveTo(0,canvasY);
         ctx.lineTo(cRect.width,canvasY);
          ctx.stroke(); //描边。stroke不会自动closePath()
         }
        

         //在两边坐标系上显示数值
         //先画个矩形 宽50 高14
         //超出范围不显示
         if(canvasY<this.container_minute_height+this.container_vol_height){
          ctx.fillRect(0,canvasY-this.coordinate.height/2,this.coordinate.width,this.coordinate.height);//y
        }
        
         ctx.fillRect(canvasX-this.coordinate.width/2,cRect.height-this.coordinate.height,this.coordinate.width,this.coordinate.height);//x
         
         
         //填上坐标值(根据canvasY反推真实值)
         ctx.strokeStyle = ctx.fillStyle = 'white';
         
         var y_true = ((this.container_minute_height-canvasY)/this.containerInfo.container_minute_ratio+this.containerInfo.container_minute_min).toFixed(2);
         var vol_y_true = ((this.container_minute_height+this.container_vol_height-canvasY)/this.containerInfo.container_vol_ratio+this.containerInfo.container_vol_min).toFixed(2);
        // var stindex_true =  ((this.container_stIndex_height+this.container_k_height+this.container_vol_height-canvasY)/this.containerInfo.container_index_ratio+this.containerInfo.container_index_min).toFixed(2);
         

         //Y坐标（判断是K还是vol还是指标）
         if(canvasY<this.container_minute_height){
           ctx.fillText(y_true, 0,canvasY+3);//y 坐标值y = height -（真实y-min）*ratio； 真实值y = （height-坐标值y）/ratio +min

         }
         //成交量 y
         else {
           //超出范围不显示
           if(canvasY<this.container_minute_height+this.container_vol_height){
            ctx.fillText(this.numToCUnit(vol_y_true), 0,canvasY+3);//y 坐标值y = height -（真实y-min）*ratio； 真实值y = （height-坐标值y）/ratio +min
           }
          
         }
        
         //X坐标
        // ctx.fillText(this.time[n], canvasX-this.coordinate.width/2,cRect.height-1);

     
         //xy变化，成交量变化提示
         ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
         ctx.fillRect(0,this.container_minute_height-this.coordinate.height,this.width,20);
         ctx.strokeStyle = ctx.fillStyle = 'black';
         ctx.fillText("成交量："+this.numToCUnit(vol),0, this.container_minute_height);
        
         

            //x,y坐标改变 均线提示
           //改变背景色 
           ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
           ctx.fillRect(0,0,this.width,20);
           ctx.strokeStyle = ctx.fillStyle = 'black';
           ctx.fillText("数值："+this.close[n] , 0, 10);


         //tooltip
         if(canvasX>this.width*2/3){
           //出现在左上角
           //画灰色边框
           ctx.setLineDash([20, 0]);  // [实线长度, 间隙长度]
          ctx.lineDashOffset = -0;

           ctx.strokeStyle = ctx.fillStyle = 'gray';
           ctx.strokeRect(50,20,120,160)
           //填充半透明
           ctx.strokeStyle = ctx.fillStyle = 'rgba(255,255,255,0.7)';
         ctx.fillRect(50,20,120,160);
         ctx.strokeStyle = ctx.fillStyle = 'black';
         ctx.fillText('时间：'+this.close[n],50,40);
         ctx.fillText('最新：'+this.close[n],50,60);
         ctx.fillText('均价：'+this.close[n],50,80);
       
         if(n>=1){
           ctx.strokeStyle = ctx.fillStyle = this.close[n]>this.close[n-1]?'red':'green'; 
          
           ctx.fillText('涨跌额：'+(this.close[n]-this.close[n-1]).toFixed(2),50,100);
           ctx.fillText('涨跌幅：'+this.numToCUnit((this.close[n]-this.close[n-1])/this.close[n-1]),50,120);
         }
         else{
         
           ctx.fillText('涨跌额：'+this.close[n],50,100);
           ctx.fillText('涨跌幅：'+this.close[n],50,120);
         }
        
         ctx.strokeStyle = ctx.fillStyle = 'black';
         ctx.fillText('成交量：'+this.numToCUnit(this.vol[n]),50,140);
        

         }
         else{
            //出现在右上角
              //画灰色边框
           ctx.setLineDash([20, 0]);  // [实线长度, 间隙长度]
          ctx.lineDashOffset = -0;

           ctx.strokeStyle = ctx.fillStyle = 'gray';
           ctx.strokeRect(this.width-152,20,120,160)
           //半透明
            ctx.strokeStyle = ctx.fillStyle = 'rgba(255,255,255,0.7)';
         ctx.fillRect(this.width-152,20,120,160);
         ctx.strokeStyle = ctx.fillStyle = 'black';
         ctx.save()
         ctx.fillText('时间：'+this.close[n],this.width-150,40);
         ctx.fillText('最新：'+this.close[n],this.width-150,60);
         ctx.fillText('均价：'+this.close[n],this.width-150,80);
         if(n>=1){
           ctx.strokeStyle = ctx.fillStyle = this.close[n]>this.close[n-1]?'red':'green'; 
           ctx.fillText('涨跌额：'+(this.close[n]-this.close[n-1]).toFixed(2),this.width-150,100);
           ctx.fillText('涨跌幅：'+this.numToCUnit((this.close[n]-this.close[n-1])/this.close[n-1]),this.width-150,120);
         }
         else{
         
           ctx.fillText('涨跌额：'+this.close[n],this.width-150,100);
           ctx.fillText('涨跌幅：'+this.close[n],this.width-150,120);
         }
         ctx.restore()
         ctx.fillText('成交量：'+this.numToCUnit(this.vol[n]),this.width-150,140);
      

         }

    
    })     
}  
this.transCoord=function(index,coord){
      //坐标变换
          switch(index){
            case 'minute':
            return this.container_minute_height-(coord-this.containerInfo.container_minute_min)*this.containerInfo.container_minute_ratio;
            break;
            case 'vol':
            return this.container_minute_height+this.container_vol_height-(coord-this.containerInfo.container_vol_min)*this.containerInfo.container_vol_ratio;
            break;
           

            }

        }//坐标变换
        this.numToCUnit=function(num) {
          if(num==0){
            return 0;
          }
          if(num<1){
            return Number(num*100).toFixed(2) + '%';
          }
          else if (1<num && num < 10000000) {
              return Number(num / 10000).toFixed(2) + '万';
          } else {
              return Number(num / 100000000).toFixed(2) + '亿';
          }
        
      
      }

  

}

function KCharts(Kindex,data,index,indexData,IsBool,MA){
   //BoolIndex 判断画均线还是布林线
    this.Kindex = Kindex, //0是日K，1：周K，2：月K，3：季K，4：年k....
    //获取数据  开收低高
    this.time = data[0],
    this.open = data[1],
    this.close = data[2],
    this.low = data[3],
    this.high = data[4],
    this.vol = data[5],
    this.color = ['#DAA520','#1E90FF','#FF00FF','#FF7F50','#9400D3','black','#00FF7F',] //黄 蓝 杨红 橙 紫色 黑 绿
  //整个cavas的宽和高
    this.width = 930;
    this.height = 515;
    //K线容器的高
    this.container_k_height = 300;
    //成交量容器的高
    this.container_vol_height = 100; 
    //股票指标的高
    this.container_stIndex_height = 100; 
    //坐标值的长宽
    this.coordinate={
      width:50,
      height:20,
    }
    //存储ma结果
    this.MAresult=[]
    
    //容器信息 即最大值最小值，变化比率
    this.containerInfo={
      container_k_min:0,
      container_k_max:0,
      container_k_ratio:0,
      container_vol_min:0,
      container_vol_max:0,
      container_vol_ratio:0,
      container_index_min:0,
      container_index_max:0,
      container_index_ratio:0,
    }
    //指标信息
    this.MACDInfo ={
        dif:[],
        DEA:[],
        MACD:[],   
    }
    this.KDJInfo = {
      K:[],
      D:[],
      J:[],
    }
  
  
    //初始化 获取一些必要计算数据
    this.Init = function(){
     
      var canvas = document.getElementById('id2');
     
    if(!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
     //重绘整个画布
     ctx.clearRect(0, 0,this.width, this.height); 
     
      var canvas = (document.getElementById('id'));
      if(!canvas.getContext) return;
        var ctx = canvas.getContext("2d");
       //重绘整个画布
       ctx.clearRect(0, 0,this.width, this.height);  
        
          //求数值范围
          this.containerInfo.container_k_min = this.low.reduce((x, y) => x > y ? y : x);
          this.containerInfo.container_k_max = this.high.reduce((x, y) => x > y ? x : y);
  
        this.containerInfo.container_vol_min = this.vol.reduce((x, y) => x > y ? y : x);
        this.containerInfo.container_vol_max = this.vol.reduce((x, y) => x > y ? x : y);
        //上下留点空隙
     //   this.containerInfo.container_k_min -=( this.containerInfo.container_k_max- this.containerInfo.container_k_min)*0.1;
    //    this.containerInfo.container_k_max  +=( this.containerInfo.container_k_max- this.containerInfo.container_k_min)*0.1 ;
  
        this.containerInfo.container_vol_min -=(this.containerInfo.container_vol_max-this.containerInfo.container_vol_min)*0.1;
        this.containerInfo.container_vol_max+=(this.containerInfo.container_vol_max-this.containerInfo.container_vol_min)*0.1 ;
        //真实数据缩到坐标数值比例
        this.containerInfo.container_k_ratio = (this.container_k_height-2*this.coordinate.height)/(this.containerInfo.container_k_max-this.containerInfo.container_k_min)
  
        this.containerInfo.container_vol_ratio = this.container_vol_height/(this.containerInfo.container_vol_max-this.containerInfo.container_vol_min)
        
     
     
  
  
              //x,y坐标改变 均线提示
                //改变背景色       
                ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
              ctx.fillRect(0,0,this.width,this.coordinate.height);
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.fillText("均线：" , 0, 10);
              ctx.strokeStyle = ctx.fillStyle = '#DAA520';//黄色
              ctx.fillText("MA5:"+ 1233.33, 30, 10);
              ctx.strokeStyle = ctx.fillStyle = '#1E90FF';//蓝色
              ctx.fillText("MA10：" , 100, 10);
              ctx.strokeStyle = ctx.fillStyle = '#FF00FF';//杨红
              ctx.fillText("MA20：" , 170, 10);
           //   ctx.strokeStyle = ctx.fillStyle = '#FF7F50';//橙色
           //   ctx.fillText("MA30：" , 240, 10);
           //   ctx.strokeStyle = ctx.fillStyle = '#9400D3';//紫色
           //   ctx.fillText("MA60：" , 310, 10);
  
      
          //xy变化，成交量变化提示
          ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
              ctx.fillRect(0,this.container_k_height-this.coordinate.height,this.width,this.coordinate.height);
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.fillText("成交量："+123, 0, this.container_k_height);
          
              //xy变化，macd变化提示
              ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
              ctx.fillRect(0,this.container_k_height+this.container_vol_height,this.width,this.coordinate.height);
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.fillText("MACD(12,26,9):",0, this.container_k_height+this.container_vol_height+this.coordinate.height);
            
  
          
        this.draw()//画基础，K线，均线，成交量
        this.drawdotted()  //鼠标移动画坐标
        
        switch(index){
          case 'MACD':
          this.drawMACD()
          break;
          case 'KDJ':
          this.drawKDJ()
          break;
          case 'RSI':
          this.drawRSI()
          break;
        }
        
    } 
   
    
    
    this.draw = function(){
      var canvas =(document.getElementById('id'));
        if(!canvas.getContext) return;
          var ctx = canvas.getContext("2d");
          //设置x轴间隔
    var x_gap = this.width/this.open.length;
  
   //设置k线图j矩形宽度为间隔的百分之八十
    var K_width =x_gap*0.8;
  
        //循环画图
        for(let i=0;i<this.open.length;i++){
          //画第i+1个；
          var K_index = i+1;
           //第n个蜡烛矩形的左x坐标 = (n-1)*x_gap+0.1*x_gap
           var x_index_rect= (K_index-1)*x_gap+0.1*x_gap;
          //第n个蜡烛矩形的左y坐标
               
            var y_index_rect= this.open[i] >= this.close[i]  ?   this.transCoord('k',this.close[i]):this.transCoord('k',this.open[i]) ;
            var y_up_index_rect= this.open[i] >= this.close[i] ?  this.transCoord('k',this.open[i]):this.transCoord('k',this.close[i]) ;
        
             //K 矩形的高(若开盘收盘差别小于1，则为十字星)
                     
          var K_height = y_index_rect - y_up_index_rect>=1 ? y_index_rect - y_up_index_rect:1;
          
            //k 竖线的下面点的x坐标
            var x_index_line =  (K_index-1)*x_gap+0.5*x_gap;
         
         //k 竖线的下面点的y坐标
         var y_index_line = this.transCoord('k',this.low[i])
       
         //k竖线上面点的y
         var K_line_yup = this.transCoord('k',this.high[i])
       
         //颜色
         var color =this.open[i] >= this.close[i] ? '#1abc9c' : '#DA5961';
         ctx.strokeStyle = ctx.fillStyle = color;
  
           //画矩形
           ctx.fillRect(x_index_rect,y_up_index_rect,K_width,K_height);
         
          //画竖线
          ctx.beginPath();
          ctx.moveTo(x_index_line,K_line_yup);
          ctx.lineTo(x_index_line,y_index_line);
          ctx.stroke(); //描边。stroke不会自动closePath()
  
           //画成交量
           var vol= this.transCoord('vol',this.vol[i]);
          ctx.fillRect(x_index_rect,vol,K_width,(this.vol[i]-this.containerInfo.container_vol_min)*this.containerInfo.container_vol_ratio);
  
            //绘制x坐标轴 每四个显示一个
            var x = parseInt(this.open.length / 9);
            ctx.strokeStyle = ctx.fillStyle = 'gray';
            if(K_index%x == 0){
              
              ctx.fillText(this.time[i-1],x_index_rect-this.coordinate.width/2,this.height);//10是y轴坐标的大小
                }   
      
        }//for
        //绘制y轴
           //绘制K线y坐标轴 均分成6份
         
           
           var y_ratio = (this.containerInfo.container_k_max - this.containerInfo.container_k_min)/6
         
           for(let j=1;j<7;j++){
            
             //真实坐标
              let y_true =this.containerInfo.container_k_min+j*y_ratio;
              //变换坐标
              let y= this.transCoord('k',y_true);
              //画格子横线 很浅的灰色
              ctx.strokeStyle = ctx.fillStyle = '#DCDCDC';
             ctx.beginPath();
             ctx.moveTo(0,y);
             ctx.lineTo(this.width,y);
             ctx.stroke(); 
              //坐标值
              ctx.strokeStyle = ctx.fillStyle = 'gray';
             ctx.fillText(y_true.toFixed(2),0,y+this.coordinate.height/4);//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)
             
  
           }
           //绘制成交量y坐标
   
           var vol_y_ratio = (this.containerInfo.container_vol_max - this.containerInfo.container_vol_min)/3
          
          for(let j=1;j<3;j++){
            //真实坐标
             let y_true =this.containerInfo.container_vol_min+j*vol_y_ratio;
             //变换坐标
             let y= this.transCoord('vol',y_true);
            ctx.fillText(this.numToCUnit(y_true),0,y+this.coordinate.height/2);//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)
   
          }

       
        var arr=MA
        for(let i=0;i<MA.length;i++){
          let ma= calculateMA(DATA[2],arr[i])
          ma=ma.slice(parseInt(ma.length*(0.6+zoom)));
          this.MAresult.push(ma);
          this.drawployline('k',ma,this.color[i])
         }
      
    }//draw
  


    //画均线
    this.drawMA = function(arr){
      
      
     /*  this.MA5 = calculateMA(DATA[2],5);
      this.MA5 = this.MA5.slice(parseInt(this.MA5.length*(0.6+zoom)));
      this.MA10 =calculateMA(DATA[2],10);
      this.MA10 = this.MA10.slice(parseInt(this.MA10.length*(0.6+zoom)));
      this.MA20 =calculateMA(DATA[2],20);
      this.MA20 = this.MA20.slice(parseInt(this.MA20.length*(0.6+zoom)));
      this.MA30 =calculateMA(DATA[2],30);
      this.MA30 = this.MA30.slice(parseInt(this.MA30.length*(0.6+zoom)));
      this.MA60 =calculateMA(DATA[2],60);
      this.MA60 = this.MA60.slice(parseInt(this.MA60.length*(0.6+zoom))); 
       //MA
       this.drawployline('k',this.MA5,'#DAA520')
       this.drawployline('k',this.MA10,'#1E90FF')
       this.drawployline('k',this.MA20,'#FF00FF') */
    }
    
    this.drawdotted = function(){
  
      var canvas = (document.getElementById('id2'));
          var ctx = canvas.getContext("2d");
         // ctx.font = "10px Arial";
          canvas.style.cursor='pointer'; 
          canvas.onmousewheel=scrollFunc;  //滚动事件
          canvas.addEventListener("mousemove", e=> { 
              
              var cRect = canvas.getBoundingClientRect();              
              var canvasX = Math.round(e.clientX - cRect.left);        
              var canvasY = Math.round(e.clientY - cRect.top);         
                    
                 //设置x轴间隔
              
                 var x_gap = this.width/this.open.length;
              var n = parseInt(canvasX/x_gap);
              var x_index = n*x_gap+0.5*x_gap;
              var maresult=[];
              for(let i=0;i<this.MAresult.length;i++){
                if(this.MAresult[i][n]!='-'){
                  var ma = this.MAresult[i][n].toFixed(2);
                  maresult.push(ma)
                }
              }
             /*  if(this.MA5[n]!='-'){
                var ma = this.MA5[n].toFixed(2);
              }
              if(this.MA10[n]!='-'){
                var ma10 = this.MA10[n].toFixed(2);
              }
              if(this.MA20[n]!='-'){
                var ma20 = this.MA20[n].toFixed(2);
              } */
             // var ma30 = this.MA30[n].toFixed(2);
             // var ma60 = this.MA60[n].toFixed(2);
              var vol = this.vol[n];
              if (index == 'MACD'){
                var dif = this.MACDInfo.dif[n].toFixed(2);
                var DEA = this.MACDInfo.DEA[n].toFixed(2);
                var MACD = this.MACDInfo.MACD[n].toFixed(2);
              }
             
             // 真实值y = （height-坐标值y）/ratio +min
              //还原到真实值
           //   ma = ((this.container_k_height-ma)/this.containerInfo.container_k_ratio+this.containerInfo.container_k_min).toFixed(2)
          //    vol = ((this.container_k_height-ma)/this.containerInfo.container_k_ratio+this.containerInfo.container_k_min).toFixed(2)
              
                 //每次都清除 重绘
            
              //重绘鼠标移动的整个画布
              ctx.clearRect(0, 0, cRect.width, cRect.height);  
              
            
  
              ctx.strokeStyle = ctx.fillStyle = 'gray';
              //画竖线 从上到下(应该往左一点 保证中间)
              //设置虚线
              ctx.setLineDash([2, 3]);  // [实线长度, 间隙长度]
              ctx.lineDashOffset = 0;
              ctx.beginPath();
              ctx.moveTo(x_index,0);
             ctx.lineTo(x_index-1,this.height);
              ctx.stroke(); //描边。stroke不会自动closePath()
              //画横线 从左到右
              ctx.beginPath();
              ctx.moveTo(0,canvasY);
             ctx.lineTo(cRect.width,canvasY);
              ctx.stroke(); //描边。stroke不会自动closePath()
  
              //在两边坐标系上显示数值
              //先画个矩形 宽50 高14
             
              ctx.fillRect(0,canvasY-this.coordinate.height/2,this.coordinate.width,this.coordinate.height);//y
              ctx.fillRect(canvasX-this.coordinate.width/2,cRect.height-this.coordinate.height,this.coordinate.width,this.coordinate.height);//x
              
              
              //填上坐标值(根据canvasY反推真实值)
              ctx.strokeStyle = ctx.fillStyle = 'white';
              
              var y_true = ((this.container_k_height-canvasY)/this.containerInfo.container_k_ratio+this.containerInfo.container_k_min).toFixed(2);
              var vol_y_true = ((this.container_k_height+this.container_vol_height-canvasY)/this.containerInfo.container_vol_ratio+this.containerInfo.container_vol_min).toFixed(2);
              var stindex_true =  ((this.container_stIndex_height+this.container_k_height+this.container_vol_height-canvasY)/this.containerInfo.container_index_ratio+this.containerInfo.container_index_min).toFixed(2);
              
  
              //Y坐标（判断是K还是vol还是指标）
              if(canvasY<this.container_k_height){
                ctx.fillText(y_true, 0,canvasY+3);//y 坐标值y = height -（真实y-min）*ratio； 真实值y = （height-坐标值y）/ratio +min
  
              }
              //成交量 y
              else if(canvasY<this.container_k_height+this.container_vol_height){
                ctx.fillText(this.numToCUnit(vol_y_true), 0,canvasY+3);//y 坐标值y = height -（真实y-min）*ratio； 真实值y = （height-坐标值y）/ratio +min
  
              }
              else{
                ctx.fillText(stindex_true, 0,canvasY+3);//y 坐标值y = height -（真实y-min）*ratio； 真实值y = （height-坐标值y）/ratio +min
              }
              //X坐标
              ctx.fillText(this.time[n], canvasX-this.coordinate.width/2,cRect.height-1);
  
  
              //xy变化，成交量变化提示
              ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
              ctx.fillRect(0,this.container_k_height-15,cRect.width,20);
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.fillText("成交量："+this.numToCUnit(vol), 0, this.container_k_height);
              
  
                 //x,y坐标改变 均线提示
                //改变背景色       
                ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
              ctx.fillRect(0,0,this.width,20);
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.fillText("均线:" , 0, 10);
              for(let i=0;i<maresult.length;i++){
                
                ctx.strokeStyle = ctx.fillStyle =this.color[i];//黄
                ctx.fillText("MA"+MA[i]+':'+maresult[i], 60*(i+1), 10);
              }
           /*    ctx.strokeStyle = ctx.fillStyle = '#DAA520';//黄
              ctx.fillText("MA5:"+ma, 30, 10);
              ctx.strokeStyle = ctx.fillStyle = '#1E90FF';//蓝色
              ctx.fillText("MA10:"+ma10, 95, 10);
              ctx.strokeStyle = ctx.fillStyle = '#FF00FF';//杨红
              ctx.fillText("MA20:" +ma20, 170, 10); */
           //   ctx.strokeStyle = ctx.fillStyle = '#FF7F50';//橙色
           //   ctx.fillText("MA30："+ma30, 245, 10);
           //   ctx.strokeStyle = ctx.fillStyle = '#9400D3';//紫色
           //   ctx.fillText("MA60："+ma60, 320, 10);
  
  
            //xy变化，指标变化提示
            ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
              ctx.fillRect(0,this.container_k_height+this.container_vol_height,cRect.width,20);
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.fillText("MACD(12,26,9):",0, this.container_k_height+this.container_vol_height+this.coordinate.height);
              ctx.strokeStyle = ctx.fillStyle = '#DAA520';
              ctx.fillText("DIF:"+dif, 80, this.container_k_height+this.container_vol_height+this.coordinate.height);
              ctx.strokeStyle = ctx.fillStyle = '#1E90FF';
              ctx.fillText("DEA:"+DEA, 130, this.container_k_height+this.container_vol_height+this.coordinate.height);
              ctx.strokeStyle = ctx.fillStyle = '#1abc9c';
              ctx.fillText("MACD:"+MACD, 190, this.container_k_height+this.container_vol_height+this.coordinate.height);

      
              //tooltip
              if(canvasX>this.width*2/3){
                //出现在左上角
                //画灰色边框
                ctx.setLineDash([20, 0]);  // [实线长度, 间隙长度]
               ctx.lineDashOffset = -0;
  
                ctx.strokeStyle = ctx.fillStyle = 'gray';
                ctx.strokeRect(30,20,120,220)
                //填充半透明
                ctx.strokeStyle = ctx.fillStyle = 'rgba(255,255,255,0.7)';
              ctx.fillRect(30,20,120,220);
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.fillText('时间：'+this.time[n],30,40);
              ctx.fillText('开盘价：'+this.open[n],30,60);
              ctx.fillText('最高价：'+this.high[n],30,80);
              ctx.fillText('最低价：'+this.low[n],30,100);
              if(n>=1){
                ctx.strokeStyle = ctx.fillStyle = this.close[n]>this.close[n-1]?'red':'green'; 
                ctx.fillText('收盘价：'+this.close[n],30,120);
                ctx.fillText('涨跌额：'+(this.close[n]-this.close[n-1]).toFixed(2),30,140);
                ctx.fillText('涨跌幅：'+this.numToCUnit((this.close[n]-this.close[n-1])/this.close[n-1]),30,160);
              }
              else{
                ctx.fillText('收盘价：'+this.close[n],30,120);
                ctx.fillText('涨跌额：'+this.close[n],30,140);
                ctx.fillText('涨跌幅：'+this.close[n],30,160);
              }
             
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.fillText('成交量：'+this.numToCUnit(this.vol[n]),30,180);
              ctx.fillText('成交额：'+this.high[n],30,200);
              ctx.fillText('换手率：'+this.low[n],30,220);
  
              }
              else{
                 //出现在右上角
                   //画灰色边框
                ctx.setLineDash([20, 0]);  // [实线长度, 间隙长度]
               ctx.lineDashOffset = -0;
  
                ctx.strokeStyle = ctx.fillStyle = 'gray';
                ctx.strokeRect(this.width-122,20,120,220)
                //半透明
                 ctx.strokeStyle = ctx.fillStyle = 'rgba(255,255,255,0.7)';
              ctx.fillRect(this.width-122,20,120,220);
              ctx.strokeStyle = ctx.fillStyle = 'black';
              ctx.save()
              ctx.fillText('时间：'+this.time[n],this.width-120,40);
              ctx.fillText('开盘价：'+this.open[n],this.width-120,60);
              ctx.fillText('最高价：'+this.high[n],this.width-120,80);
              ctx.fillText('最低价：'+this.low[n],this.width-120,100);
              if(n>=1){
                ctx.strokeStyle = ctx.fillStyle = this.close[n]>this.close[n-1]?'red':'green'; 
                ctx.fillText('收盘价：'+this.close[n],this.width-120,120);
                ctx.fillText('涨跌额：'+(this.close[n]-this.close[n-1]).toFixed(2),this.width-120,140);
                ctx.fillText('涨跌幅：'+this.numToCUnit((this.close[n]-this.close[n-1])/this.close[n-1]),this.width-120,160);
              }
              else{
                ctx.fillText('收盘价：'+this.close[n],this.width-120,120);
                ctx.fillText('涨跌额：'+this.close[n],this.width-120,140);
                ctx.fillText('涨跌幅：'+this.close[n],this.width-120,160);
              }
              ctx.restore()
              ctx.fillText('成交量：'+this.numToCUnit(this.vol[n]),this.width-120,180);
              ctx.fillText('成交额：'+this.high[n],this.width-120,200);
              ctx.fillText('换手率：'+this.low[n],this.width-120,220);
  
              }
  
          });
  
    }
    this.drawMACD=function(){
       
        /*
         var EMA12 =[]
         EMA12.push(this.close[0]);
         this.getEMA(1,this.close,12,EMA12,this.close[0])
         var EMA26 =[]
         EMA26.push(this.close[0]);
         this.getEMA(1,this.close,26,EMA26,this.close[0])
         //数组相减求dif
         var dif =[]
         for(let i=0;i<EMA12.length;i++){
           dif.push(EMA12[i] - EMA26[i])
         }
         var DEA = []
         DEA.push(dif[0])
         this.getEMA(1,dif,9,DEA,dif[0])
         var MACD = []
         for(let i =0;i<DEA.length;i++){
           MACD.push(2*(dif[i]-DEA[i]))
         }
      */
    
         //求数值范围
         var dif_min = Math.min.apply(null,indexData.MACD[0])
         var DEA_min = Math.min.apply(null,indexData.MACD[1])
         var macd_min = Math.min.apply(null,indexData.MACD[2])
         var dif_max = Math.max.apply(null,indexData.MACD[0])
         var DEA_max = Math.max.apply(null,indexData.MACD[1])
         var macd_max = Math.max.apply(null,indexData.MACD[2])
         var min = Math.min(dif_min,DEA_min,macd_min);
         var max = Math.max(dif_max,DEA_max,macd_max);       
         
         
         this.containerInfo.container_index_ratio = (this.container_stIndex_height-this.coordinate.height)/(max-min);
         
         this.containerInfo.container_index_min = min
         this.containerInfo.container_index_max = max
         this.MACDInfo.dif = indexData.MACD[0]
         this.MACDInfo.dif = this.MACDInfo.dif.slice(parseInt(this.MACDInfo.dif.length*(0.6+zoom)));
         this.MACDInfo.DEA = indexData.MACD[1]
         this.MACDInfo.DEA = this.MACDInfo.DEA.slice(parseInt(this.MACDInfo.DEA.length*(0.6+zoom)));
         this.MACDInfo.MACD = indexData.MACD[2]
         this.MACDInfo.MACD = this.MACDInfo.MACD.slice(parseInt(this.MACDInfo.MACD.length*(0.6+zoom)));


     /*  var canvas = (document.getElementById('id'));
          var ctx = canvas.getContext("2d");
         //绘制macd指标y坐标
         ctx.strokeStyle = ctx.fillStyle = 'gray';
         var stindex_y_ratio = (this.containerInfo.container_index_max - this.containerInfo.container_index_min)/3
          
         for(let j=1;j<3;j++){
           //真实坐标
            let y_true =this.containerInfo.container_index_min+j*stindex_y_ratio;
            //变换坐标
            let y= this.transCoord('index',y_true);
            
           ctx.fillText(y_true.toFixed(2),0,y+this.coordinate.height/2);//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)
  
         } */
         var canvas = (document.getElementById('id'));
         var ctx = canvas.getContext("2d");
         this.drawindexY();
          var x_gap = this.width/this.open.length;
      //画dif   DEA
      this.drawployline('index',this.MACDInfo.dif,'#FF7F50')    
      this.drawployline('index',this.MACDInfo.DEA,'#1E90FF') 
      
      //画macd柱状图
      //
    
      for(let i=0;i<this.MACDInfo.MACD.length;i++){
        var K_index = i+1;
        var x_index= (K_index-1)*x_gap+0.5*x_gap;
        var color =this.MACDInfo.MACD[i]<0 ? '#1abc9c' : '#DA5961';
         ctx.strokeStyle = ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x_index,this.transCoord('index',0));
       
          //坐标转换
          ctx.lineTo(x_index,this.transCoord('index',this.MACDInfo.MACD[i]));
          ctx.stroke();
        
      }
      //
      ctx.strokeStyle = ctx.fillStyle = 'black';
      ctx.fillText('MACD(12,26,9):',0,this.container_k_height+this.container_vol_height+this.coordinate.height)
         
     
    }
    this.drawKDJ = function(){
      console.log('KJD')
       //求数值范围
       var K_min = Math.min.apply(null,indexData.KDJ[0])
       var D_min = Math.min.apply(null,indexData.KDJ[1])
       var J_min = Math.min.apply(null,indexData.KDJ[2])
       var K_max = Math.max.apply(null,indexData.KDJ[0])
       var D_max = Math.max.apply(null,indexData.KDJ[1])
       var J_max = Math.max.apply(null,indexData.KDJ[2])
       var min = Math.min(K_min,D_min,J_min);
       var max = Math.max(K_max,D_max,J_max);       
       this.containerInfo.container_index_ratio = (this.container_stIndex_height-this.coordinate.height)/(max-min);
       
       this.containerInfo.container_index_min = min
       this.containerInfo.container_index_max = max
      
       this.KDJInfo.K = indexData.KDJ[0]
       this.KDJInfo.K = this.KDJInfo.K.slice(parseInt(this.KDJInfo.K.length*(0.6+zoom)));
       this.KDJInfo.D = indexData.KDJ[1]
       this.KDJInfo.D = this.KDJInfo.D.slice(parseInt(this.KDJInfo.D.length*(0.6+zoom)));
       this.KDJInfo.J = indexData.KDJ[2]
       this.KDJInfo.J = this.KDJInfo.J.slice(parseInt(this.KDJInfo.J.length*(0.6+zoom)));

        this.drawindexY();
         var x_gap = this.width/this.open.length;
         //画K D J      
         this.drawployline('index',this.KDJInfo.K,'#FF7F50')
         this.drawployline('index',this.KDJInfo.D,'blue')
         this.drawployline('index',this.KDJInfo.J,'#FF00FF')


    }
    this.drawRSI = function () {
    
      //求数值范围
      var R_min = Math.min.apply(null, indexData.RSI[0].slice(6))
      var S_min = Math.min.apply(null, indexData.RSI[1].slice(12))
     
      var R_max = Math.max.apply(null, indexData.RSI[0].slice(6))
      var S_max = Math.max.apply(null, indexData.RSI[1].slice(12))
      
      var min = Math.min(R_min, S_min);
      var max = Math.max(R_max, S_max);
      this.containerInfo.container_index_ratio = (this.container_stIndex_height - this.coordinate.height) / (max - min);
  
      this.containerInfo.container_index_min = min
      this.containerInfo.container_index_max = max
  
      var canvas = (document.getElementById('id'));
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = ctx.fillStyle = '#F5F5F5';
      ctx.fillRect(0,this.container_k_height+this.container_vol_height,this.width,this.coordinate.height);
      ctx.strokeStyle = ctx.fillStyle = 'black';
      ctx.fillText("RSI：" , 0, this.container_k_height+this.container_vol_height+this.coordinate.height);
      ctx.strokeStyle = ctx.fillStyle = '#FF7F50';
      ctx.fillText("rsi6",30, this.container_k_height+this.container_vol_height+this.coordinate.height);
      ctx.strokeStyle = ctx.fillStyle = 'blue';
      ctx.fillText("rsi12", 60, this.container_k_height+this.container_vol_height+this.coordinate.height);
      
      //画K D J      
      this.drawployline('index', indexData.RSI[0], '#FF7F50')
      this.drawployline('index', indexData.RSI[1], 'blue')
      
  
      this.drawindexY()
    }
    //求EMA
    this.getEMA=function(k,data,N,EMA,EMAyse){
      var a = 4/(N+1);
      //昨天的EMA值
      var EMAto = a*data[k]+(1-a)*EMAyse
      EMA.push(EMAto);
      if(k+1<data.length){
        this.getEMA(k+1,data,N,EMA,EMAto)
      }
    }
    this.drawployline = function(type,arr,color){
      var x_gap = this.width/this.open.length;
      var canvas = (document.getElementById('id'));
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = ctx.fillStyle = color
      ctx.beginPath();
      ctx.moveTo(0,this.transCoord(type,arr[0]));
     for (let i=1;i<arr.length;i++){
      var K_index = i+1;
        //第n个蜡烛矩形的左x坐标 = (n-1)*x_gap+0.1*x_gap
        var x_index= (K_index-1)*x_gap+0.5*x_gap;
     
        ctx.lineTo(x_index,this.transCoord(type,arr[i]));
        }
    ctx.stroke(); //描边。stroke不会自动closePath()

    }
  
    this.drawindexY = function(){
      var x_gap = this.width / this.open.length;
      var canvas = (document.getElementById('id'));
      var ctx = canvas.getContext("2d");
          //绘制macd指标y坐标
          ctx.strokeStyle = ctx.fillStyle = 'gray';
          var stindex_y_ratio = (this.containerInfo.container_index_max - this.containerInfo.container_index_min)/3
         for(let j=1;j<3;j++){
           //真实坐标
            let y_true =this.containerInfo.container_index_min+j*stindex_y_ratio;
            //变换坐标
            let y= this.transCoord('index',y_true);
            
           ctx.fillText(y_true.toFixed(2),0,y+this.coordinate.height/2);//(调一下，从左下角往上写的，数字位置应该在中间，即往下一点)
         }
     
    }
    this.transCoord=function(index,coord){
        //坐标变换
            switch(index){
              case 'k':
              return (this.container_k_height-this.coordinate.height)-((coord)-this.containerInfo.container_k_min)*this.containerInfo.container_k_ratio;
              break;
              case 'vol':
              return this.container_k_height+this.container_vol_height-(coord-this.containerInfo.container_vol_min)*this.containerInfo.container_vol_ratio;
              break;
              case 'index':
              return this.container_k_height+this.container_vol_height+this.container_stIndex_height-(coord-this.containerInfo.container_index_min)*this.containerInfo.container_index_ratio;
  
              }
  
          }//坐标变换

    //规范数字格式
    this.numToCUnit=function(num) {
      if(num==0){return 0;}
                if(num<1){
                  return Number(num*100).toFixed(2) + '%';
                }
                else if (1<num && num< 10000000) {
                    return Number(num / 10000).toFixed(2) + '万';
                } else {
                    return Number(num / 100000000).toFixed(2) + '亿';
                }
              
            }
  }


//数据全局变量
var DATA
var INDEX
var INDEXDATA
var ISBOOL
var MA
KCharts.getKchart = function(Kindex,data,index,indexData,IsBool,MMA){
      DATA = data;
       INDEX = index
       INDEXDATA = indexData    
      let data_temp =[]
      ISBOOL = IsBool
      MA = MMA
      //先取后百分之40
      data.forEach(item=>{
            data_temp.push(item.slice(parseInt(item.length*(0.6+zoom))))
      })  
      var jskchart = new KCharts(Kindex,data_temp,index,indexData,IsBool,MA);
      jskchart.Init();
      return jskchart

  }
MinuteChart.getMinutechart = function(daycount,data,vol,lastClose){
  
  var jsmchart = new MinuteChart(daycount,data,vol,lastClose);
  jsmchart.Init();
  return jsmchart
}

//求平均值
var calculateMA = function(data0,dayCount){
  var result = [];
  for (var i = 0, len = data0.length; i < len; i++) {
      if (i < dayCount-1) {
          result.push('-');
          continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
          sum += data0[i - j];
      }
      
   //   result.push(this.transCoord('k',sum/dayCount));
   result.push(sum/dayCount);
  }
  return result;

}


  //鼠标滚轮处理事件
 var scrollFunc = function(e){ 
    　　e = e || window.event; 　
    e.preventDefault()
        //浏览器兼容性
    　　if( e.wheelDelta ){  // IE/Opera/Chrome 
      　 var delta = e.wheelDelta/120; 
        if (window.opera) delta = -delta;//因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
   　　 }else if( e.detail ){ // Firefox 
    　     delta = -e.detail/3;
    　　}
        if (delta)
              {  
                var canvas =document.getElementById('id');
                var ctx = canvas.getContext("2d");
                var cRect = canvas.getBoundingClientRect();      
                var canvas2 = document.getElementById('id2');
                var ctx2 = canvas2.getContext("2d");
               
                //向下滚动为-1，向上为1
              
                //向上放大百分之十 即数据减少百分之十
                if(delta==1){
                   //销毁对象不再引用，清空重绘
                   zoom+=0.1
                   if(zoom<0.3)//至少显示百分之20
                   { ctx.clearRect(0, 0, cRect.width, cRect.height); 
                    ctx2.clearRect(0, 0, cRect.width, cRect.height); 
                    let data_temp =[]
                    DATA.forEach(item=>{
                          data_temp.push(item.slice(parseInt(item.length*(0.6+zoom))))
                    })
                   
                    var jskchart = new KCharts(0,data_temp,INDEX,INDEXDATA,ISBOOL,MA);
                      jskchart.Init();
                   } 
                   else{
                       zoom = 0.2
                   }
                  

                   
                }

                //数据增加10%
                else{
                     zoom-=0.1
                     if(zoom>-0.7){
                        ctx.clearRect(0, 0, cRect.width, cRect.height); 
                        ctx2.clearRect(0, 0, cRect.width, cRect.height); 
                        let data_temp =[]
                        DATA.forEach(item=>{
                              data_temp.push(item.slice(parseInt(item.length*(0.6+zoom))))
                        })
                       
                        var jskchart = new KCharts(0,data_temp,INDEX,INDEXDATA,ISBOOL,MA);
                          jskchart.Init();
                     }
                     else{
                         zoom = -0.6
                     }
                }
              }
        
　　} 
  
  
  var zoom = 0 //滚轮缩放比例

  //把给外界调用的方法暴露出来
export default {
 
    getKchartInit:KCharts.getKchart,
    getIndustrychart :Industry.getIndustrychart,
    getMinuteChartInit:MinuteChart.getMinutechart
}