import React from 'react'

import {node} from 'prop-types'

import {classes as classesProps} from 'common/classes'
import Cursor from 'common/components/Cursor'
import Navigation from 'common/components/Navigation'
import Parallax from 'common/components/Parallax'

const Base = ({classes, children}) => (
  <Parallax>
    <Cursor />
    <header>
      <Navigation />
    </header>
    <main className={classes.main}>{children}</main>
  </Parallax>
)

Base.propTypes = {
  ...classesProps,
  children: node.isRequired,
}

Base.defaultProps = {}

export default Base
