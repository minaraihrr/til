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

### リスト（配列）
#### リストを繰り返す  
```
a = [1, 2, 3]

for x in a:
    print(x)

for i in range(len(a)):
    print(a[i])
```
出力結果  
```
1
2
3
1
2
3
```

#### 入力からリストを作る
```
# 文字列
a = input().split()

# 数値
a = list(map(int, input().split()))
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
#### リストに値を追加・削除する
```
a = [0]

# 末尾に追加
a.append(1)
print(a)    # [0, 1]

# 末尾から削除
a.pop()
print(a)    # [0]
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
# 文字列 -> リスト
print("a b c".split())             # ['a', 'b', 'c']

# リスト -> 文字列
print(", ".join(["a", "b", "c"]))  # a, b, c
```

### 組込関数
#### sum
```
print(sum([1, 3, -5, 2]))
```

#### sort, reverse
```
l = [1, 3, -5, 2]

l.sort()
print(l)      # [-5, 1, 2, 3]

l.reverse()
print(l)      # [3, 2, 1, -5]
```

#### sorted（非破壊）
```
l = [1, 3, -5, 2]
new_l = sorted(l)

print(l)      # [1, 3, -5, 2]
print(new_l)  # [-5, 1, 2, 3]
```

#### all, any
```
l = [1, 3, -5, 2]

# l に含まれる値が全て正か？
print(all([v>0 for v in l]))    # False

# l に偶数が含まれるか？
print(any([v%2==0 for v in l])) # True
```
