---
title: "README"
date: "2020-01-28"
category: "Tech"
---

# webStein

## Git

### フォーマット

- 1 行目：変更内容の要約（タイトル、概要）
- 2 行目：空行
- 3 行目：変更した理由（内容、詳細）

### コミットの種類

- fix：バグ修正
- add：新規（ファイル）機能追加
- update：機能修正（バグではない）
- remove：削除（ファイル）

## 事前準備

### nodebrew をインストール

```Bash
curl -L git.io/nodebrew | perl - setup
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

### Node をインストール

```Bash
nodebrew install-binary latest
nodebrew use v{使いたいバージョン}
```

## Gatsby プロジェクトの作成

### プロジェクトをダウンロード

new の後は任意の名前

```Bash
gatsby new blog
gatsby new webstein https://github.com/gatsbyjs/gatsby-starter-blog
```

## 必要なプラグインをインストールする

### GatsbyCLI をインストール

```Bash
npm i -g gatsby-cli
```

### Typescript のインストール

```Bash
npm install --save-dev typescript
```

### ファイルを管理するツールのインストール

```Bash
npm i gatsby-source-filesystem
```

## ブラウザに表示する

### Develop

```Bash
gatsby develop // デフォルトは"8000"
gatsby develop -p 4000 // 別のポートを使用する場合
```

以下の URL をブラウザで表示

```Bash
http://localhost:8000/
```
