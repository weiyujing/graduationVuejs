<template>
    
 <div style="margin-left:30px">
        <StockDetail :stockcode="stockcode" />
        <Comment></Comment>
      
    </div>
</template>

<script>
import Comment from '../shouye/Comment'
import StockDetail from "../pages/StockDetail";
    export default {
        components: {
    StockDetail,
    Comment,
  },
        props:{
        },
        mounted () {
              this.$nextTick(()=>{
      this.stockcode=this.$route.params.stock;
    })
  this.stockcode=this.$route.params.stock;
        },
        data() {
            return {
                stockcode:'',
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>