# css必考题 BFC
Block Formating Context
    Block占一行
Flex Formating Context
    row 不会换行
    我们看到的页面 由哪些规则决定的呢？
    - 文档流
        正常文档流
        脱离文档流
            none
            position 不为static
            float  让元素离开了文档流  父元素拿不到子元素的高度
            父元素 定死高度
            弹性布局 子元素在一行上显示，float在一行
            
- 在正常文档流中
    float 会让元素，离开文档流
    父元素，不能知晓子元素的大小了
    更严重的是，文档流出问题，下面的盒子会盖到float元素
    一定要让父元素拿到高度
    在正常文档流中可以开启新的BFC css魔法就开始上演了
    html是最大的BFC，由浏览器自动创建给与
    - 在BFC环境里，父元素会将浮动元素参与计算（语法规则）两者不在一个BFC中，在一个BFC中不参与计算
    - 创建BFC的方法
        - overflow：hidden
        - display：inline-block
        - position：absolute 
        - position：fixed
        - display：flex 
        - 浮动 float:left
        - dispay: table

    - 在同一个BFC里，垂直方向的距离，由margin决定
    相邻margin会重叠