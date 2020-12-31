import {numberFormat,toPercent,wan,qian,bai,yi,limit} from '../../utils'
export const industryList=[
    { label: '全部行业', value: '全部行业' },
    { label: 'IT设备', value: 'IT设备' },
    { label: '专用机械', value: '专用机械' },
    { label: '中成药', value: '中成药' },
    { label: '乳制品', value: '乳制品' },
    { label: '互联网', value: '互联网' },
    { label: '仓储物流', value: '仓储物流' },
    { label: '供气供热', value: '供气供热' },
    { label: '保险', value: '保险' },
    { label: '元器件', value: '元器件' },
    { label: '全国地产', value: '全国地产' },
    { label: '公共交通', value: '公共交通' },
    { label: '公路', value: '公路' },
    { label: '其他商业', value: '其他商业' },
    { label: '其他建材', value: '其他建材' },
    { label: '农业综合', value: '农业综合' },
    { label: '农用机械', value: '农用机械' },
    { label: '农药化肥', value: '农药化肥' },
    { label: '出版业', value: '出版业' },
    { label: '化学制药', value: '化学制药' },
    { label: '化工原料', value: '化工原料' },
    { label: '化工机械', value: '化工机械' },
    { label: '化纤', value: '化纤' },
    { label: '区域地产', value: '区域地产' },
    { label: '医疗保健', value: '医疗保健' },
    { label: '医药商业', value: '医药商业' },
    { label: '半导体', value: '半导体' },
    { label: '商品城', value: '商品城' },
    { label: '商贸代理', value: '商贸代理' },
    { label: '啤酒', value: '啤酒' },
    { label: '园区开发', value: '园区开发' },
    { label: '塑料', value: '塑料' },
    { label: '多元金融', value: '多元金融' },
    { label: '家居用品', value: '家居用品' },
    { label: '家用电器', value: '家用电器' },
    { label: '小金属', value: '小金属' },
    { label: '工程机械', value: '工程机械' },
    { label: '广告包装', value: '广告包装' },
    { label: '建筑工程', value: '建筑工程' },
    { label: '影视音像', value: '影视音像' },
    { label: '房产服务', value: '房产服务' },
    { label: '批发业', value: '批发业' },
    { label: '摩托车', value: '摩托车' },
    { label: '文教休闲', value: '文教休闲' },
    { label: '新型电力', value: '新型电力' },
    { label: '旅游景点', value: '旅游景点' },
    { label: '旅游服务', value: '旅游服务' },
    { label: '日用化工', value: '日用化工' },
    { label: '普钢', value: '普钢' },
    { label: '服饰', value: '服饰' },
    { label: '机场', value: '机场' },
    { label: '机床制造', value: '机床制造' },
    { label: '机械基件', value: '机械基件' },
    { label: '林业', value: '林业' },
    { label: '染料涂料', value: '染料涂料' },
    { label: '橡胶', value: '橡胶' },
    { label: '水力发电', value: '水力发电' },
    { label: '水务', value: '水务' },
    { label: '水泥', value: '水泥' },
    { label: '水运', value: '水运' },
    { label: '汽车整车', value: '汽车整车' },
    { label: '汽车服务', value: '汽车服务' },
    { label: '汽车配件', value: '汽车配件' },
    { label: '渔业', value: '渔业' },
    { label: '港口', value: '港口' },
    { label: '火力发电', value: '火力发电' },
    { label: '焦炭加工', value: '焦炭加工' },
    { label: '煤炭开采', value: '煤炭开采' },
    { label: '特种钢', value: '特种钢' },
    { label: '环境保护', value: '环境保护' },
    { label: '玻璃', value: '玻璃' },
    { label: '生物制药', value: '生物制药' },
    { label: '电信运营', value: '电信运营' },
    { label: '电器仪表', value: '电器仪表' },
    { label: '电器连锁', value: '电器连锁' },
    { label: '电气设备', value: '电气设备' },
    { label: '白酒', value: '白酒' },
    { label: '百货', value: '百货' },
    { label: '石油加工', value: '石油加工' },
    { label: '石油开采', value: '石油开采' },
    { label: '石油贸易', value: '石油贸易' },
    { label: '矿物制品', value: '矿物制品' },
    { label: '种植业', value: '种植业' },
    { label: '空运', value: '空运' },
    { label: '红黄酒', value: '红黄酒' },
    { label: '纺织', value: '纺织' },
    { label: '纺织机械', value: '纺织机械' },
    { label: '综合类', value: '综合类' },
    { label: '航空', value: '航空' },
    { label: '船舶', value: '船舶' },
    { label: '装修装饰', value: '装修装饰' },
    { label: '证券', value: '证券' },
    { label: '超市连锁', value: '超市连锁' },
    { label: '路桥', value: '路桥' },
    { label: '软件服务', value: '软件服务' },
    { label: '软饮料', value: '软饮料' },
    { label: '轻工机械', value: '轻工机械' },
    { label: '运输设备', value: '运输设备' },
    { label: '通信设备', value: '通信设备' },
    { label: '造纸', value: '造纸' },
    { label: '酒店餐饮', value: '酒店餐饮' },
    { label: '钢加工', value: '钢加工' },
    { label: '铁路', value: '铁路' },
    { label: '铅锌', value: '铅锌' },
    { label: '铜', value: '铜' },
    { label: '铝', value: '铝' },
    { label: '银行', value: '银行' },
    { label: '陶瓷', value: '陶瓷' },
    { label: '食品', value: '食品' },
    { label: '饲料', value: '饲料' },
    { label: '黄金', value: '黄金' }]
