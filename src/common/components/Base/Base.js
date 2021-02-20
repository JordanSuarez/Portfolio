import React from 'react'

import {node} from 'prop-types'

import {classes as classesProps} from 'common/classes'
import Navigation from 'common/components/Navigation'

const Base = ({children, classes}) => (
  <div className={classes.root}>
    <Navigation />
    {children}
  </div>
)

Base.propTypes = {
  children: node.isRequired,
  ...classesProps,
}

Base.defaultProps = {}

export default Base
