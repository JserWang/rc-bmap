# 通用规则

在接下来的API的类型中，您会看到类型为`Icon`、`Size`、`Point`、`ContextMenu`的类型，在此为您统一解释。

## Icon

``` js
{
  [url: string],
  [size: Size],
  [opts: IconOptions]: {
    [anchor: ControlAnchor],
    [imageSize: Size],
    [imageOffset: Size],
    [infoWindowAnchor: Size],
    [printImageUrl: string],
  }
}
```