export const Area=[
    { label: '全部地域', value: '全部地域' },
    { label: '上海', value: '上海' },
    { label: '云南', value: '云南' },
    { label: '内蒙', value: '内蒙' },
    { label: '北京', value: '北京' },
    { label: '吉林', value: '吉林' },
    { label: '四川', value: '四川' },
    { label: '天津', value: '天津' },
    { label: '宁夏', value: '宁夏' },
    { label: '安徽', value: '安徽' },
    { label: '山东', value: '山东' },
    { label: '山西', value: '山西' },
    { label: '广东', value: '广东' },
    { label: '广西', value: '广西' },
    { label: '新疆', value: '新疆' },
    { label: '江苏', value: '江苏' },
    { label: '江西', value: '江西' },
    { label: '河北', value: '河北' },
    { label: '河南', value: '河南' },
    { label: '浙江', value: '浙江' },
    { label: '海南', value: '海南' },
    { label: '深圳', value: '深圳' },
    { label: '湖北', value: '湖北' },
    { label: '湖南', value: '湖南' },
    { label: '甘肃', value: '甘肃' },
    { label: '福建', value: '福建' },
    { label: '西藏', value: '西藏' },
    { label: '贵州', value: '贵州' },
    { label: '辽宁', value: '辽宁' },
    { label: '重庆', value: '重庆' },
    { label: '陕西', value: '陕西' },
    { label: '青海', value: '青海' },
    { label: '黑龙江', value: '黑龙江' }
  ]
    export const McTableConfig=[
    {   
        label:'代码',
        property:"ts_code",
        value:1,

        
    },
    {
        label:'名称',
        property:"name",
        value:1,
    },
    {   
        label:'收盘价',
        sortable:true,
        property:"close"
        
    },
    {   
        label:'涨跌额',
        sortable:true,
        property:"change"
        
    },
    {   
        label:'涨跌幅',
        sortable:'custom',
        property:"pct_chg",
        formatter:toPercent
        
    },
    {   
        label:'换手率',
        sortable:true,
        property:"turnover_rate",
        formatter:toPercent

        
    },
    {   
        label:'成交额',
        sortable:true,
        property:"amount",
        formatter:qian
        
    },
    {   
        label:'成交量',
        sortable:true,
        property:"vol",
        
        
    },
    {   
        label:'市盈率',
        sortable:true,
        property:"pe"
    },
    {   
        label:'市值',
        sortable:true,
        property:"total_mv",
        formatter:wan
    },
    {   
        label:'操作',
      
        
    },
    
]
export const newStockConfig=[{
    label:'代码',
    property:"ts_code",
},{
    label:"名称",
    property:"name",
    
},{
    label:"上网发行日期",
    property:"ipo_date",
    
},{
    label:"上市日期",
    property:"issue_date",
    
},{
    label:"发行日期总量",
    property:"amount",
    formatter:wan
    
},{
    label:"上网发行总量",
    property:"market_amount",
    formatter:wan
},{
    label:"发行价格",
    property:"price",
    
},{
    label:"市盈率",
    property:"pe",
    
},{
    label:"个人申购上限",
    property:"limit_amount",
    formatter:wan
},{
    label:"募集资金",
    property:"funds",
    formatter:yi
    
},{
    label:"中签率",
    property:"ballot",
    
}, {   
    label:'操作',
  
    
},]
export const zixuanTableConfig=[
    {   
        label:'代码',
        property:"ts_code",
        value:1,  
        width:80  
    },
    {
        label:'名称',
        property:"name",
        value:1,
        width:80
    },
    {   
        label:'收盘价',
     
        property:"close",
        width:80,
        sortable:true,
    },
    {   
        label:'涨跌额',
       
        property:"change",
        width:80
        
    },
    {   
        label:'涨跌幅',
       
        property:"pct_chg",
        formatter:toPercent,
        width:80,
        sortable:true,
        
    },
    {   
        label:'换手率',
       
        property:"turnover_rate",
        formatter:toPercent,
        width:80
        
    },
    {   
        label:'成交额',
       
        property:"amount",
        formatter:qian,
        width:80
    },
    {   
        label:'成交量',
       
        property:"vol",
        
        width:80
        
    },
   
    {   
        label:'操作',
      
        
    },
    
]
export const winnerListConfig=[
    {   
        label:'代码',
        property:"ts_code",
        value:1,  
        width:80  
    },
    {
        label:'名称',
        property:"name",
        value:1,
        width:80
    },
    {
        label:'日期',
        property:"trade_date",
        value:1,
        width:80
    },
    {   
        label:'收盘价',
     
        property:"close",
        width:80
    },
    {   
        label:'涨跌幅',
       
        property:"pct_change",
        formatter:toPercent,
        width:80
        
    },
    {   
        label:'换手率',
       
        property:"turnover_rate",
        formatter:toPercent,
        width:80
        
    },
    {   
        label:'成交额',
        property:"amount",
        formatter:qian,
        width:80
    },
    {   
        label:'龙虎榜净买额占比',
        property:"net_rate",
        width:80
        
    },
    {   
        label:'龙虎榜成交额占比',
        property:"amount_rate",
        width:80
        
    },
    {   
        label:'当日流通市值',
       
        property:"float_values",
        formatter:wan,
        width:80
        
    },
    {   
        label:'上榜理由',
       
        property:"reason",
    },
    {   
        label:'上榜理由',
       
        property:"group_concat(reason)",
    },
  
   
    {   
        label:'操作',
        width:100
        
    },
]
export const selectStockConfig=[
    {
        label:'pe',
        name:'市盈率',
        min:0,
        max:1000,
    },
    {
        label:'pb',
        name:'市净率',
        min:1,
        max:2000,
    },
    {
        label:'ps',
        name:'市销率',
        min:2,
        max:3000,
    },
    {
        label:'total_mv',
        name:'总市值(万元)',
        min:1,
        max:2000,
    },
    {
        label:'circ_mv',
        name:'流通市值(万元)',
        min:2,
        max:3000,
    },
    {
        label:'total_share',
        name:'总股本(万股)',
        min:1,
        max:2000,
    },
    {
        label:'float_share',
        name:'流通股本(万股)',
        min:2,
        max:3000,
    },
    {
        label:'pct_chg',
        name:'涨跌幅',
        min:1,
        max:2000,
    },
    {
        label:'amount',
        name:'成交额(千元)',
        min:2,
        max:3000,
    },
    {
        label:'vol',
        name:'成交量(手)',
        min:2,
        max:3000,
        
    },
    {
        label:'close',
        name:'当前价',
        min:2,
        max:3000,
    },
    {
        label:'turnover_rate',
        name:'换手率(%)',
        min:2,
        max:3000,
    },
    {
        label:'volume_ration',
        name:'量比',
        min:2,
        max:3000,
    },
   
]
export const dayKDataConfig=[
    {   
        label:'代码',
        property:"ts_code",
        value:1,
        
    }, {   
        label:'名称',
        property:"name",
        value:1,

        
    }, {   
        label:'开盘价',
        property:"open",
        value:1,

        
    }, {   
        label:'最低价',
        property:"low",
        value:1,

        
    }, {   
        label:'当前价',
        property:"close",
        value:1,

        
    }, {   
        label:'涨跌额',
        property:"change",
        value:1,
        

        
    }, {   
        label:'成交量',
        property:"vol",
        value:1,
       

        
    }, {   
        label:'昨收',
        property:"pre_close",
        value:1,

        
    }, {   
        label:'成交额',
        property:"amount",
        value:1,
        formatter:qian

        
    }, {   
        label:'涨跌幅',
        property:"pct_chg",
        value:1,
        formatter:toPercent

        
    }, {   
        label:'换手率',
        property:"turnover_rate",
        value:1,
        formatter:toPercent
        
    }, {   
        label:'量比',
        property:"volume_ratio",
        value:1,

        
    }, {   
        label:'市盈率',
        property:"pe",
        value:1,

        
    }, {   
        label:'市净率',
        property:"pb",
        value:1,

        
    }, {   
        label:'市销率',
        property:"ps",
        value:1,

        
    }, {   
        label:'总股本',
        property:"total_share",
        value:1,
        formatter:wan

        
    },
    {   
        label:'流通股本',
        property:"float_share",
        value:1,
        formatter:wan

        
    },
    {   
        label:'总市值',
        property:"total_mv",
        value:1,
        formatter:wan

        
    },
    {   
        label:'流通市值',
        property:"circ_mv",
        value:1,
        formatter:wan

        
    },
    {   
        label:'操作',
      
        
    },
]
export const topListConfig=[{   
    label:'当前价',
    property:"close",
    value:1,

    
}, {   
    label:'涨跌额',
    property:"change",
    value:1,
    

    
}, {   
    label:'成交量',
    property:"vol",
    value:1,
   

    
}, {   
    label:'成交额',
    property:"amount",
    value:1,
    

    
}, {   
    label:'涨跌幅',
    property:"pct_chg",
    value:1,
   

    
}, {   
    label:'换手率',
    property:"turnover_rate",
    value:1,
   
    
}, {   
    label:'量比',
    property:"volume_ratio",
    value:1,

    
}, {   
    label:'市盈率',
    property:"pe",
    value:1,

    
}, {   
    label:'市净率',
    property:"pb",
    value:1,

    
}, {   
    label:'市销率',
    property:"ps",
    value:1,

    
}, {   
    label:'总股本',
    property:"total_share",
    value:1,
  

    
},
{   
    label:'流通股本',
    property:"float_share",
    value:1,
  

    
},
{   
    label:'总市值',
    property:"total_mv",
    value:1,
   
    
},
{   
    label:'流通市值',
    property:"circ_mv",
    value:1,
    

    
},]
export const limitupdownConfig=[
    {
        label:'代码',
        property:'ts_code',
    },
    {
        label:'名称',
        property:'name',
    },
    {
        label:'涨跌幅',
        property:'pct_chg',
    },
    {
        label:'振幅',
        property:'amp',
    },
    {
        label:'当前价',
        property:"close",
       
    },
    {
        label:'封单金额',
        property:"fd_amount",
       
    },
    {label:'首次涨跌停时间',
        property:'first_time'
    },
    {label:'最后封板时间',
        property:'last_time'
    },
    {label:'跌停/涨停',
    property:'limitUD',
    formatter:limit
},
{label:'操作',

},


]
