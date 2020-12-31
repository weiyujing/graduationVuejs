<template>
   <div class="wrap">
     <!--小走势图-->
       <el-container class="linechart">
          <el-main>
              <h5>上证指数</h5>
              <div class="info">
                <div class="close">2976.02</div>
                <div class="ratio">-2.58</div>
              </div>
              <div class="sz">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="80">
                      <path class="stockslider" d="M0,40 L124,40"  fill="none" stroke="#666C72"/>
                      <path id="path" d="M0,40 L20,20 L20,40,L25,44 L30,55 L35,40 L40,30 L45,25 L50,40 L60,30" fill="none" stroke="red" />  
                </svg>
              </div>
          </el-main>   
       </el-container>
       <el-container class="linechart">
          <el-main>
              <h5>上证指数</h5>
              <div class="info">
                <div class="close">2976.02</div>
                <div class="ratio">-2.58</div>
              </div>
              <div class="sz">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="80">
                       <path class="stockslider" d="M0,40 L124,40"  fill="none" stroke="#666C72"/>
                      <path id="path" d="M0,40 L20,20 L20,40,L25,44 L30,55 L35,40 L40,30 L45,25 L50,40 L60,30" fill="none" stroke="green" />  
                </svg>
              </div>
          </el-main>   
       </el-container>
       <el-container class="linechart">
          <el-main>
              <h5>上证指数</h5>
              <div class="info">
                <div class="close">2976.02</div>
                <div class="ratio">-2.58</div>
              </div>
              <div class="sz">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="80">
                       <path class="stockslider" d="M0,40 L124,40"  fill="none" stroke="#666C72"/>
                      <path id="path" d="M0,40 L20,20 L20,40,L25,44 L30,55 L35,40 L40,30 L45,25 L50,40 L60,30" fill="none" stroke="red" />  
                </svg>
              </div>
          </el-main>   
       </el-container>
       <el-container class="linechart4">
          <el-main>
              <h5>上证指数</h5>
              <div class="info">
                <div class="close">2976.02</div>
                <div class="ratio">-2.58</div>
              </div>
              <div class="sz">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="80">
                       <path class="stockslider" d="M0,40 L124,40"  fill="none" stroke="#666C72"/>
                      <path id="path" d="M0,40 L20,20 L20,40,L25,44 L30,55 L35,40 L40,30 L45,25 L50,40 L60,30" fill="none" stroke="green" />  
                </svg>
              </div>
          </el-main>   
       </el-container>

       
      <!--每日头条等新闻-->
      <div class="everydaynews">
        <el-tabs v-model="activeName" @tab-click="handleClick" style="width:750px;float:left">
            <el-tab-pane label="每日头条" name="first">
                <div class="newsTbox" style="display:block;">
                    <div class="content">
                        <div class="newsL"><a href="#" target="_blank"><img src="../../../static/img/news01.jpg" width="250" height="141" /></a></div>
                        <div class="newsR">
                            <a href="#" target="_blank">
                                <h3>量身定制年报行情主题投资方案</h3>
                                <p><img src="../../../static/img/jz-list2.jpg" width="24" height="20" />&nbsp;自2015年6月股市上演“股灾”更多时间进行绩才是稳更多时间进行绩才是稳大盘如此疲弱无力，确实需要更多时间进行绩才是稳若泰山的最主流题绩才是稳若泰山的最主流材......</p>
                            </a>
                        </div>
                    </div>
                    <div class="dynamic_list">
                        <ul>
                            <li><a href="#" target="_blank">主线动态：三大反弹潜力方向已经点关注 <span>[1/27]</span></a></li>
                            <li><a href="#" target="_blank">主线动态：三大反弹潜力方向已经点关注 <span>[1/27]</span></a></li>
                            <li><a href="#" target="_blank">主线动态：潜力方向已经点关注 <span>[1/27]</span></a></li>
                            <li><a href="#" target="_blank">主线动态：反弹潜力方向已经点关注 <span>[1/27]</span></a></li>
                            <li><a href="#" target="_blank">主线动态：三大反弹潜力方向已经点关注 <span>[1/27]</span></a></li>
                            <li><a href="#" target="_blank">主线动态：三大反弹潜力方向已经点关注 <span>[1/27]</span></a></li>
                             <li><a href="#" target="_blank">主线动态：三大反弹潜力方向已经点关注 <span>[1/27]</span></a></li>
                            <li><a href="#" target="_blank">主线动态：三大反弹潜力方向已经点关注 <span>[1/27]</span></a></li>
                        </ul>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="股市早参" name="second">股市早参</el-tab-pane>
            <el-tab-pane label="新闻联播" name="third">新闻联播</el-tab-pane>
            <el-tab-pane label="主题报告" name="fourth">主题报告</el-tab-pane>
        </el-tabs>
      </div>
      <!--视频公告-->
        <el-container class="gonggao">
            <el-main style="height:360px;padding:0 10px">
                <!--视频-->
                <div class="video"><iframe height=162 width=100% src="http://player.youku.com/embed/XODY1NjI0Mjc2" frameborder=0 allowfullscreen></iframe></div>
                <div class="mt10 bd bdr">
                <!--公告-->
                <!--<div class="hd clearfix"><a href="#" class="more">更多&gt;&gt;</a>网站公告</div>-->
                  <div class="contentL">
                    <h3><a href="#" target="_blank" class="tc">网站公告</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15"/>更多</a></h3>
                  </div>
                  <ul class="Notice cicle clearfix">
                    <li><span class="time">[10-11]</span><a href="newshow.html">电子工程师严定贵的二次创业</a></li>
                    <li><span class="time">[10-11]</span><a href="newshow.html">严定贵：互联网大鳄搅局将抬高</a></li>
                    <li><span class="time">[10-11]</span><a href="newshow.html">以产品定义为先导 促P2P阳光化</a></li>
                    <li><span class="time">[10-11]</span><a href="newshow.html">IT168视频采访副总裁刘瑶</a></li>
                  </ul>
                </div>
            </el-main>
        </el-container>
      
     
      <!--美股港股-->
        <div class="contentR">
          <div class="ganggu">
            <h3><a class="rool" href="#" target="_blank">港股</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15" />更多</a></h3>
            <el-container style="padding:5px 0px">
              <el-aside width="130px">
                <img src="../../../static/img/ganggu.png">
              </el-aside>
              <el-main>
                <a href="#" style="font-size:20px;font-weight:bold">互联网保险公司三季度全数"亏损"</a>
              </el-main>
            </el-container>
            <div>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
            </div>
          </div>
          <div class="meigu">
            <h3><a class="rool" href="#" target="_blank">美股</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15" />更多</a></h3>
            <el-container style="padding:5px 0px">
              <el-aside width="130px">
                <img src="../../../static/img/sucai1.jpg" width="130px" height="93px">
              </el-aside>
              <el-main>
                <a href="#" style="font-size:20px;font-weight:bold">互联网保险公司三季度全数"亏损"</a>
              </el-main>
            </el-container>
            <div>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
            </div>
          </div>
          <div class="xin3">
            <h3><a class="rool" href="#" target="_blank">新三板</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15" />更多</a></h3>
            <el-container style="padding:5px 0px">
              <el-aside width="130px">
                <img src="../../../static/img/xin3ban.jpg" width="130px" height="93px">
              </el-aside>
              <el-main>
                <a href="#" style="font-size:20px;font-weight:bold">互联网保险公司三季度全数"亏损"</a>
              </el-main>
            </el-container>
            <div>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
            </div>
          </div>
          <div class="zhaiquan">
            <h3><a class="rool" href="#" target="_blank">债券</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15" />更多</a></h3>
            <el-container style="padding:5px 0px">
              <el-aside width="130px">
                <img src="../../../static/img/zhaiquan.png" width="130px" height="93px">
              </el-aside>
              <el-main>
                <a href="#" style="font-size:20px;font-weight:bold">互联网保险公司三季度全数"亏损"</a>
              </el-main>
            </el-container>
            <div>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
                <p style="padding:3px 0"><a href="#">兴业银行与小米集团合作扩容 达成八大领域战略协议</a></p>
            </div>
          </div>
        	
        </div>
      <!--    
            <div class="zx-list">
            	<ul>
                	<li>
                    	<div class="Time">14:31</div>
                        <div class="content1 content">
                        	<a href="#" target="_blank" class="yw current">
                            	【要闻：发改委将编制新十年促进中部地区崛起规划】财联社28日讯，发改委拟会同有关部门和中部六省共同研究编制《促进中部地区崛起规划加大对中部地区发展的政策支持。
                             </a>
                        <div class="date"><span> 已阅 20</span><a id="fx01" href="javascript:void(0)" @click="share('fx1')">分享</a></div>
                        <div class="fx" id="fx1">
                            <a><img src="../../../static/img/fx_01.png" width="16" height="16" />QQ空间</a>
                            <a><img src="../../../static/img/fx_02.png" width="16" height="16" />新浪微博</a>
                            <a><img src="../../../static/img/fx_03.png" width="16" height="16" />腾讯微博</a>
                            <a><img src="../../../static/img/fx_04.png" width="16" height="16" />QQ好友</a>
                        </div>
                        </div>
                    </li>
                    <li>
                    	<div class="Time">14:31</div>
                        <div class="content1 content">
                        	<a href="#" target="_blank" class="yw">
                            	【要闻：发改委将编制新十年促进中部地区崛起规划】财联社28日讯，发改委拟会同有关部门和中部六省共同研究编制《促进中部地区加大对中部地区发展的政策支持。
                              【要闻：发改委将编制新十年促进中部地区崛起规划】财联社28日讯，发改委拟会同有关部门和中部六省共同研究编制《促进中部地区加大对中部地区发展的政策支持。
                             </a>
                            <div class="date"><span> 已阅 20</span><a id="fx02" href="javascript:void(0)" @click="share('fx2')">分享</a></div>
                        <div class="fx" id="fx2">
                            <a><img src="../../../static/img/fx_01.png" width="16" height="16" />QQ空间</a>
                            <a><img src="../../../static/img/fx_02.png" width="16" height="16" />新浪微博</a>
                            <a><img src="../../../static/img/fx_03.png" width="16" height="16" />腾讯微博</a>
                            <a><img src="../../../static/img/fx_04.png" width="16" height="16" />QQ好友</a>
                        </div>
                        </div>
                    </li>
                    <li>
                    	<div class="Time">14:31</div>
                        <div class="content1 content">
                        	<a href="#" target="_blank" class="yw">
                            	【要闻：发改委将编制新十年促进中部地区崛起规划】财联社28日讯，发改委拟会同有关部门和中部六省共同研究编制《促进中部地区加大对中部地区发展的政策支持。
                              【要闻：发改委将编制新十年促进中部地区崛起规划】财联社28日讯，发改委拟会同有关部门和中部六省共同研究编制《促进中部地区加大对中部地区发展的政策支持。
                             </a>
                            <div class="date"><span> 已阅 20</span><a id="fx02" href="javascript:void(0)" @click="share('fx2')">分享</a></div>
                            <div class="fx" id="fx2">
                            <a><img src="../../../static/img/fx_01.png" width="16" height="16" />QQ空间</a>
                            <a><img src="../../../static/img/fx_02.png" width="16" height="16" />新浪微博</a>
                            <a><img src="../../../static/img/fx_03.png" width="16" height="16" />腾讯微博</a>
                            <a><img src="../../../static/img/fx_04.png" width="16" height="16" />QQ好友</a>
                        </div>
                        </div>
                    </li>
            	</ul>
            </div>
        
      </div>
      -->
      <!--热文-->
      <el-container>
        <el-main class="rw">
            <el-card class="box-card">      
                  <div class="contentL">
                    <h3><a href="#" target="_blank" class="tc">热文</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15"/>更多</a></h3>
                  </div>
              <!--
                <div slot="header" class="clearfix">    
                  <span>热文</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                -->
                
                <div>  
         	    	 	  	    <ul class="rank_list_ul">
         	    	 	  	    	 <li v-for="o in 5" :key="o" class="text item">
         	    	 	  	    	 	 <em class="rank_bg01">1</em>
         	    	 	  	    	 	 <a href="">发改委将编制新十年促进中部地区发改委将编制新十年促进中部地区</a>
         	    	 	  	    	 </li>    
                               <li class="text item">
         	    	 	  	    	 	 <em class="rank_bg01">1</em>
         	    	 	  	    	 	 <a href="">123发改委将编制</a>
         	    	 	  	    	 </li>                         
         	    	 	  	    </ul>  
                </div>
            </el-card>
        </el-main>

      </el-container>
      
      <!--我的自选股-->
      <el-container>
        <el-main class="zxg">
           <el-tabs type="border-card">
            <el-tab-pane label="我的自选股">
              <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="名称/代码"
                      width="130">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="最新"
                      width="60">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="涨跌幅">
                    </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="自选股新闻">自选股新闻</el-tab-pane>
        </el-tabs>
        </el-main>
      </el-container>
      <!--百家论股-->
      <div class="porL">
        	<h3><a href="#" target="_blank" class="tc">题材挖掘</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15"/>更多</a></h3>
            <ul class="themeBox">
            	<li>
                	<div class="img"><a href="#" target="_blank"><img src="../../../static/img/meigu.jpg" width="250" height="141" /></a></div>
                    <div class="themeR">
                    	<h2><img src="../../../static/img/sj.jpg" width="84" height="24" />百家论股<span>2015-12-01 14:32:19</span></h2>
                        <h4><img src="../../../static/img/hot.png" width="24" height="15" />&nbsp;<strong>中航工业资本运作频频提速！军工板块逆市躁动，这只股票率先封板</strong></h4>
                       <p>首次！科创板两股盘中破发！昊海生科：有稳定股价承诺 </p>
                        <p>首次！科创板两股盘中破发！昊海生科：有稳定股价承诺 </p>
                        <p>首次！科创板两股盘中破发！昊海生科：有稳定股价承诺 </p>
                    </div>
                </li>
                <li>
                	<div class="img"><a href="#" target="_blank"><img src="../../../static/img/sucai2.jpg" width="250" height="141" /></a></div>
                    <div class="themeR">
                    	<h2><img src="../../../static/img/sj.jpg" width="84" height="24" />股市学堂<span>2015-12-01 14:32:19</span></h2>
                        <h4><img src="../../../static/img/hot.png" width="24" height="15" />&nbsp;<strong>坤鹏论：不懂财报最好别投资 </strong></h4>
                        <p>首次！科创板两股盘中破发！昊海生科：有稳定股价承诺 </p>
                        <p>首次！科创板两股盘中破发！昊海生科：有稳定股价承诺 </p>
                        <p>首次！科创板两股盘中破发！昊海生科：有稳定股价承诺 </p>
                    </div>
                </li>
            </ul>
        </div>
        <!--龙虎榜-->
        <el-container>
          <el-main class="lhb">
            <el-card class="box-card">
              <div class="contentL">
                    <h3><a href="#" target="_blank" class="tc">龙虎榜</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15"/>更多</a></h3>
                  </div>
              <!--
                <div slot="header" class="clearfix">
                    <span>龙虎榜</span>
                    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
              -->
                <div style="height:40px;padding-top:15px"><span style="float:left">名称/代码</span><span style="position:relative;left:-15px">最新</span><span style="position:relative;left:25px">涨跌幅</span></div>
                <el-collapse v-model="activelhb" accordion class="lhbzd">
                <el-collapse-item :title="hlbgp1" name="1">
                  <div class="fl">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="230px" height="80">
                      <path class="stockslider" d="M0,40 L204,40"  fill="none" stroke="#666C72"/>
                      <path id="path" d="M0,40 L20,20 L20,40,L25,44 L30,55 L35,40 L40,30 L45,25 L50,40 L60,30" fill="none" stroke="red" />  
                    </svg>
                  </div>
                  <p style="padding-top:50px"><a href="#" style="color:red">查看详情</a></p>
                </el-collapse-item>
                <el-collapse-item :title="hlbgp1" name="2">
                   <div class="fl">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="230px" height="80">
                      <path class="stockslider" d="M0,40 L204,40"  fill="none" stroke="#666C72"/>
                      <path id="path" d="M0,40 L20,20 L20,40,L25,44 L30,55 L35,40 L40,30 L45,25 L50,40 L60,30" fill="none" stroke="red" />  
                    </svg>
                  </div>
                  <p style="padding-top:50px"><a href="#" style="color:red">查看详情</a></p>
                </el-collapse-item>
                <el-collapse-item :title="hlbgp1" name="3">
                   <div class="fl">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="230px" height="80">
                      <path class="stockslider" d="M0,40 L204,40"  fill="none" stroke="#666C72"/>
                      <path id="path" d="M0,40 L20,20 L20,40,L25,44 L30,55 L35,40 L40,30 L45,25 L50,40 L60,30" fill="none" stroke="red" />  
                    </svg>
                  </div>
                  <p style="padding-top:50px"><a href="#" style="color:red">查看详情</a></p>
                </el-collapse-item>
                <el-collapse-item :title="hlbgp1" name="4">
                  <div class="fl">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="230px" height="80">
                      <path class="stockslider" d="M0,40 L204,40"  fill="none" stroke="#666C72"/>
                      <path id="path" d="M0,40 L20,20 L20,40,L25,44 L30,55 L35,40 L40,30 L45,25 L50,40 L60,30" fill="none" stroke="red" />  
                    </svg>
                  </div>
                  <p style="padding-top:40px"><a href="#" style="color:red">查看详情</a></p>
                </el-collapse-item>
              </el-collapse>
            </el-card>
              
          </el-main>
        </el-container>
        <!--主题投资-->
        <div class="zttz">
           <h3><a href="#" target="_blank" class="tc">主题投资</a><a href="#" target="_blank" class="more"><img src="../../../static/img/more_08.jpg" width="15" height="15"/>更多</a></h3>
           <div style="background-color:white">
            <span><img src="../../../static/img/huawei.png" width="140" height="140"/></span>
           <span><img src="../../../static/img/hangkong.png" width="140" height="140"/></span>
           <span><img src="../../../static/img/shiyou.png" width="140" height="140"/></span>
           <span><img src="../../../static/img/hangkong.png" width="140" height="140"/></span>
           </div>
        </div>
        <!--主题选基领跑市场-->
       
      <el-container>
        <el-main class="zxg">
           <el-tabs type="border-card">
            <el-tab-pane label="主题选基">
              <div style="height:150px;width:130px;float:left;border:1px solid red">
                <div style="height:50px;background-color:#f66;"><span style="font-size:15px;color:white;line-height:50px">增强现实</span></div>
                <div>
                  <p>中国银行</p>
                  <p>1.1%</p>      
                </div>
              </div>
              <div style="height:150px;width:130px;float:left;border:1px solid red;margin-left:10px">
                <div style="height:50px;background-color:#f66"><span style="font-size:15px;color:white;line-height:50px">智能穿戴</span></div>
                 <div>
                  <p>中国银行</p>
                  <p>1.1%</p>      
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="领跑市场">领跑市场</el-tab-pane>
        </el-tabs>
        </el-main>
      </el-container>
   </div>
   
