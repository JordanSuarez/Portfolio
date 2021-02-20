import React from 'react'

import {animated, useSpring} from 'react-spring'

import {classes as classesProps} from 'common/classes'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card = ({classes}) => {
  const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 5, tension: 100, friction: 100}}))

  return (
    <animated.div
      className={classes.card}
      onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
      onMouseLeave={() => set({xys: [0, 0, 1]})}
      style={{transform: props.xys.interpolate(trans)}}
    />
  )
}

Card.propTypes = {
  ...classesProps,
}

export default Card
