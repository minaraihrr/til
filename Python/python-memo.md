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

### 文字列
#### 文字列の長さ
```
len("abc")
```
#### 文字列を列挙する
```
s = "abc"
for x in s:
    print(x)
```
出力結果  
```
a
b
c
```
#### 文字列 <-> 整数
```
# 文字列 -> 整数
print(int("1") + 1)  # 2

# 整数 -> 文字列
print(str(1) + "1")  # 11
```


#### 文字列 <-> リスト
```
print("a b c".split())             # ['a', 'b', 'c']

# リスト -> 文字列
print(", ".join(["a", "b", "c"]))  # a, b, c
```


### リスト（配列）
#### リストを繰り返す  
```
a = [1, 2, 3] 

for x in a:
    print(x)

for i in range(len(a)):
    print(i, "番目の要素は", a[i], "です")

for i,v in enumerate(a):
    print(i, "番目の要素は", v, "です。")
```
出力結果  
```
1
2
3
0 番目の要素は 1 です
1 番目の要素は 2 です
2 番目の要素は 3 です
0 番目の要素は 1 です。
1 番目の要素は 2 です。
2 番目の要素は 3 です。
```

#### 二次元のリストを繰り返す  
```
a = [[0, 1], [2, 3], [4,5]] 

for x, y in a:
    print(x, y)
```
出力結果  
```
0 1
2 3
4 5
```

#### 入力からリストを作る
```
# 文字列
a = input().split()

# 数値
a = list(map(int, input().split()))
b = [int(c) for c in input().split()]
```

#### 入力から二次元配列を取得する
```
N, M = list(map(int, input().split()))

# for文
a = []
for i in range(N):
    a.append(list(map(int, input().split())))

print(a)

# 内包表記
b = [list(map(int, input().split())) for _ in range(N)]
print(b)
```
入力  
```
2 3
1 3 5
2 4 6
10 30 50
20 40 60
```
出力  
```
[[1, 3, 5], [2, 4, 6]]
[[10, 30, 50], [20, 40, 60]]
```

#### リストを出力する
```
a = [9, 9, 7, 3]

# a の要素を空白区切りで出力する
print(*a)

# a の要素を改行区切りで出力する
for x in a:
    print(x)
```

#### スライス
```
a = [3, 1, 4, 1, 5]

# a[1] から a[3] までの 3 要素からなるリストを作る
print(a[1:4])   # [1, 4, 1]

# a[0:5] を作る (リストを複製する)
print(a[:])     # [3, 1, 4, 1, 5]

# a[1:4] から 2 要素ごとに取り出したリストを作る
print(a[1:4:2])  # [1, 1]
``` 

#### append, pop
```
a = [0]

# 末尾に追加
a.append(1)
print(a)    # [0, 1]

# 末尾から削除
a.pop()
print(a)    # [0]
```

#### sort, reverse
```
l = [1, 3, -5, 2]

l.sort()
print(l)      # [-5, 1, 2, 3]

l.reverse()
print(l)      # [3, 2, 1, -5]
```

### 組込関数
#### sorted（非破壊）
```
l = [1, 3, -5, 2]
new_l = sorted(l)

print(l)      # [1, 3, -5, 2]
print(new_l)  # [-5, 1, 2, 3]
```

#### sum
```
print(sum([1, 3, -5, 2]))  # 1
```

#### all, any
```
l = [1, 3, -5, 2]

# l に含まれる値が全て正か？
print(all([v>0 for v in l]))    # False

# l に偶数が含まれるか？
print(any([v%2==0 for v in l])) # True
```

### 内包表記
```
# 入力から数値リストを取得
b = [int(c) for c in input().split()]

# if文によるフィルタリング
l = [1, 2, 3, 4]

l_only_even = [v for v in l if v%2==0]
l_only_odd = [v for v in l if v%2==1]

print(l_only_even)  # [2, 4]
print(l_only_odd)   # [1, 3]
```
