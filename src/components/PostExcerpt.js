import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import './postExcerpt.css'

class PostExcerpt extends Component {
  render() {
    const { frontmatter } = this.props.post.node;

    return (
      <div className="post-excerpt">
        {/*<div className="featured-image" style={{backgroundImage: `url(${frontmatter.image})`}} />*/}
        <h5 className="date">{frontmatter.date}</h5>
        <h3 className="title">
          <Link to={frontmatter.slug}>{frontmatter.title}</Link> 
        </h3>
        
        {/*<p>{this.props.post.node.excerpt}</p>*/}
        {/*<a href={`/${frontmatter.slug}`}>Read More</a>*/}
      </div>
    );
  }
}

PostExcerpt.propTypes = {

};

export default PostExcerpt;