import React from 'react'
import Link from 'gatsby-link'
import PostExcerpt from '../components/PostExcerpt'

const IndexPage = ({ data }) => (
  <div>
    <p>blogs </p>
    {data.allMarkdownRemark.edges.map((post, index) => <PostExcerpt key={index} post={post} />)}
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            slug
            categories
          }
        }
      }
    }
  }
`