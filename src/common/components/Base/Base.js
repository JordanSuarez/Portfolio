import React from 'react'

import {node} from 'prop-types'

import Navigation from 'common/components/Navigation'
import Parallax from 'common/components/Parallax'

const Base = ({children}) => (
  <>
    <Navigation />
    <Parallax>{children}</Parallax>
  </>
)

Base.propTypes = {
  children: node.isRequired,
}

Base.defaultProps = {}

export default Base
