import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    contentfulAsset(title: { eq: "cover" }) {
      file {
        url
      }
    }
  }
`;

const Header = (data) => (
  <div>
    <img src={data.contentfulAsset.file.url} alt="カバー画像" />
  </div>
);

export default () =>
  <StaticQuery query={query} render={Header} />;
