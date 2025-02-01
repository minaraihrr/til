
### GASでhtmlにmetaタグをつける
-> .addMetaTag()を使う

### createHtmlOutputFromFileの場合
.gs
```
function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
```
 
### createTemplateFromFileの場合
.gs
```
function doGet() {
  return HtmlService
    .createTemplateFromFile('Index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
```
