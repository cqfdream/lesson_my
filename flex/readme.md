<<<<<<< HEAD
# 界面构建能力
- 栅格系统
    页面布局的基础
- 先做布局，不要急于做样式  BFC
    BFC 里所有的块级元素从上到下排列
    从外到内
    1.先写html 结构
    2.再来写样式
        取类名
        类名词汇量 简单 贴切
    3.行列布局 row(行，排) container(容器) box（盒子）
    4.样式只是体力活 块级元素默认占整的一行
- 从块级改变布局
    :nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素.
    n 可以是数字、关键词或公式。可用来设定特定子元素的背景颜色等属性，n从1开始

    display
        display 属性是 CSS 中最重要的属性之一，主要用来控制元素的布局，通过 display 属性您可以设置元素是否显示以及如何显示。

        根据元素类型的不同，每个元素都有一个默认的 display 属性值，例如<div>默认的 display 属性值为 block（块级元素），而<span>默认的 display 属性值为 inline（行内元素），您也可以手动将元素的 display 属性转换为其它值。display 属性的可选值如下：

        值	         描述
        none	    隐藏元素
        block	    将元素设置为块级元素
        inline	    将元素设置为内联元素
        list-item	将元素设置为列表项目
        inline-block	将元素设置为行内块元素
        table	    将元素设置为块元素级的表格（类似<table>）
        inline-table	将元素设置为内联元素级的表格（类似<table>）
        table-caption	将元素设置为表格的标题（类似<caption>）
        table-cell	将元素设置为表格的单元格（类似<td>和<th>）
=======
# 界面构建能力
- 栅格系统
    页面布局的基础
- 先做布局，不要急于做样式  BFC
    BFC 里所有的块级元素从上到下排列
    从外到内
    1.先写html 结构
    2.再来写样式
        取类名
        类名词汇量 简单 贴切
    3.行列布局 row(行，排) container(容器) box（盒子）
    4.样式只是体力活 块级元素默认占整的一行
- 从块级改变布局
    :nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素.
    n 可以是数字、关键词或公式。可用来设定特定子元素的背景颜色等属性，n从1开始

    display
        display 属性是 CSS 中最重要的属性之一，主要用来控制元素的布局，通过 display 属性您可以设置元素是否显示以及如何显示。

        根据元素类型的不同，每个元素都有一个默认的 display 属性值，例如<div>默认的 display 属性值为 block（块级元素），而<span>默认的 display 属性值为 inline（行内元素），您也可以手动将元素的 display 属性转换为其它值。display 属性的可选值如下：

        值	         描述
        none	    隐藏元素
        block	    将元素设置为块级元素
        inline	    将元素设置为内联元素
        list-item	将元素设置为列表项目
        inline-block	将元素设置为行内块元素
        table	    将元素设置为块元素级的表格（类似<table>）
        inline-table	将元素设置为内联元素级的表格（类似<table>）
        table-caption	将元素设置为表格的标题（类似<caption>）
        table-cell	将元素设置为表格的单元格（类似<td>和<th>）
>>>>>>> 34a2f95 (aa)
        table-row	将元素设置为表格的行（类似<tr>）