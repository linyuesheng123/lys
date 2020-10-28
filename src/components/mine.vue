<template>
<div>
   <div class="bar">
    <div class="div1"></div>
    <img src="../assets/1.png">
    <button class="btn1">首页</button>
    <button class="btn1">账户设置</button>
    <button class="btn1">评价</button>
    <button class="btn1">消息</button>
  </div>
  <div class="div0">
    <div class="bar2">
       <div class="div2">
         <div class="div3" style="color:black">订单中心</div>
         <a v-for="item in nav_list1" :key="item" class="div3" >{{item}}</a>
       </div>
       <div class="div2">
         <div class="div3" style="color:black">关注中心</div>
         <a v-for="item in nav_list2" :key="item" class="div3" >{{item}}</a>
       </div>
       <div class="div2">
         <div class="div3" style="color:black">资产中心</div>
         <a v-for="item in nav_list3" :key="item" class="div3" >{{item}}</a>
       </div>
    </div>
    <div class="div4">我的订单</div>
    <div class="div5">
      <div class="bar3">
        <div class="bar3_div" v-for="item in nav_list4" :key="item" @click="get_state(item)">{{item}}</div>
      </div>
      <div class="div6" v-if='state==="待付款"'>
           <div class="div7" >
              <div class="div7_dom" v-for="item in nav_list5" :key="item.name">{{item}}</div>
           </div>
           <div class="div7" v-for="item in goods" :key="item.name">
             <div class="div7_dom">{{item.name}}</div>
             <img class="div7_img"  :src="item.img">
             <div class="div7_dom">{{item.num}}</div>
             <div class="div7_dom">{{item.price}}</div>
             <div class="div7_dom">移除</div>
           </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import '../css/mine.css'
export default {
  data(){
    return{
      nav_list1:["我的订单","我的活动","评价晒单"],
      nav_list2:["关注的商品","关注的活动","关注的店铺"],
      nav_list3:["红包","卡券","余额"],
      nav_list4:["全部订单","待付款","待收货","待评价"],
      nav_list5:["商品名称","商品图片","商品数量","商品价格","商品操作"],
      state:"",
      goods:[
        {
          name:"木盘",
          img:"../../static/img/1.png",
          num:"6",
          price:48,
        },
         {
          name:"花瓶吊灯",
          img:"../../static/img/2.png",
          num:"1",
          price:67,
        },
        {
          name:"餐具",
          img:"../../static/img/3.png",
          num:"2",
          price:36,
        },
        {
          name:"亚克力花盆",
          img:"../../static/img/4.jpg",
          num:"1",
          price:89,
        }
      ]
    }
  },
  methods:{
    get_state(state){
      this.state=state;
      console.log(this.state);
    }
  }
}
</script>

<style scoped >


</style>