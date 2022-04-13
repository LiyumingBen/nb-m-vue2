<template>
  <demo-section>
    <demo-block title="按钮类型">
      <nb-button type="success" style="margin: 15px 0 15px 15px">主要按钮</nb-button>
      <nb-button type="primary" style="margin-left: 15px">信息按钮</nb-button>
      <nb-button type="default" style="margin-left: 15px">默认按钮</nb-button>
      <nb-button type="danger"  style="margin-left: 15px">危险按钮</nb-button>
      <nb-button type="warning" style="margin-left: 15px">警告按钮</nb-button>
    </demo-block>

    <demo-block title="朴素按钮">
      <nb-button type="success" plain style="margin: 15px 0 15px 15px">主要按钮</nb-button>
      <nb-button type="primary" plain style="margin-left: 15px">信息按钮</nb-button>
      <nb-button type="default" plain style="margin-left: 15px">默认按钮</nb-button>
      <nb-button type="danger"  plain style="margin-left: 15px">危险按钮</nb-button>
      <nb-button type="warning" plain style="margin-left: 15px">警告按钮</nb-button>
    </demo-block>

    <demo-block title="细边框">
      <nb-button type="success" hairline style="margin: 15px 0 15px 15px">主要按钮</nb-button>
      <nb-button type="primary" hairline style="margin-left: 15px">信息按钮</nb-button>
      <nb-button type="default" hairline style="margin-left: 15px">默认按钮</nb-button>
      <nb-button type="danger"  hairline style="margin-left: 15px">危险按钮</nb-button>
      <nb-button type="warning" hairline style="margin-left: 15px">警告按钮</nb-button>
    </demo-block>

    <demo-block title="禁用状态">
      <nb-button type="success" disabled style="margin: 15px 0 15px 15px">主要按钮</nb-button>
      <nb-button type="primary" disabled style="margin-left: 15px">信息按钮</nb-button>
      <nb-button type="default" disabled style="margin-left: 15px">默认按钮</nb-button>
      <nb-button type="danger"  disabled style="margin-left: 15px">危险按钮</nb-button>
      <nb-button type="warning" disabled style="margin-left: 15px">警告按钮</nb-button>
    </demo-block>
    <demo-block title="按钮形状">
      <nb-button type="success" round style="margin: 15px 0 15px 15px">圆形按钮</nb-button>
      <nb-button type="primary" square style="margin-left: 15px">方形按钮</nb-button>
    </demo-block>
    <demo-block title="按钮尺寸">
      <nb-button type="primary"  size='large' style="margin: 15px 0 15px 15px">大号按钮</nb-button>
      <nb-button type="primary"  style="margin-left: 15px">普通按钮</nb-button>
      <nb-button type="primary"  size='small' style="margin-left: 15px">小型按钮</nb-button>
      <nb-button type="primary"   size='mini' style="margin-left: 15px">迷你按钮</nb-button>
    </demo-block>
    <demo-block title="块级元素">
      <nb-button type="primary"  block style="margin: 15px 0 15px 15px">块级元素</nb-button>
    </demo-block>
    <demo-block title="自定义颜色">
      <nb-button color="#7232dd"  style="margin: 15px 0 15px 15px">单色按钮</nb-button>
      <nb-button plain color="#7232dd" style="margin: 15px 0 15px 15px">单色按钮</nb-button>
      <nb-button color="linear-gradient(to right, #ff6034, #ee0a24)" style="margin: 15px 0 15px 15px">渐变色按钮</nb-button>
    </demo-block>
  </demo-section>
</template>
