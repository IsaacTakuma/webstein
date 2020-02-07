---
title: "ふれてみる | GatsbyJsことはじめ01"
date: "2020-02-06"
category: "gatsby"
heroImage: "gatsby.png"
num: "01"
---

GatsbyJs の導入からブラウザに表示までを解説するよ。

---

## 目次

> - 事前準備
> - Gatsby プロジェクトの作成
> - 必要なプラグインをインストール
> - ブラウザに表示

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
npm i typescript
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
