# 阿里巴巴双11界面开发
    - 设计稿件
        750px 像素  px是一种尺寸 手机移动页面
        iphone 的小尺寸375pt(物理像素) retina 屏幕设计的标准
    - 前端使命
        html+css+js 一像素不差的还原设计稿
        - 交互
        - css实现视觉效果 css动画
        - 设计稿是静态的 我们要把它搞成动态的
        - 兼容性 还要顾及兼容性，每个设备的屏幕分辨率不同
            阿里巴巴的兼容性达到了99.99%
    
    - css reset 样式重置
        1.抹平不同浏览器的预设样式，从0出发，在所有的浏览器上表现一致
        2.利用 css inherit 继承属性 在body上预设
            如果要不一样，再在子元素上改去覆盖父元素的预设
            浏览器默认字体大小是16px

        - *{}会匹配所有元素，有一些不需要设置的标签也会匹配
            如span标签 这些元素是没有margin 与 padding值的
            一个一个罗列出来则会精准匹配，减少不必要的性能消耗

        - 在body 声明文字的大小 字体 颜色 那么在这个页面所有的字体
            都会沿用这个规格   这是css的继承特性
            子元素会默认继承父元素的样式

    - rem 单位
        1.在移动端，为了兼容，少用甚至不用px
        2.先在css给html标签设置font-size
            37.5px 不固定，每个设备的font-size不一样
            所以用等比例 1/10 去做栅格系统 布局
            如何在不同的设备上，让1rem=设备宽度的1/10
        3.html 的font-size 要动态设置
            首先使用window.innerWidth 拿到设备宽度（返回数字类型数据，没有单位）
            document.documentElement.style.fontSize =  + 'px'
            js里用驼峰式命名法font-size -> fontSize
            字体一定要加像素单位，不然会设置失败

            当浏览器窗口调整到新的高度或宽度时，会触发resize事件
            可以使用window.addEventListener('resize',function())
            调用上面写的函数再进行适配当前窗口尺寸的操作
            addEventListener js中的事件监听方法
