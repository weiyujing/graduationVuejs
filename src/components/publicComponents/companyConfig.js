import {numberFormat,toPercent,wan,qian,bai,yi,limit} from '../../utils'
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
export const block_tradeConfig=[
    {
        label:'代码',
        property:'ts_code',
    },
    {
        label:'交易日历',
        property:'trade_date',
    },
    {
        label:'成交价',
        property:'price',
    },
    {
        label:'成交量',
        property:'vol',
        formatter:wan,
    },
    {
        label:'成交金额',
        property:'amount',
    },
    {
        label:'买方营业部',
        property:'buyer',
        width:260
    },
    {
        label:'卖方营业部',
        property:'seller',
        width:260
       
    },
]
export const top10_holders=[
    {
        label:'代码',
        property:'ts_code',
    },
    {
        label:'股东名称',
        property:'holder_name',
    },
    {
        label:'公告日期',
        property:'ann_date',
    },
    {
        label:'报告期',
        property:'end_date',
    },
   
    {
        label:'持有数量（股）',
        property:'hold_amount',
    },
    {
        label:'持有比例',
        property:'hold_ratio',
    },
]
export const holdernumber=[
    {
        label:'代码',
        property:'ts_code',
    },
    {
        label:'股东户数',
        property:'holder_num',
    },
    {
        label:'公告日期',
        property:'ann_date',
    },
    {
        label:'截止日期',
        property:'end_date',
    },
]
//股东增减持
export const stk_holdertrade=[
    {
        label:'代码',
        property:'ts_code',
    },
    {
        label:'股东名称',
        property:'holder_name',
        width:'200px',
    },
    {
        label:'股东类型G高管P个人C公司',
        property:'holder_type',
    },
    {
        label:'	类型IN增持DE减持',
        property:'in_de',
    },
    {
        label:'变动数量',
        property:'change_vol',
        formatter:numberFormat
    } , {
        label:'	占流通比例（%）',
        property:'change_ratio',
        formatter:toPercent,
    },
    {
        label:'变动后持股',
        property:'after_share',
        formatter:numberFormat
    }  ,{
        label:'	变动后占流通比例（%）',
        property:'after_ratio',
        formatter:toPercent,
    },
    {
        label:'平均价格',
        property:'avg_price',
    },
    {
        label:'持股总数',
        property:'total_share',
        formatter:numberFormat
    },
   
]

//业绩预告
export const forecast=[
    {
        label:'代码',
        property:'ts_code',
    },
    {
        label:'公告日期',
        property:'ann_date',
      
    },
    {
        label:'报告期',
        property:'end_date',
    },
    {
        label:'	业绩预告类型',
        property:'type',
    },
    {
        label:'预告净利润变动幅度下限（%）',
        property:'p_change_min',
        formatter:toPercent
    } , {
        label:'	预告净利润变动幅度上限（%）',
        property:'p_change_max',
        formatter:toPercent,
    },
   /*  {
        label:'预告净利润下限',
        property:'net_profit_min',
        formatter:wan
    }  ,{
        label:'	预告净利润上限',
        property:'net_profit_max',
        formatter:wan,
    }, */
    {
        label:'上年同期归属母公司净利润',
        property:'last_parent_net',
    },
    {
        label:'业绩预告摘要',
        property:'summary',
       
    },
    {
        label:'业绩变动原因',
        property:'change_reason',
        width:'300px'
       
    },
    
]

//主营业务构成
export const fina_mainbz=[
    {
        label:'代码',
        property:'ts_code',
    },  {
        label:'报告期',
        property:'end_date',
    },  {
        label:'主营业务来源',
        property:'bz_item',
    },  {
        label:'主营业务收入',
        property:'bz_sales',
    },  {
        label:'主营业务利润',
        property:'bz_profit',
    }, {
        label:'主营业务成本',
        property:'bz_cost',
    },
]