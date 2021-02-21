import React from 'react'

import {string} from 'prop-types'

import {classes as classesProps} from 'common/classes'

const Card = ({classes, imageUrl}) => <img className={classes.card} src={imageUrl} alt="project description" />

Card.propTypes = {
  imageUrl: string.isRequired,
  ...classesProps,
}

export default Card
