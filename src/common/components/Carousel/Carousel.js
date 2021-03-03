import React from 'react'

import {arrayOf, node} from 'prop-types'
import {v4 as uuid} from 'uuid'
import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss'
import AwesomeSlider from 'react-awesome-slider'
import CoreStyles from 'react-awesome-slider/src/core/styles.scss'

import {classes as classesProps} from 'common/classes'
import styles from './style.css'

const Carousel = ({items, classes}) => (
  <AwesomeSlider cssModule={[CoreStyles, AnimationStyles, styles]} className={classes.carousel} mobileTouch>
    {items.map((item) => (
      <div data-src={item} key={uuid()} />
    ))}
  </AwesomeSlider>
)

Carousel.propTypes = {
  items: arrayOf(node).isRequired,
  ...classesProps,
}

export default Carousel
