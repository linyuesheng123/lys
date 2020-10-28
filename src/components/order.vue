<template>
  <div class="container">
    <div class="order_bar">
      <div class="order_div1">送货清单</div>
      <div class="order_div2">价格说明</div>
      <div class="order_div2">返回修改购物车</div>
    </div>
    <div class="order_div0">
      <div class="order_div3">
          <div class="order_div3_1">
             <p style="width:70%; text-align: left">配送方式</p>
             <p style="width:30%; text-align: right;color:blue">对应商品</p>
          </div>
          <div class="order_div3_2">
            <button class="btn3_2">青木快递</button>
            <button class="btn3_2">上门自提</button>
          </div>
          <div class="order_div3_3">
            <p style="margin-left:5px;;width:30%; text-align: left;color:grey;letter-spacing:5px">标准达</p>
            <p style="width:50%;text-align: left;color:grey;letter-spacing:1px">
              预计{{arrive_time}}送达
            </p>
            <p style="flex-grow:1">修改</p>
          </div>
      </div>
      <div class="order_div4">
          <p style="margin-left:5px;width:100%;height:10%;text-align:left;letter-spacing:2px">商家:青木直营</p>
          <div class="order_div4_1">
            <img src="../../static/img/1.png" class="img_4_1">
            <p style="width:20%">木盘子</p>
            <p style="width:20%;color:red">10.9</p>
            <p style="width:20%">X2</p>
            <p style="width:20%">有货</p>
          </div>
      </div>
    </div>
          <div class="line_div"></div>
          <div class="order_div5">
            <p style="width:100%;height:20%;text-align:left">发票信息</p>
            <div class="order_div5_1">
              <p style="margin-left:10%;width:30%">电子普通发票</p>
              <p style="width:15%">个人</p>
              <p style="width:20%">商品明细</p>
              <p style="flex-grow:1;color:blue">修改</p>
            </div>
            <p style="width:95%;margin-left:5%;text-align:left;flow-grow:1;height:15%">使用优惠券/礼品券/抵用券</p>
          </div>
          <div class="line_div" style="margin-top:30px"></div>
          <div class="order_div6">
             <p style="width:20%">两件商品</p>
              <p style="width:20%">总商品金额:</p>
             <p style="width:30%">$21.8</p>
          </div>
           <div class="order_div6">
            <p style="width:20%">运费:</p>
            <p style="width:30%">$6.8</p>
           </div>
           <div class="order_div6">
            <p style="width:20%">运费券:</p>
            <p style="width:30%">-$6.8</p>
           </div>
           <div class="order_div6">
            <p style="width:20%">应付总额:</p>
            <p style="width:30%">$21.8</p>
           </div>
           <button class="order_div7">
             确认支付
           </button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      arrive_time:"10月28日15:00"//应该得设置date类型之后再解析,这里就稍微简化一点代码
    }
  }
}
</script>
<style scoped>
.line_div{
  width:80%;
  margin-left: 10%;
  margin-top: 10px;
  height: 5px;
  background-color: gainsboro;
}
p{
  cursor: pointer;
}
.container{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.order_bar{
  width:100%;
  height:100px;
  display: flex;justify-content: flex-start;
}
.order_div0{
  height: 200px;
  display: flex;
  flex-direction: row;
}
.order_div1{
  width: 60%;
  font-size: 18px;
}
.order_div2{
  width: 10%;
  flex-grow: 1;
  font-size: 18px;
  color: aqua;
}
.order_div3{
  width: 40%;height: 200px;
  background-color: gainsboro;
  flex-direction: column;
}
.order_div4{
  background-color: aqua;
  flex-grow: 1;height: 200px;
  flex-direction: column;
}
.order_div5{
  margin-top: 10px;
  flex-grow: 1;height: 150px;
  flex-direction: column;
}
.order_div6{
  height: 30px;justify-content: flex-end;
  flex-direction: row;width: 100%;display: flex;
}
.order_div7{
  margin-top: 5%;height: 50px;
  width: 15%;
  background-color: red;
  align-self: flex-end;
}
.order_div5_1{
  margin-top: 10px;display: flex;width:40%;
  height: 40%;flex-direction: row;
}
.order_div4_1{
  height: 50%;display: flex;
  justify-content: flex-start;
}

.img_4_1{
  width: 20%;
  margin-left: 10px;
  margin-top: 10px;
  height: 80%;
}
.order_div3_1{
  display: flex;height: 20%;
  justify-content: flex-start;
}
.order_div3_2{
  display: flex;height: 30%;
  justify-content: center;
}
.order_div3_3{
  display: flex;height: 20%;
  justify-content: flex-start;
}
.btn3_2{
  width: 50%;
  text-align: center;
}
.btn3_2:hover{
  border: solid 1px red;
}
</style>