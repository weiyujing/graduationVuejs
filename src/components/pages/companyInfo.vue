<template>
   <div>
     <section>
       <el-table
         :show-header="false"
         :data="tableData"
         :span-method="objectSpanMethod"
         border
         :cell-style="columnStyle"
         style="width: calc(100% - 20px); margin-left: 20px"
       >
         <!-- <el-table-column prop="id" label="ID" width="240">
           <template slot-scope="scope">
             <div>
               <img :src="scope.row.id|setPicUrl" />
             </div>
           </template>
         </el-table-column> -->
         <el-table-column width="180" prop="name"></el-table-column>
         <el-table-column prop="value" :formatter="format"></el-table-column>
       </el-table>
     </section>
   </div>
</template>
<script>
export default {
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
      companyInfo : [],
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
          switch(this.type){
              case 0:
              this.companyInfo = {'股票代码':'ts_code','法人代表':'chairman','总经理':"manager",'董秘':'secretary','注册资本':'reg_capital','注册日期':"setup_date","所在省份":"province","公司介绍":"introduction","公司主页":"website","主要业务及产品":"main_business"};
              break;
              case 1:
              this.companyInfo = {'股票代码':'ts_code','公告日期':'ann_date','姓名':"name",'性别':'gender','岗位':'title',"学历":'edu',"国籍":'national','出生年月':'birthday','上任日期':'begin_date','离任日期':'end_date'};
              break;
               case 2:
              this.companyInfo = {'股票代码':'ts_code','公告日期':'ann_date','标题':'title','内容':'content'};
              break;
          }
          this.$axios
        .post("/api/stockData/companyInfo", {
          stockcode: this.stockcode,
          type: this.type,
        })
        .then((res) => {
          res = res.data;
          if (res.code == 0) {
              let key =  Object.keys(this.companyInfo);
            for(let v in this.companyInfo){
                let temp={}
                temp.name = v;
                temp.value=res.data[0][this.companyInfo[v]];
                this.tableData.push(temp)
            }
            console.log(this.tableData)
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


