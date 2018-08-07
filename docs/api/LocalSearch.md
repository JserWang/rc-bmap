# LocalSearch

## renderOptions
* 类型  Object
* 默认值 {}
* 描述 结果呈现设置

## onMarkersSet
* 类型  Function
* 默认值 undefined
* 描述 标注添加完成后的回调函数。 参数： pois: Array，通过marker属性可得到其对应的标注

## onInfoHtmlSet
* 类型  Function
* 默认值 undefined
* 描述  标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的Dom元素

## onResultsHtmlSet
* 类型  Function
* 默认值 undefined
* 描述 结果列表添加完成后的回调函数。 参数： container: HTMLElement，结果列表所用的HTML元素 

## pageCapacity
* 类型  Function
* 默认值 undefined
* 描述  设置每页容量，取值范围：1 - 100，对于多关键字检索，容量表示每个关键字的数量，如果有2个关键字，则实际检索结果数量范围为：2 - 200

## onSearchComplete
* 类型  Function
* 默认值  undefined
* 描述 检索完成后的回调函数。 参数：results: LocalResult或Array 如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致
