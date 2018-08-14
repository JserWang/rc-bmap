# AutoComplete

## input
* 类型：`string | HTMLElement`
* 默认值：`undefined`
* 描述：文本输入框元素或其id

## events
* 类型：`Object`
* 默认值：`undefined`
* 描述：绑定事件

| 事件 | 描述 |
| ---- | ---- |
| onconfirm | 回车选中某条记录后触发 |
| onhighlight | 键盘或者鼠标移动，某条记录高亮之后 |

## searchComplete
* 类型：`Function`
* 默认值：`undefined`
* 描述：在input框中输入字符后，发起列表检索，完成后的回调函数
