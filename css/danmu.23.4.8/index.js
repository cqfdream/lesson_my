let date =[ 
    {value:'周杰伦的听妈妈的话，我听了十年',time:5,color:'red',speed:1,fontSize:23},
    {value:'周杰伦的听妈妈的话，我听了十年',time:10,color:'#00a1f5',speed:1,fontSize:20},
    {value:'周杰伦的听妈妈的话，我听了十年',time:7,color:'black',speed:1,fontSize:22},
    {value:'周杰伦的听妈妈的话，我听了十年',time:15},
    {value:'周杰伦的听妈妈的话，我听了十年',time:20,color:'#fff',speed:1,fontSize:23}
]

let canvas = document .getElementById('canvas')
let video = document .getElementById('video')
   

function CanvasBarrage (canvas, video,opts={}){
if (!canvas || !video) return
 this.canvas = canvas
 this.video = video
 //让canvas宽高和video保持一致
 this.canvas.width = video.width
 this.canvas.height = video.height

 //准备画布
 this.ctx = canvas.getContext('2d')

 //初始化弹幕
 let defopts = {
    color: '#000',
    speed: 1.5,
    opacity: 0.5,
    fontSize: 20,
    data: []

 }
 //把弹幕整理好挂到this上
 Object.assign(this,defopts,opts) 

 //用于判断视频是否为播放状态的开关变量
 this.isPaussed = true


 //拿到所有已经在画布上准备好了的弹幕
 this.barrages = this.data.map((item)=> { //barrages 里装的是一条一条被修饰的弹幕
    return new Barrages (item,this)

 })

}

//统筹规划，所有的弹幕都应该出现 渲染canvas绘制点的弹幕
CanvasBarrage.prototype.render = function () {
    //先清理画布
   this.clear()
   //渲染弹幕
   this.renderBarrage()
   if (!this.isPaussed){//视频是在播放状态
    requestAnimationFrame(this.render.bind(this))// 递归

   }
}

CanvasBarrage.prototype.clear = function () {
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
}
 
CanvasBarrage.prototype.renderBarrage = function (){
let time = this.video.currenTime

this.barrages.forEach(barrage =>{
 if(time >= barrage.time){
    //此时这条弹幕才渲染，控制弹幕的位置，移动弹幕的位置
 }
})
}

let canvasBarrage = new CanvasBarrage(acvas,video,{data})
//canvasBarrage.render()  所有弹幕开始按规则出现