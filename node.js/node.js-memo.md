## node.jsでコンソールアプリ作成

1. ディレクトリ作成、package.jsonの作成  
```
$ mkdir xxxapp
$ cd xxxapp
$ npm init
```
2. xxxappディレクトリ下にjsファイル作成
3. cd xxxapp で 実行  
```
$ node test.js
```

## node.jsアプリでJSONの読み込み
1. モジュール形式の指定  
JSONファイルの読み込みにECMAScriptモジュールを使用できるようにするため、以下のコマンドでpackage.jsonにtypeフィールドを追加してモジュール形式を指定する。
```
$ npm pkg set type=module
```
2. 読み込むJSONファイルを作業ディレクトリ下に保存
3. jsからJSONを読み込む  
```
import { readFile } from 'fs/promises'
const json = JSON.parse(await readFile('./sample.json'))
```