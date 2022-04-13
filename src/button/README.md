# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 引入

```js
import { createApp } from 'vue';
import { Button } from 'nbt';

const app = createApp();
app.use(Button);
```

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

```html
<nb-button type="primary">主要按钮</nb-button>
<nb-button type="success">成功按钮</nb-button>
<nb-button type="default">默认按钮</nb-button>
<nb-button type="warning">警告按钮</nb-button>
<nb-button type="danger">危险按钮</nb-button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```html
<nb-button plain type="primary">朴素按钮</nb-button>
<nb-button plain type="primary">朴素按钮</nb-button>
```

### 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

```html
<nb-button plain hairline type="primary">细边框按钮</nb-button>
<nb-button plain hairline type="primary">细边框按钮</nb-button>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<nb-button disabled type="primary">禁用状态</nb-button>
<nb-button disabled type="primary">禁用状态</nb-button>
```
### 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆形按钮。

```html
<nb-button square type="primary">方形按钮</nb-button>
<nb-button round type="primary">圆形按钮</nb-button>
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

```html
<nb-button type="primary" size="large">大号按钮</nb-button>
<nb-button type="primary" size="normal">普通按钮</nb-button>
<nb-button type="primary" size="small">小型按钮</nb-button>
<nb-button type="primary" size="mini">迷你按钮</nb-button>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

```html
<nb-button type="primary" block>块级元素</nb-button>
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```html
<nb-button color="#7232dd">单色按钮</nb-button>
<nb-button color="#7232dd" plain>单色按钮</nb-button>
<nb-button color="linear-gradient(to right, #ff6034, #ee0a24)">
  渐变色按钮
</nb-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为 `primary` `success` `warning` `danger` | _string_ | `default` |
| size | 尺寸，可选值为 `large` `small` `mini` | _string_ | `normal` |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | _string_ | - |
| block | 是否为块级元素 | _boolean_ | `false` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆形按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |