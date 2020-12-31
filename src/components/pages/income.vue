<template>
   <div>
     <section style="padding:0 30px">
       <el-breadcrumb separator-class="el-icon-arrow-right">利润表</el-breadcrumb>
      <el-table
      :data="tableData"
      style="width: 100%;"
      :row-style="{ height: '0' }"
      size="small"
      stripe
      border
       :cell-style="columnStyle"  
       :header-cell-style="{'line-height':'50px',background:'#f3f6fc'}"  
    >
     <el-table-column
        v-for="(item, index) in tableConfig"
        :key="index"
        :label="item.label"
        :prop="item.property"
        :width="item.width || ''"
        :formatter='item.formatter'
      ></el-table-column>
      </el-table>
       <!-- <el-table
         :show-header="true"
         :data="tableData"
         
         :span-method="objectSpanMethod"
         border
         :cell-style="columnStyle"
         style="width: calc(100% - 20px); margin-left: 20px"
       >
         
         <el-table-column width="180" prop="name"></el-table-column>
         <el-table-column prop="value" :formatter="format"></el-table-column>
         <el-table-column width="180" prop="name"></el-table-column>
         <el-table-column prop="value" :formatter="format"></el-table-column>
       </el-table> -->
     </section>
   </div>
</template>
<script>
import mytable from '../publicComponents/mytable.vue';
import {numberFormat} from '../../utils'
let config={"营业总收入":'total_revenue','利息收入':'int_income','利息支出':'int_exp','手续费及佣金净收入':'n_commis_income','手续费及佣金支出':'comm_exp','营业总成本':'total_cogs',
'营业税金及附加':'biz_tax_surchg','业务及管理费':'admin_exp','资产减值损失':'assets_impair_loss','营业利润':'operate_profit','加：营业外收入':'non_oper_income',
'减：营业外支出':'non_oper_exp','利润总额':'total_profit','减：所得税费用':'income_tax',
'净利润':'n_income','基本每股收益':'basic_eps','稀释每股收益':'diluted_eps','其他综合收益':'oth_compr_income','综合收益总额':'t_compr_income'}
export default {
  components: { mytable },
  name: "mallMember-detail",
  props:{
     
      type:{
          type:Number,
          default:0
      }
  },
  watch: {
      type(newValue, oldValue) {
          this.getCompanyInfoData();
      }
  },
  data() {
    return {
      numberFormat:numberFormat,
    tableConfig:[{
      label:'名称',
      property:'name',
      
    },{
      label:'2020三季报',
      property:'20200930',
       formatter:numberFormat,
    },{
      label:'2020中报',
      property:'20200630',
       formatter:numberFormat,
    },{
      label:'2020一季报',
      property:'20200331',
       formatter:numberFormat,
    },{
      label:'2019年报',
      property:'20191231',
       formatter:numberFormat,
    },{
      label:'2019中报',
      property:'20190930',
       formatter:numberFormat,
    }],
      companyInfo :config,
      stockcode:'',
    //请求回来的数据
     tableData:[],
    };
  },
  mounted () {
      
        this.$nextTick(()=>{
      this.stockcode=this.$route.params.stock;
    })
  this.stockcode=this.$route.params.stock;
      this.getCompanyInfoData();
  },
  computed: {
  
  },
  methods: {
      getCompanyInfoData(){
          this.tableData=[]
      
          this.$axios
        .post("/api/stockData/income", {
          stockcode: this.stockcode,
          
        })
        .then((res) => {
          res = res.data;
          if (res.code == 0) {
              let key =  Object.keys(this.companyInfo);
            for(let v in this.companyInfo){
                let temp={}
                temp.name = v;
                temp['20200930']=res.data[0][this.companyInfo[v]];
                temp['20200630']=res.data[1][this.companyInfo[v]];
                temp['20200331']=res.data[2][this.companyInfo[v]];
                temp['20191231']=res.data[3][this.companyInfo[v]];
                temp['20190930']=res.data[4][this.companyInfo[v]];
                this.tableData.push(temp)
            }
          
            this.$message({
              message: res.msg,
              type: "success",
            });
          }
        });
      },
    // 自定义列背景色
    columnStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0 ) {
        //第三第四列的背景色就改变了2和3都是列数的下标
        return "background:#f3f6fc;";
      }else{
        return "background:#ffffff;";
      }
    },
    // 和并列
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      /* if (columnIndex === 0) {
        if (rowIndex % 4 === 0) {
          return {
            rowspan: 4,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      } */
    },
    format(r,l,value){
        if(value=='M'){
            return '女'
        }else if(value=='F'){
            return '男'
        }else{
            return value
        }
    }
  }
};
</script>

<style scoped>
.el-breadcrumb {
  width: cala(100% - 20px);
  height: 40px;
  line-height: 30px;
  background-color: #f3f6fc;
 font-size: 20px;
 font-weight: bold;
 color:gray;
  padding: 5px 0 3px 10px;
}
</style>
