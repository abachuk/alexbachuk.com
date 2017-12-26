import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './postExcerpt.css'

class PostExcerpt extends Component {
  render() {
    const { frontmatter } = this.props.post.node;

    return (
      <div className="post-excerpt">
        <div className="featured-image" style={{backgroundImage: `url(${frontmatter.image})`}} />
        <h3>{frontmatter.title}</h3>
        <h5>{frontmatter.date}</h5>
        <p>{this.props.post.node.excerpt}</p>
        <a href={`/${frontmatter.slug}`}>Read More</a>
      </div>
    );
  }
}

PostExcerpt.propTypes = {

};

export default PostExcerpt;