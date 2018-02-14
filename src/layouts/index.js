import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar';

import './index.css'

const Header = () => (
  <div
    style={{
      background: '#45aaf2',
      marginBottom: '1.45rem',
      borderBottom: '1px solid #2d98da',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="logo"
        >
          Alex Bachuk
        </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="JavaScript developer"
      meta={[
        { name: 'description', content: 'Building sotware for over 9 years' },
        { name: 'keywords', content: 'Node.js, React.js, JavaScript, Software, Leadership' },
      ]}
    />
    <Header />
    <Sidebar />
    <div className="container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
