import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/shouye/firstpage'
import MarketCenter from '@/components/pages/MarketCenter'
import McTable from '@/components/pages/McTable'
import Concept from '@/components/pages/Concept'
/* import StockDetail from '@/components/pages/StockDetail' */
import stockInfo from '@/components/shouye/stockInfo'
import PersonCenter from '@/components/person/personCenter'
import ManageStock from '@/components/person/manageStock'
import PersonData from '@/components/person/PersonData'
import MarketIndex from '@/components/pages/MarketIndex'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)}
export default new Router({
  routes: [
    {
      path: '/',
      children: 
      [
         {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
           path: '',
           name: 'FirstPage',
          component: FirstPage
         },
         {
          path: 'MarketCenter',
          children:
          [{
            path:'',
              name:'McTable',
              component:McTable
          },
            {
              path:'MarketIndex',
              name:'MarketIndex',
              component:MarketIndex
            },
          ],
          name: 'MarketCenter',
          component: MarketCenter
        }, 
        {
          path:'Concept',
          name:'Concept',
          component:Concept 
        },{
          path:'NewStock',
          name:'NewStock',
          component:resolve=>(require(["@/components/shouye/newStock"],resolve))
        },{
          path:'PersonCenter',
          children:
          [
            {
              path:'ManageStock',
              name:'ManageStock',
              component:ManageStock 
            },{
              path:'PersonData',
              name:'PersonData',
              component:PersonData 
            }
          ],
          name:'PersonCenter',
          component:PersonCenter
        },{ 
            path:'/stockInfo/:stock',
            name:'stockInfo',
            children:[{
              path:'',
              name:'StockChart',
              component:resolve=>(require(["@/components/pages/StockChart"],resolve)) 
            },{
              path:'/companyInfo/:stock',
              name:'companyInfo',
              component:resolve=>(require(["@/components/pages/companyInfo"],resolve)) 
            },{
              path:'/transationInfo/:stock',
              name:'transationInfo',
              component:resolve=>(require(["@/components/pages/block_trade"],resolve)) 
            },{
              path:'/income/:stock',
              name:'income',
              component:resolve=>(require(["@/components/pages/income"],resolve)) 
            }],
            component:stockInfo 
        },{ 
          path:'winnersList',
          name:'winnersList',
          component:resolve=>(require(["@/components/shouye/winnersList"],resolve))
      },{ 
        path:'selectStock',
        name:'selectStock',
        component:resolve=>(require(["@/components/shouye/selectStock"],resolve))
    },{ 
      path:'topList',
      name:'topList',
      component:resolve=>(require(["@/components/shouye/topList"],resolve))
  }
      ],
      name: 'HelloWorld',
      component: HelloWorld
   },//第一个路由
  

  ] //router
})
