## Python memo

参考  
https://atcoder.jp/contests/APG4bPython


### 出力
```
print("xxx")        # xxx
print("xxx", 123)   # xxx 123
```

#### 改行なし  
```
print("xxx", end=" ")
print(123)
```
出力結果  
```
xxx 123
```

#### 改行あり  
```
print("xxx"); print(123)
```
出力結果  
```
xxx
123
```

### 四則演算
```
print(7 + 2)  # 9
print(7 - 2)  # 5
print(7 * 2)  # 14
print(7 // 2) # 3
print(7 / 2)  # 3.5
print(7 % 2)  # 1
```

#### divmod  
```
q, r = divmod(20, 7)
print(q)      # 2
print(r)      # 6
```

### 変数宣言, 代入
```
strX = "xxx"
intY = 123
listZ = []
```

#### Swap(入れ替え)  
```
x, y = 2, 3
print(x)    # 2
print(y)    # 3
x, y = y, x
print(x)    # 3
print(y)    # 2
```

### 標準入力の受取り
```
strInput = input()
numInput = int(input())

print("Hello, " + strInput)
print(numInput + 1)
```
入力  
```
xxx
1
```
出力結果  
```
Hello, xxx
2
```

#### 空白区切りの1行を変数に格納  
```
a, b, c = input().split()
d, e, f = map(int, input().split())

print("Hello,", a, b, c)
print(d + 1, e + 1, f + 1)
```
入力  
```
xxx yyy zzz
1 2 3
```
出力結果  
```
Hello, xxx yyy zzz
2 3 4
```

#### 複数行の入力を取り出す  
```
for i in range(3):
    print(input())
```
入力  
```
xxx
yyy
zzz
```
出力結果  
```
xxx
yyy
zzz
```

### if文
```
target = int(input())

if target < 10:
    print("target は 10 より小さい")
elif target > 20:
    print("target は 10 より小さくなくて、20 より大きい")
else:
    print("target は 10 より小さくなくて、20 より大きくもない")
```

### for文
```
for i in range(3):
    print("Hello for:", i)
```
出力結果  
```
Hello for: 0
Hello for: 1
Hello for: 2
```

#### break  
```
for i in range(5):
    if i == 3:
        print("ぬける")
        break
 
    print(i)
 
print("終了")
```
出力結果  
```
0
1
2
ぬける
終了
```

#### continue  
```
for i in range(5):
    if i == 3:
        print("とばす")
        continue
 
    print(i)
 
print("終了")
```
出力結果  
```
0
1
2
とばす
4
終了
```

#### 配列を繰り返す  
```
a = [3, 1, 4, 1, 5] 
for x in a:
    print(x)
```
出力結果  
```
3
1
4
1
5
```
