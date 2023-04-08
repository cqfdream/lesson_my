## 大厂HTML5作品赏析

    - html5 标签
        audio 网易云音乐
        video 爱奇艺 b站
    
    - background-size
    1.移动端 rem w h 是多变的，二pc端没有这个问题
    2.移动端 retain 3倍retain
        40x40 80x80 120x120  200x200
    3.background-size：cover(裁剪，图片的长宽比和配置的长宽比不同时，会放大或缩小图片，然后多余的图片部分会被裁剪，直到与配置适配)  背景图片大小
        等比例缩放背景图片，填满容器
        超出剪裁
        contain
    - 库文件引入的位置
        1.css放到head里
            因为css应该尽早的参与网络的渲染
        2.js要放在body最下面，因为js代码一定会被执行，这会阻塞页面的渲染


    - swiper 滑动组件库的使用
        1.引入swiper组件库
            js css
        2.有固定的html结构
            .swiper-container(设置滑动区域大小)>.swiper-wrapper>.swiper-slide
        3.new Swiper(slector){
            direction:''
        }
    - translate3d(-50%,0,0) 3d  会启动3d加速器 GPU渲染
         translate（-50%，0） 2d
         两者表面上是一样的

    - 使用linear-gradient  生成背景图片
        1.颜色渐变的图片，#f8ddd1,#faece5 73%,#fad2c0
            colorStop
        2.性能优化， 图片下载比较大
            css写的 不需要去额外的下载
            img src 需要下载+显示，需要额外的资源
        3.下载越多，http 并发数越多，会卡
    