import React from 'react'

import {animated, useSpring} from 'react-spring'
import {node} from 'prop-types'

import {classes as classesProps} from 'common/classes'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 6.5 - 250}px,${y / 5 - 150}px,0)`
const trans3 = (x, y) => `translate3d(${x / 5 + 300}px,${y / 3 - 50}px,0)`
const trans4 = (x, y) => `translate3d(${x / 4 + 200}px,${y / 7.5 + 200}px,0)`
const trans5 = (x, y) => `translate3d(${x / 7.5}px,${y / 6.5 + 125}px,0)`

const Parallax = ({title, subtitle, githubLink, linkedinLink, moon, classes}) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140,
    },
  }))

  return (
    <div className={classes.container} onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
      <animated.div className={`${classes.shapes} ${classes.title}`} style={{transform: props.xy.interpolate(trans1)}}>
        {title}
      </animated.div>
      <animated.div className={classes.shapes} style={{transform: props.xy.interpolate(trans5)}}>
        {subtitle}
      </animated.div>
      <animated.div className={`${classes.shapes} ${classes.githubLink}`} style={{transform: props.xy.interpolate(trans2)}}>
        {githubLink}
      </animated.div>
      <animated.div className={`${classes.shapes} ${classes.moon}`} style={{transform: props.xy.interpolate(trans3)}}>
        {moon}
      </animated.div>
      <animated.div className={`${classes.shapes} ${classes.linkedinLink}`} style={{transform: props.xy.interpolate(trans4)}}>
        {linkedinLink}
      </animated.div>
    </div>
  )
}

Parallax.propTypes = {
  children: node.isRequired,
  ...classesProps,
}

export default Parallax
