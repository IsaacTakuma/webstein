---
title: "レイアウトを変更する | GatsbyJsことはじめ02"
date: "2020-02-07"
category: "gatsby"
heroImage: "gatsby.png"
num: "02"
---

ページのレイアウトを構成する layout.js について今回解説するよ。

---

## 目次

> - layout.js について
> - フッターのコンポーネントを追加する

## layout.js について

layout.js では名前の通りページのレイアウトを構成するコンポーネントのこと。
複数のページで共通するヘッダーやフッター、サイドバーなどのパーツを読み込んでレイアウトする。

## フッターのコンポーネントを追加する

デフォルトのテーマでは layout.js にフッター部分があるで、これを切り取り別のコンポーネントにしよう。

layout.js の中にある以下のコードを削除

```html
<footer>
  © {new Date().getFullYear()}, Built with {` `}
  <a href="https://www.gatsbyjs.org">Gatsby</a>
</footer>
```

components ファイル内に footer.js を新規作成して以下のコードを記述

```js
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <p>
      <small>
        &copy; Copyright {new Date().getFullYear()} {siteTitle} All Rights
        Reserved.
      </small>
    </p>
  </footer>
)

export default Footer
```

次に compornents ファイル内にある layout.js を以下に修正

```js
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
```

これでフッター部分を別のファイルにきりとることができた。

ここまでやったあと`gatsby develop`で無事に表示されるか確認。
