<template>
<div >
   <div class="ques">{{index+1}}.{{questions[index].txt}}:</div>
    <div v-if="index===0">
    <div class="radio">
      <div v-for="(item) in questions[index].options" :key="item" class="div2">
           <input type="radio" :value="item" name="radio" @click="get_val($event,index)">{{item}}
      </div>
    </div>
    <div class="div3">
       <button @click="next_ques">下一步</button>
       <button @click="reset">重置</button>
    </div>
  </div>
    <div v-if="index===1">
       <div class="check">
      <div v-for="(item) in questions[index].options" :key="item" class="div2">
           <input type="checkbox" :value="item" name="radio" @click="get_val($event,index)">{{item}}
      </div>
    </div>
    <div class="div3">
       <button @click="next_ques">下一步</button>
       <button @click="last_ques">上一步</button>
       <button @click="reset">重置</button>
    </div>
    </div>
    <div v-if="index===2" >
      <textarea :placeholder="questions[index].placeholder" class="input1" v-model="questions[index].answ"></textarea>
      <div class="div3">
       <button @click="submit">提交</button>
       <button @click="last_ques">上一步</button>
       <button @click="reset">重置</button>
    </div>
    </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      questions:[
      {
       txt:"请问您的性别是",
       options:["男","女","保密"],
       options_min:1,
       options_max:1,
       answ:[],     
      },
      {
       txt:"请问您的兴趣爱好",
       options:["看书","游泳","跑步","看电影","听音乐"],
       options_min:2,
       options_max:3,
       answ:[],     
      },
       {
       txt:"请介绍一下自己",
       placeholder:"不少于100字",
       min_size:100,
       answ:"",     
      },
      ],
      index:0,
    }
  },
  methods:{
    get_val(e,index) {
      if(this.get_checknum()>this.questions[index].options_max){
        alert("最多选择数量为"+this.questions[index].options_max);
        return
      }
      this.questions[index].answ.push(e.currentTarget.value);
      console.log(this.questions[index].answ)
    },
    next_ques(){
      let index=this.index;
      if(this.get_checknum()<this.questions[index].options_min){
        alert("最少选择数量为"+this.questions[index].options_min);
        return
      }
      this.index++;
    },
    last_ques(){
      this.index--;
      let index=this.index;
      setTimeout(() => {
      let doms=document.getElementsByTagName('input');
      for(let i=0;i<doms.length;i++){
      if(this.questions[index].answ.indexOf(doms[i].value)!=-1)
        doms[i].checked=true;
      }
      }, 10);//恢复上一次操作遗留的值，根据结果渲染，应该是符合懒加载的思想
    },
    reset(){
      let doms=document.getElementsByTagName('input');
      console.log(doms);
      for(let i=0;i<doms.length;i++){
        doms[i].checked=false;
      }
    },
    submit(){
      alert("提交成功");
    },
    get_checknum(){
      let doms=document.getElementsByTagName('input');
      console.log(doms);
      let num=0;
      for(let i=0;i<doms.length;i++){
        if(doms[i].checked){
           num++;
        }
      }
      return num;
    }
  },
}
</script>
<style scoped>
div{
  font-size:16px;
  text-align: left;
}
.ques{
  margin-left: 20px;
  margin-bottom: 10px;
}
/* 问卷题目样式 */
.radio{
  display: flex;
  margin-left: 20px;
  flex-direction: row;
  justify-content:flex-start;
}
/* 单选框 */
.check{
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
}
.div2{
  margin-right: 30px;
  margin-bottom: 10px;
}
.div3{
  position: absolute;left: 0%;bottom: 20%;
  width: 100%;height: 10%;display: flex;
  justify-content: center;
}
button{
   border-radius: 15px;
   margin-right: 30px;
   font-size: 20px;
  background-color: white;
   font-family: '楷体';
   width: 30%;
}
button:hover{
   color: white;
  background-color: rgb(76, 0, 255);
}
.input1{
    outline-style: none ;
    overflow: hidden;
    border: 1px solid #ccc; 
    border-radius: 3px;
    padding: 13px 14px;
    width: 90%;
    height: 300px;
    font-size: 14px;
    line-height: normal; /* for non-ie */   
    font-family: "Microsoft soft";
}
/* input{
} */
/* 选择框样式1 */
</style>