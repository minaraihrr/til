## Aランクレベルアップメニュー 座標系での向きの変わる移動

### STEP: 1 マップからの座標取得
https://paiza.jp/works/mondai/a_rank_level_up_problems/a_rank_snake_move_step1

<details><summary>解答</summary>

```JavaScript
const [H, W] = lines[0].split(' ').map((num) => parseInt(num));
for (let i=1; i<=H; i++){
    if(lines[i].includes('#')){
        const y = i-1;
        const x = lines[i].indexOf('#');
        console.log(`${y} ${x}`);
    }
}
```
</details>

### STEP: 2 座標系での移動・方角
https://paiza.jp/works/mondai/a_rank_level_up_problems/a_rank_snake_move_step2

<details><summary>解答</summary>

```JavaScript
// 入力取得
let [y, x, N] = lines[0].split(' ').map((num) => parseInt(num));  // 開始時のy, x座標、移動の回数N
const order = [];    // 移動方向 N, S, E, W
for (let i=1; i<=N; i++){
    order.push(lines[i]);
}

// 移動
for (let i=0; i<N; i++){
    if (order[i] == 'N'){
        // Nへ移動 : y-1
        y -= 1;
    } else if (order[i] == 'S'){
        // Sへ移動 : y+1
        y += 1;
    } else if (order[i] == 'W'){
        // Wへ移動 : x-1
        x -= 1;
    } else if (order[i] == 'E'){
        // Eへ移動 : x+1
        x += 1;
    }
    console.log(`${y} ${x}`);
}
```
</details>

### STEP: 3 座標系での移動・向き
https://paiza.jp/works/mondai/a_rank_level_up_problems/a_rank_snake_move_step3

<details><summary>解答</summary>

```JavaScript
// 入力取得
let y = parseInt(lines[0].split(' ')[0]);  // y座標
let x = parseInt(lines[0].split(' ')[1]);  // x座標
let D = lines[0].split(' ')[2];            // 向いている方角 N, S, E, W
let d = lines[1];                          // 移動の方向 L, R

// 移動の方向を+-で設定
let LR = 1;
if (d == 'L'){
    LR = -1;
}

// 移動
if(D == 'N'){
    // N向きの場合
    // Rへ移動 : x+=1, Lへ移動 : x-=1
    x += LR;
}else if(D == 'S'){
    // S向きの場合
    // Rへ移動 : x-=1, Lへ移動 : x+=1
    x -= LR;
}else if(D == 'E'){
    // E向きの場合
    // Rへ移動 : y+=1, Lへ移動 : y-=1
    y += LR;
}else if(D == 'W'){
    // W向きのとき
    // Rへ移動 : y-=1, Lへ移動 : y+=1
    y -= LR;
}
 
console.log(`${y} ${x}`);
```
</details>

### STEP: 4 座標系での規則的な移動
https://paiza.jp/works/mondai/a_rank_level_up_problems/a_rank_snake_move_step4

<details><summary>解答</summary>

```JavaScript
// 入力取得
let [x, y, N] = lines[0].split(' ').map((num) => parseInt(num));  // 開始時のy, x座標、移動の歩数N

const D = ['N', 'E', 'S', 'W'];    // 方角を時計回りに格納
let d = 0;                         // 移動方向のインデックス番号 開始時N
let maxCnt = 0;                    // 移動マス数
let curCnt = 0;                    // 現在移動マス数

// 移動
for (let i=0; i<N; i++){
    // その方向への移動マス数分移動したら方向転換する
    if (curCnt == maxCnt){
        curCnt = 0;
        d = (d + 1) % 4;
        if (d == 1 || d == 3){
            // EのときとWのとき 移動マス数+1
            maxCnt += 1;
        }
    }

    if (D[d] == 'E'){
        // Eに1進む
        x += 1;
    } else if (D[d] == 'S'){
        // Sに1進む
        y += 1;
    } else if (D[d] == 'W'){
        // Wに1進む
        x -= 1;
    } else if (D[d] == 'N') {
        // Nに1進む
        y -= 1;
    }
    curCnt += 1;

}
console.log(`${x} ${y}`);
```
</details>

### FINAL問題 座標系での向きの変わる移動
https://paiza.jp/works/mondai/a_rank_level_up_problems/a_rank_snake_move_boss

<details><summary>解答</summary>

```JavaScript
// 入力取得
let [x, y, N] = lines[0].split(' ').map((num) => parseInt(num));  // 開始時のy, x座標、移動の回数N

const D = ['N', 'E', 'S', 'W'];      // 方角を時計回りに格納
let d = 0;                           // 移動の向き（=向いている向き）のインデックス番号 開始時N

// 移動
for (let i=1; i<=N; i++){
    // 現在の移動の向きを設定
    if (lines[i] == 'R'){
        // Rの場合+1
        d = (d+1) % 4;
    } else {
        // Lの場合+3
        d = (d+3) % 4;
    }

    if (D[d] == 'N'){
        // Nへ移動 : y-1
        y -= 1;
    } else if (D[d] == 'S'){
        // Sへ移動 : y+1
        y += 1;
    } else if (D[d] == 'W'){
        // Wへ移動 : x-1
        x -= 1;
    } else if (D[d] == 'E'){
        // Eへ移動 : x+1
        x += 1;
    }

    console.log(`${x} ${y}`);
}
```
</details>