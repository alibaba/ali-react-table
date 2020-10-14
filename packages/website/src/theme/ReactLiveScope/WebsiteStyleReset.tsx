import React from 'react'
import { createGlobalStyle } from 'styled-components'

// 让 prettier 可以格式化
const styled = { globalStyle: createGlobalStyle }

const FusionStylePart1 = styled.globalStyle`
  // 放到 body 内增加 CSS 优先级
  body {
    a {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-link-color);
        text-decoration: var(--ifm-link-decoration);
      }
    }

    .menu__link {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-menu-color);
      }
    }

    .menu__link--active {
      &,
      :link,
      :hover,
      :visited {
        color: var(--ifm-menu-color-active);
      }
    }

    a.navbar__link {
      color: var(--ifm-navbar-link-color);
    }

    a.navbar__link:hover,
    a.navbar__link--active {
      color: var(--ifm-navbar-link-hover-color);
      text-decoration: none;
    }

    strong {
      font-weight: var(--ifm-font-weight-bold);
    }

    a.table-of-contents__link {
      color: var(--ifm-toc-link-color);
    }

    a.table-of-contents__link:hover,
    a.table-of-contents__link--active {
      color: var(--ifm-color-primary);
      text-decoration: none;
    }

    a.navbar__brand {
      color: var(--ifm-navbar-link-color);
    }

    .alert a {
      &,
      :hover,
      :link,
      :visited {
        color: var(--ifm-alert-color);
        text-decoration: underline;
      }
    }
  }

  body {
    p {
      font-size: inherit;
      line-height: inherit;
    }

    ul,
    ol {
      margin-bottom: var(--ifm-list-margin);
      margin-top: 0;
      padding-left: var(--ifm-list-left-padding);
    }

    ul {
      list-style: disc;
    }
    ol {
      list-style: decimal;
    }

    ol ul {
      list-style-type: circle;
    }

    ul,
    ol {
      margin-bottom: var(--ifm-list-margin);
      margin-top: 0;
      padding-left: var(--ifm-list-left-padding);
    }
    ol ol,
    ul ol {
      list-style-type: lower-roman;
    }
    ul ul,
    ul ol,
    ol ol,
    ol ul {
      margin-bottom: 0;
      margin-top: 0;
    }
    ul ul ol,
    ul ol ol,
    ol ul ol,
    ol ol ol {
      list-style-type: lower-alpha;
    }
  }

  html body {
    font-family: var(--ifm-font-family-base);
    color: var(--ifm-font-color-base);
    line-height: var(--ifm-line-height-base);
    font-size: var(--ifm-font-size-base);
  }
`

const FusionStylePart2 = styled.globalStyle`
  // 放到 body 内增加 CSS 优先级
  body {
    code {
      background-color: var(--ifm-code-background);
      border-radius: var(--ifm-code-border-radius);
      color: var(--ifm-code-color);
      font-family: var(--ifm-font-family-monospace);
      font-size: var(--ifm-code-font-size);
      margin: 0;
      padding: var(--ifm-code-padding-vertical) var(--ifm-code-padding-horizontal);
    }
    a code {
      color: inherit;
    }
    pre {
      background-color: var(--ifm-pre-background);
      border-radius: var(--ifm-pre-border-radius);
      color: var(--ifm-pre-color);
      font-family: var(--ifm-font-family-monospace);
      font-size: var(--ifm-code-font-size);
      line-height: var(--ifm-pre-line-height);
      margin-bottom: var(--ifm-spacing-vertical);
      margin-top: 0;
      overflow: auto;
      padding: var(--ifm-pre-padding);
      word-wrap: normal;
    }
    pre code {
      background-color: transparent;
      border: 0;
      display: inline;
      font-size: 100%;
      line-height: inherit;
      margin: 0;
      overflow: visible;
      padding: 0;
      white-space: pre;
      word-break: normal;
      word-wrap: normal;
    }
    kbd {
      background-color: var(--ifm-color-emphasis-0);
      border: 1px solid var(--ifm-color-emphasis-400);
      border-radius: 0.2rem;
      box-shadow: inset 0 -1px 0 var(--ifm-color-emphasis-400);
      color: var(--ifm-color-emphasis-800);
      font: 80% var(--ifm-font-family-monospace);
      padding: 0.15rem 0.3rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--ifm-heading-color);
      font-weight: var(--ifm-heading-font-weight);
      line-height: var(--ifm-heading-line-height);
      margin-bottom: var(--ifm-heading-margin-bottom);
      margin-top: var(--ifm-heading-margin-top);
    }
    h1 {
      font-size: var(--ifm-h1-font-size);
    }
    h2 {
      font-size: var(--ifm-h2-font-size);
    }
    h3 {
      font-size: var(--ifm-h3-font-size);
    }
    h4 {
      font-size: var(--ifm-h4-font-size);
    }
    h5 {
      font-size: var(--ifm-h5-font-size);
    }
    h6 {
      font-size: var(--ifm-h6-font-size);
    }

    strong {
      font-weight: var(--ifm-font-weight-bold);
    }
    a {
      color: var(--ifm-link-color);
      text-decoration: var(--ifm-link-decoration);
    }
    a:hover {
      color: var(--ifm-link-hover-color);
      text-decoration: var(--ifm-link-hover-decoration);
    }
    a:active,
    a:hover {
      outline-width: 0;
    }
    a:not([href]) {
      text-decoration: none;
    }
    p {
      margin-top: 0;
      margin-bottom: var(--ifm-paragraph-margin-bottom);
    }
    blockquote {
      border-left: 6px solid var(--ifm-color-emphasis-300);
      color: var(--ifm-blockquote-color);
      font-size: var(--ifm-blockquote-font-size);
      margin: 0;
      margin-bottom: var(--ifm-spacing-vertical);
      padding: var(--ifm-blockquote-padding-vertical) var(--ifm-blockquote-padding-horizontal);
    }
    blockquote > :first-child {
      margin-top: 0;
    }
    blockquote > :last-child {
      margin-bottom: 0;
    }
    hr {
      border-color: var(--ifm-hr-border-color);
      border-style: solid;
      border-width: var(--ifm-hr-border-width);
      box-sizing: content-box;
      margin: var(--ifm-hr-margin-vertical) 0;
      overflow: hidden;
      padding: 0;
    }
    hr:before {
      content: '';
      display: table;
    }
    hr:after {
      clear: both;
      content: '';
      display: table;
    }
  }
`

/** 重置 fusion 样式给文档网站带来的影响 */
export function WebsiteStyleReset() {
  return (
    <>
      <FusionStylePart1 />
      <FusionStylePart2 />
    </>
  )
}
