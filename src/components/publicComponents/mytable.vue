<template>
  <div style="margin-bottom:30px">
    <el-table
      :data="tableData"
      style="width: 100%;"
      :row-style="{ height: '0' }"
      size="small"
      @sort-change='tableChange'
      stripe
      :height="height"
      :cell-style="CellStyle" 
       @selection-change="handleSelectionChange"    
    >
    <el-table-column  
    v-if="selected"
    type="selection"
      width="55">
    </el-table-column>

     <el-table-column
        v-for="(item, index) in tableConfig"
        v-if="item.label == '代码'"
        :key="index"
        :label="item.label"
        :prop="item.property"
        :sortable="item.sortable"
        :width="item.width || ''"
        :formatter='item.formatter'
      ><template slot-scope="scope">
      <el-button
              @click="operation[1].fun(scope.row.ts_code)"
              type="text"
              size="small"
            >
              {{ scope.row.ts_code }}
            </el-button>
      </template>
     </el-table-column>

      <el-table-column
        v-for="(item, index) in tableConfig"
        v-if="item.label == '名称'"
        :key="index"
        :label="item.label"
        :prop="item.property"
        :sortable="item.sortable"
        :width="item.width || ''"
        :formatter='item.formatter'
      ><template slot-scope="scope">
      <el-button
              @click="operation[1].fun(scope.row.ts_code)"
              type="text"
              size="small"
            >
              {{ scope.row.name }}
            </el-button>
      </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in tableConfig"
        v-if="item.label !== '操作' && item.label !== '名称' && item.label !== '代码'"
        :key="index"
        :label="item.label"
        :prop="item.property"
        :sortable="item.sortable"
        :width="item.width || ''"
        :formatter='item.formatter'
      ></el-table-column>

  

      <el-table-column
     
        v-for="(item, index) in tableConfig"
        v-if="item.label == '操作'"
        :key="index"
        :label="item.label"
        :prop="item.property"
        :sortable="item.sortable"
        :width="item.width || ''"
        :formatter='item.formatter'>
      <template slot-scope="scope">
      <el-button
              v-for="(button, index) in operation.slice(0,operation.length-1)"
              :key="index"
              @click="button.fun(scope.row.ts_code)"
              type="text"
              size="small"
            >
              {{ button.name }}
            </el-button></template>
            </el-table-column>
      <!-- <template slot-scope="scope" v-if="item.label == '操作'">
           <el-button
              v-for="(button, index) in operation"
              :key="index"
              @click="button.fun(scope.row.name)"
              type="text"
              size="small"
            >
              {{ button.name }}
            </el-button>
      </template> -->
      
       <!-- <template slot-scope="scope">
            <div v-if="item.label == '操作'">
            <el-button
              v-for="(button, index) in operation"
              :key="index"
              @click="button.fun(scope.row.name)"
              type="text"
              size="small"
            >
              {{ button.name }}
            </el-button>
          </div>
          <div class="cell" v-else>
            {{
              item.formatter
                ? numberFormat(scope.row[item.property])
                : scope.row[item.property]
            }}
          </div>
        </template>  -->
      
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    selected:{
      type:Boolean,
      default:false,
    },
    tableConfig: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    operation: {
      type: Array,
      default: () => {
        return [];
      },
    },
    sortData:{
      type:Function,
      default:()=>{}
    },
    height:{
      type:String,
    },
    SelectionChange:{
        type:Function,
      default:()=>{}
    }
  },
  data() {
    return {
       multipleSelection: []
    }
  },
  methods: {
    tableChange(para){
  console.log(para.order)
  console.log(para.column.label)
  
this.$emit('sortData',para)
},
handleSelectionChange(v){
  this.$emit('SelectionChange',v)
},
    CellStyle(row, column) {
      
      if (row.column.label == "涨跌幅") {
        if (row.row.pct_chg > 0 || row.row.pct_change>0 ) {
          return {
            padding: "0",
            color: "red",
            fontWeight: "bold",
            fontSize: "13px",
          };
        } else {
          return {
            padding: "0",
            color: "green",
            fontWeight: "bold",
            fontSize: "13px",
          };
        }
      }

      if (row.column.label == "涨跌额") {
        if (row.row.change > 0) {
          return {
            padding: "0",
            color: "red",

            fontWeight: "bold",
            fontSize: "13px",
          };
        } else {
          return {
            padding: "0",
            color: "green",
            fontWeight: "bold",
            fontSize: "13px",
          };
        }
      }
    },
  },
};
</script>

<style  scoped>
</style>