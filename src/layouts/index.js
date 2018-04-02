import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MenuIcon from './menu-white.svg';
import Sidebar from '../components/Sidebar/Sidebar';

import './index.css';

class TemplateWrapper extends Component {
  state = {
    menuOpened: false
  };

  toggleMenu = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  };
  render() {
    return (
      <div>
        <Helmet
          title="Alex Bachuk | JavaScript developer"
          meta={[
            {
              name: 'description',
              content: 'Building sotware for over 9 years'
            },
            {
              name: 'keywords',
              content: 'Node.js, React.js, JavaScript, Software, Leadership'
            }
          ]}
        />
        <div
          className={`content-wrapper ${
            this.state.menuOpened ? 'menu-opened' : 'menu-closed'
          }`}
        >
          <div className={`header ${this.props.location.pathname === '/' ? 'home' : 'internal'}`}>
            <div className="inner-header">
              <h1 style={{ margin: 0 }} className="logo-wrapper">
                <Link to="/" className="logo">
                  Alex Bachuk
                </Link>
              </h1>
              <div className="menu-link" onClick={this.toggleMenu} />
            </div>
            {this.props.location.pathname === '/' &&
              <h3 className="subtitle">my personal blog, tutorials and guides on (mostly) software development and technology</h3>
            }
          </div>
          <div className="container">
            {this.props.children()}
          </div>
        </div>
        <Sidebar menuOpened={this.state.menuOpened} />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
