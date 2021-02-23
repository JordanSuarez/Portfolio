import React from 'react'

import {node, string} from 'prop-types'
import Jump from 'react-reveal/Jump'

import {classes as classesProps} from 'common/classes'
import Base from 'common/components/Base'

const Page = ({children, title, classes}) => (
  <Base classes={classes.root}>
    <Jump>
      <h1 className={classes.title}>{title}</h1>
    </Jump>
    <div className={classes.wrapper}>{children}</div>
  </Base>
)

Page.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  ...classesProps,
}

Page.defaultProps = {}

export default Page
