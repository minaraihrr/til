## git 最初のpush
1. githubリポジトリ作成  
※url:https://github.com/userid/repository-name
2. cd 作業ディレクトリ
3. git init
4. git add .  
※「.」は全ファイル
5. git commit -m "first-commit"  
※""内はコミットメッセージ
6. git branch -M main
7. git remote add origin https://github.com/userid/repository-name.git  
※1のutl.git
8. git push -u origin main

## git 2回目以降
1. git add .  
※ファイルを選択する場合は.をファイル名に
2. git commit -m "update-xxx"
3. git push