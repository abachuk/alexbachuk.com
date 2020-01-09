// @flow strict
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Book from "../components/Book";
import { useSiteMetadata } from "../hooks";

const BookTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const {
    title: pageTitle,
    description: pageDescription,
    socialImage
  } = frontmatter;
  const metaDescription =
    pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}
    >
      <Sidebar />
      <Book title={pageTitle} meta={frontmatter}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Book>
    </Layout>
  );
};

export const query = graphql`
  query BookBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        bookLink
        cover
        category
        dateFinished
      }
    }
  }
`;

export default BookTemplate;