</template>

<script type="text/ecmascript-6">

export default {
    name: '',
    components: {},
    data() {
       return {
           hlbgp1:"中国银行/600000"+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'12'+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+'0.5',
           stripe:true,
           activeName: 'first',
           activelhb:'1',
           tableData: [{
          date: '中国银行/600000',
          name: '12',
          address: '0.5%'
        }, {
           date: '中国银行/600000',
          name: '12',
          address: '0.5%'
         
        }, {
            date: '中国银行/600000',
          name: '12',
          address: '0.5%'
        },{
            date: '中国银行/600000',
          name: '12',
          address: '0.5%'
        },]
       }
   },
    methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      },
    share(index){
      
      document.getElementById(index).style.display = "block";
    }

    }
  }
</script>

<style scoped>


.el-aside {background-color: #D3DCE6;color: #333;text-align: center;}
.el-main {background-color: #E9EEF3;color: #333;padding:10px} 

/*==========小走势图==========*/
.linechart{position: relative;width:275px;height: 130px;float: left;}
.linechart4{position: relative;width:275px;height: 130px;}
.linechart .el-main{padding: 10px 15px;}
.linechart h5{text-align: left}
.linechart .info{width: 120px;float: left;}
.linechart .sz{width: 122px;height:80px;float: right;}
.linechart4 .el-main{padding: 10px 15px;}
.linechart4 h5{text-align: left}
.linechart4 .info{width: 120px;float: left;}
.linechart4 .sz{width: 122px;height:80px;float: right;}
.linechart::after{position: absolute;height: 90px;top:20px;left:275px;width:1px;background-color: gray;content: "";z-index: 2;}
.stockslider{stroke-linecap: round;stroke-dasharray: 6,6;}
  /*========newbox=========*/
  /*newsBox每日头条*/
.everydaynews .newsTbox{width:100%;display:block;height:300px;}
.everydaynews .content{margin-top:30px; overflow:hidden;}
.everydaynews .content .newsL{ float:left;width:250px;height:141px; overflow:hidden;}
.everydaynews .content .newsL a{display:block;}
.everydaynews .content .newsL a img{ display:block; transition:all 0.8s linear;-moz-transition:all 0.8s linear;-ms-transition:all 0.8s linear;-o-transition:all 0.8s linear;-webkit-transition:all 0.8s linear;}
.everydaynews .content .newsL a:hover img{ transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2);-webkit-transform:scale(1.2);}
.everydaynews .content .newsR{width:460px;float:right;padding-right:360px;}
.everydaynews .content .newsR h3{color:#e7101f;font:24px 微软雅黑;}
.everydaynews .content .newsR p{color:#666;font:14px/30px 微软雅黑;margin-top:18px;}
.everydaynews .content .newsR a:hover p{color:#e7101f;}
.everydaynews .dynamic_list{width:100%;margin-top:15px;}
.everydaynews .dynamic_list ul{ overflow:hidden;width:790px;}
.everydaynews .dynamic_list ul li{width:330px; float:left;margin-right:60px;margin-top:0px;height:30px}
.everydaynews .dynamic_list ul li a,.dynamic_list ul li a{display:block;color:#222;font:14px/30px 微软雅黑; background:url(../../../static/img/list_bg.jpg) no-repeat 0 13px; text-align:left;padding-left:15px; position:relative;}
.everydaynews .dynamic_list ul li a span{ display:inline-block;margin-left:6px;color:#999; position:absolute;right:0;top:0;}
.everydaynews .dynamic_list ul li a:hover{color:#e7101f;}
/*=========video&公告========*/
.gonggao .video{ height:162px; width:100%;}
.gonggao .contentL h3{position:relative;width:295px;height:38px; border-bottom:solid 1px #e7101f;}
.gonggao .contentL h3 a.tc,.porBox .porR h3 a.tc{color:#e7101f;font:18px/38px 微软雅黑;float: left;}
.gonggao .contentL a.tc img,.porBox .porR h3 a.tc img{margin-right:10px; vertical-align:middle;}
.gonggao .contentL h3 a.more,.porBox .porR h3 a.more{color:#999;font:14px/27px 微软雅黑;position:absolute;top:5px;right:0;}
.gonggao .contentL h3 a.more img,.porBox .porR h3 a.more img{margin-right:5px; vertical-align:middle;margin-top:-2px;}
.gonggao .bd{ background:#FFF; padding:5px 10px 10px 10px;}
.gonggao .hd{ height:35px; line-height:35px; font-size:16px; font-weight:bold;}
.gonggao .hd .more{ font-size:12px; font-weight:normal; font-family:"宋体"; float:right;}
.gonggao .Notice{ border-bottom:1px solid #f1f1f1}
.gonggao .Notice li{ padding:4px 0 4px 15px; background:url(../../../static/img/notice.png) no-repeat left center;}
.gonggao .time{ float:right; color:#999;}
.gonggao .reports dt{ float:left; width:95px; height:62px;}
.gonggao .reports dd{ float:right; width:180px; height:62px;}

/*========港股美股=========*/
.contentR{width:750px;min-height:550px;background:#fff;float: left;}
.contentR .ganggu,.xin3{width: 353px;float: left;min-height: 270px;margin-right: 12px;padding: 5px;}
.contentR .meigu,.zhaiquan{width: 353px;float: right;min-height: 270px;padding: 5px;}
.contentR h3{height:28px;border-bottom:solid 1px #d4101e;line-height:28px;color:#333;font:14px/28px 微软雅黑;position:relative;}
.contentR h3 a{color:#1d1d1d;font:18px 微软雅黑;}
.contentR h3 a.rool{font-size:15px;width:100px;height:28px;display:block; background:#d4101e;color:#fff; text-align:center;line-height:28px;}
.contentR h3 a img{margin-right:6px; vertical-align:middle;}
.contentR h3 b{display:block;color:#a9a9a9;font:20px 微软雅黑; text-align:center;}
.contentR h3 a.more{color:#999;font:14px 微软雅黑;position:absolute;top:5px;right:10px;}
.contentR h3 a.more img{vertical-align:middle;margin-top:-3px;}
.contentR  .zx-list{width:100%;}
.contentR  .zx-list ul{width:100%;}
.contentR  .zx-list ul li{width:100%;overflow:hidden;padding:10px 0;position:relative; border-bottom:dashed 1px #b7b7b7;}
.contentR  .zx-list ul li .date{ text-align:right;color:#333;font:14px/26px 微软雅黑;position:relative;width:750px ;}
.contentR  .zx-list ul li .date span{margin-right:70px;}
.contentR  .zx-list ul li .date a{position:absolute;top:0;right:10px;display:block;background:url(../../../static/img/fx_10.jpg) no-repeat 0 center;padding-left:20px;}
.contentR  .zx-list ul li .fx{display:none;position: relative;bottom:0px;right:-40px;}
.contentR  .zx-list ul li .fx a{display:inline-block;color:#333;font:12px/26px 微软雅黑 !important; cursor:pointer;margin-right:10px;}
.contentR  .zx-list ul li .fx a img{vertical-align:middle;margin-right:5px;}
.contentR  .zx-list ul li .Time{width:75px;float:left;background:url(../../../static/img/zx-bg_27.jpg) no-repeat 0 center;color:#a9a9a9;font:20px 微软雅黑;padding-left:20px;}
.contentR  .zx-list ul li .content{width:625px;display:none;}
.contentR  .zx-list ul li .content1{display:block;}
.contentR  .zx-list ul li .content a.current{color:#f00;}
.contentR  .zx-list ul li .content a{color:#666;font:14px/28px 微软雅黑;}
.contentR  .zx-list ul li .content a.yw{display:block;min-height:20px;width: 750px;margin-right: 0;}
.contentR  .zx-list ul li .content a:hover{color:#ff0000;}
.contentR  .zx-list ul li .content p{color:#111;font:14px/26px 微软雅黑; text-align:right;}
.contentR  .zx-list ul li .content p span{margin-left:60px;}

/*=========百家论股==========*/
.porL{ float:left;width:750px;}
.porL h3{height:38px;border-bottom:solid 1px #d4101e;line-height:38px;color:#333;font:24px/38px 微软雅黑;position:relative;padding-top:13px;}
.porL h3 .tc{display:block;width:130px;height:38px;background:#d4101e;color:#fff;font:18px/38px 微软雅黑; text-align:center;}
.porL h3 .more{color:#999;font:14px 微软雅黑;position:absolute;top:25px;right:10px;}
.porL h3 .more img{ vertical-align:middle;margin-top:-4px;margin-right:6px;}
.porL .themeBox{width:100%;}
.porL .themeBox li{width:100%;margin-top:26px;border-bottom:dashed 1px #b7b7b7; overflow:hidden;padding-bottom:27px;}
.porL .themeBox li .img{float:left;width:250px;height:141px; overflow:hidden;}
.porL .themeBox li .img a{display:block;}
.porL .themeBox li .img a img{display:block; transition:all 0.5s linear;-moz-transition:all 0.5s linear;-ms-transition:all 0.5s linear;-o-transition:all 0.5s linear;-webkit-transition:all 0.5s linear;}
.porL .themeBox li .img a:hover img{ transform: scale(1.2);-moz-transform: scale(1.2);-ms-transform: scale(1.2);-o-transform: scale(1.2);-webkit-transform: scale(1.2);}
.porL .themeBox li .themeR{float:right;width:480px;}
.porL .themeBox li .themeR h2{color:#222;font:22px 微软雅黑;}
.porL .themeBox li .themeR h2 img{ vertical-align:middle;margin-top:-4px;margin-right:5px;}
.porL .themeBox li .themeR h2 span{display:block; text-indent:90px;color:#999;font:14px 微软雅黑;}
.porL .themeBox li .themeR p{color:#666;font:14px/24px 微软雅黑;}
.porL .themeBox li .themeR .dm{margin-top:15px;}
.porL .themeBox li .themeR .dm a{display:block;height:26px;width:150px; border: solid 1px #d4101e;color:#e7101f;font:14px/26px 微软雅黑; text-align:center;margin-right:20px;float:left;}
.porL .themeBox li .themeR .dm a:hover{background:#d4101e;color:#fff;}
.porR{float:right;width:300px;}
.porR .por_list1{width:298px;min-height:556px;background:#f6f6f6;border-top:solid 1px #e0e0e0;border-left:solid 1px #e0e0e0;margin-top:26px;}


/*=========主题投资==========*/
.zttz{ float:left;width:750px;}
.zttz h3{height:38px;border-bottom:solid 1px #d4101e;line-height:38px;color:#333;font:24px/38px 微软雅黑;position:relative;padding-top:13px;}
.zttz h3 .tc{display:block;width:130px;height:38px;background:#d4101e;color:#fff;font:18px/38px 微软雅黑; text-align:center;}
.zttz h3 .more{color:#999;font:14px 微软雅黑;position:absolute;top:25px;right:10px;}
.zttz h3 .more img{ vertical-align:middle;margin-top:-4px;margin-right:6px;}


</style>


<style>

/*========每日新闻==========*/
.everydaynews .el-tabs__item.is-active{color: white;background-color: #d4101e} 
.everydaynews .el-tabs__item:not(.is-active):hover{color:#d4101e;} 
.everydaynews .el-tabs__active-bar{background-color: white;}
.everydaynews .el-tabs__item.is-top:last-child{padding: 0 20px;}
.everydaynews .el-tabs__item.is-top:nth-child(2){padding: 0 20px;}

/*=========自选股===========*/
.zxg .el-tabs--border-card>.el-tabs__header .el-tabs__item{width: 155px;}
.zxg .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{color: #e7101f;}
.zxg .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-active):hover{color: #e7101f;}

/*========热文==========*/

.rw .contentL h3{position:relative;width:280px;height:38px; border-bottom:solid 1px #e7101f;}
.rw .contentL h3 a.tc,.porBox .porR h3 a.tc{color:#e7101f;font:18px/38px 微软雅黑;float: left;}
.rw .contentL a.tc img,.porBox .porR h3 a.tc img{margin-right:10px; vertical-align:middle;}
.rw .contentL h3 a.more,.porBox .porR h3 a.more{color:#999;font:14px/27px 微软雅黑;position:absolute;top:5px;right:0;}
.rw .contentL h3 a.more img,.porBox .porR h3 a.more img{margin-right:5px; vertical-align:middle;margin-top:-2px;}
.rw .el-card__header,.lhb .el-card__header{padding: 10px;}
.rw .el-card__body{padding-top: 5px;}
.rw .text{width: 288px;height: 35px;}
.rw .rank_list_ul {padding: 0px;}
.rw .rank_list_ul li {line-height: 35px;color: #555;font-size: 12px;}
.rw .rank_list_ul li em {margin-top: 7px;display: inline-block;width: 20px;height: 20px;float: left;line-height: 20px;color: #fff;margin-right: 10px;border-radius: 5px;}
.rw .rank_list_ul li a {overflow: hidden;white-space: nowrap;width: 250px;text-overflow: ellipsis;text-align:left;color: #555;font-size: 12px;display: inline-block;}
.rw .rank_list_ul li a:hover { color: #e7101f;}
.rw .rank_list_ul li span {display: inline-block;width: 90px;}
.rw .rank_bg01 {background-color: #fa6b0d;}
.rw .rank_bg02 {background-color: #f88327;}
.rw .rank_bg03 {background-color: #ffaf01;}
.rw .rank_bg04 {background-color: #959595;}

/*========龙虎榜=========*/
.lhb .contentL h3{position:relative;width:295px;height:38px; border-bottom:solid 1px #e7101f;}
.lhb .contentL h3 a.tc,.porBox .porR h3 a.tc{color:#e7101f;font:18px/38px 微软雅黑;float: left;}
.lhb .contentL a.tc img,.porBox .porR h3 a.tc img{margin-right:10px; vertical-align:middle;}
.lhb .contentL h3 a.more,.porBox .porR h3 a.more{color:#999;font:14px/27px 微软雅黑;position:absolute;top:5px;right:0;}
.lhb .contentL h3 a.more img,.porBox .porR h3 a.more img{margin-right:5px; vertical-align:middle;margin-top:-2px;}
.lhb .el-card__body{padding: 3px 10px} 
.lhb .el-collapse-item__content{padding: 0;}
</style>
