import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      //marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem 0.6rem`,
        textAlign: `center`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: `museo-slab,serif`,
            fontWeight: 300,
            fontStyle: `normal`,
            color: `white`,
            textDecoration: `none`,
            textAlign: `center`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
