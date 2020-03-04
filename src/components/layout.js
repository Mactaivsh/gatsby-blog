import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { fonts } from 'gatsby-design-tokens';
import {
  space,
  fontSizes,
  colors,
  lineHeights,
  letterSpacings,
} from '../utils/presets';

import Header from './header';
import media from '../utils/media';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local('.SFNSText-Light'), local('.HelveticaNeueDeskInterface-Light'),
      local('.LucidaGrandeUI'), local('Ubuntu Light'), local('Segoe UI Light'),
      local('Roboto-Light'), local('DroidSans'), local('Tahoma');
  }

  :root {
    font-size: 10px;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: rgba(0, 0, 0, 0.8);
    min-height: 100vh;
    position: relative;
    font-size: 1.6rem;

    *:not[class*=katex] {
      word-break: break-all;
      white-space: normal;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Slab', ${fonts.header} sans-serif;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  p {
    margin: 0 0 1em;
  }

  li {
    line-height: 1.5em;
    margin-top: .5em;
  }

  img {
    max-width: 100%;
  }
  
  code {
    font-family: Menlo,Monaco,"Courier New",Courier,monospace;
    word-break: break-word;
  }

  pre code {
    word-break: normal;
  }

  :not(pre) > code[class*="language-"], pre[class*="language-text"] {
    color: inherit;
    margin: 0 .2rem;
    font-size: medium;
  }

  :not(pre) > code[class*="language-"] {
    padding: 2px 4px;
    background: #f5f5f5;
    color: #333;
    border: 1px solid #ccc;
    white-space: nowrap;
  }

  .gatsby-highlight {
    position: relative;
    -webkit-overflow-scrolling: touch;
  }
  
  .gatsby-highlight pre[class*='language-'] {
    padding: 1.5em 1em;
    border: 0;
    -webkit-overflow-scrolling: touch;
  }

  .gatsby-highlight pre[class*='language-']::before {
    background: #ddd;
    color: ${colors.text.header};
    font-size: ${fontSizes[0]};
    font-family: ${fonts.monospace.join(';')};
    letter-spacing: ${letterSpacings.tracked};
    line-height: ${lineHeights.solid};
    padding: ${space[1]} ${space[2]};
    position: absolute;
    left: 0;
    top: 0;
    text-align: right;
    text-transform: uppercase;
  }

  .gatsby-highlight pre[class='language-javascript']::before {
    content: 'js';
    background: #f7df1e;
  }

  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
    background: #f7df1e;
  }

  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
    background: #61dafb;
  }

  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'GraphQL';
    background: #E10098;
    color: #fff;
  }

  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
    background: #005A9C;
    color: #fff;
  }

  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
    background: #ff9800;
    color: #fff;
  }

  .gatsby-highlight pre[class='language-mdx']::before {
    content: 'mdx';
    background: #f9ac00;
    color: #fff;
    fontWeight: 400;
  }

  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
  }

  .gatsby-highlight pre[class='language-c']::before {
    content: 'c';
    color: #fff;
    background: #555555;
  }

  .gatsby-highlight pre[class='language-java']::before {
    content: 'java';
    color: #fff;
    background: #b07219;
  }

  .gatsby-highlight pre[class='language-sh']::before {
    content: 'sh';
  }

  .gatsby-highlight pre[class='language-bash']::before {
    content: 'bash';
  }

  .gatsby-highlight pre[class='language-yaml']::before {
    content: 'yaml';
    background: #ffa8df;
  }

  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'md';
  }

  .gatsby-highlight pre[class='language-json']::before, .gatsby-highlight pre[class='language-json5']::before {
    content: 'json';
    background: linen;
  }

  .gatsby-highlight pre[class='language-diff']::before {
    content: 'diff';
    background: #e6ffed;
  }

  .gatsby-highlight pre[class='language-text']::before {
    content: 'text';
    background: #fff;
  }

  .gatsby-highlight pre[class='language-flow']::before {
    content: 'flow';
    background: #E8BD36;
  }

  .gatsby-code-title {
    padding: 0.5em 1em;
    font-family: ${fonts.monospace.join(';')};
    background-color: #444;
    color: white;
    z-index: 0;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }

  .gatsby-code-title + .gatsby-highlight pre {
    margin-top: 0;
  }

  .gatsby-resp-image-figcaption {
    padding-top: 0.5rem;
    text-align: center;
  }
`;

const Footer = styled.footer`
  display: block;
  height: 6rem;
`;

const Content = styled.div`
  width: 60%;
  max-width: 728px;
  margin: 0 auto;

  ${media.tablet`
    width: 80%;
  `}
`;

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
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
            <Header title={data.site.siteMetadata.title} />
            <Content>{children}</Content>
            <Footer />
            <GlobalStyles />
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
