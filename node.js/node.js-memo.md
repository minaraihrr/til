## node.js memo

### node.jsでコンソールアプリ作成

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

### node.jsアプリでJSONの読み込み
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

### node.jsでのファイル操作  
<details><summary>ファイル読み取り、作成・更新</summary>

```JavaScript
const fs = require("fs");

//ファイル読み取り
fs.readFile("./testRead.txt", (err, data) => {
    if (err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

//ファイル作成・更新
fs.writeFile("./textWrite.txt", "new file", (err) => {
    if (err){
        console.log(err);
    } else {
        console.log("done");
    }
});
```
</details>  


fsは非同期処理のためfunctionを呼び出したい場合コールバックを使うかPromiseを使う。
<details><summary>function呼び出し</summary>

```JavaScript
// callback
const fs = require("fs");

function getText(callback){
    fs.readFile("./testRead.txt", (err, data) => {
        if (err) {
            callback("error");
        } else {
            callback(data.toString());
        }
    });
}

getText((text) => {
    console.log("読み込んだテキスト:", text);
});

```
```JavaScript
// Promise
const fs = require("fs");

function getText() {
    return new Promise((resolve, reject) => {
        fs.readFile("./testRead.txt", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
}

async function main() {
    try {
        const text = await getText();
        console.log("読み込んだテキスト:", text);
    } catch (err) {
        console.error("エラー:", err);
    }
}

main();
```

</details>