---
title: "新しく固定ページを追加する | GatsbyJsことはじめ03"
date: "2020-02-08"
category: "gatsby"
heroImage: "gatsby.png"
num: "03"
---

Gatsby で Wordpress でいう固定ページ（ex. About ページ,会社概要）を追加する方法を解説するよ。

---

## 固定ページの場所

`src/pages`の中に`〇〇.js`を追加すると新しくページができる。

## 実際に追加する

### テンプレート

`hogehoge`に任意の名前をいれてね。

```js
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const hogehoge = () => (
  <Layout>
    <SEO title="ここにページタイトルをいれる" />
    /* ここに内容をいれる */
  </Layout>
)

export default hogehoge
```

### この Web サイトの場合

次にこの Web サイトの About ページを見てみよう

```js
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <div>
      <h1
        style={{
          margin: "0 0 1em 0",
        }}
      >
        This is about page
      </h1>
      <p>
        このサイトは静的サイトの制作方法を学ぶためにGatsbyJSの技術を使用して制作したブログです。
      </p>
      <p>今後拡張していく予定。</p>
      <ul
        style={{
          margin: "1em 0",
          padding: "0 0 0 1.5em",
        }}
      >
        <li>
          <a href="https://twitter.com/isaacmaenu">twitter</a>
        </li>
        <li>
          <a href="https://github.com/IsaacTakuma">github</a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default AboutPage
```
