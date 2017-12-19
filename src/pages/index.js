import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <p>blogs </p>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={`${post.node.frontmatter.title} ${post.node.frontmatter.date}`}>
        <h3>{post.node.frontmatter.title}</h3>
      </div>
    ))}
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
          }
        }
      }
    }
  }
`