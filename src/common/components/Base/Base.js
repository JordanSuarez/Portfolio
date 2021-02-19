import React from 'react'

import {node} from 'prop-types'

import {classes as classesProps} from 'common/classes'
import Navigation from 'common/components/Navigation'
import Parallax from 'common/components/Parallax'

const Base = ({children, classes}) => (
  <div className={classes.root}>
    <Navigation />
    <Parallax>{children}</Parallax>
  </div>
)

Base.propTypes = {
  children: node.isRequired,
  ...classesProps,
}

Base.defaultProps = {}

export default Base
