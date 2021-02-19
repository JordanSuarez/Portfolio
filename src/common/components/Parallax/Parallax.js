import React from 'react'

import {animated, useSpring} from 'react-spring'
import {node} from 'prop-types'

import {classes as classesProps} from 'common/classes'

const Parallax = ({children, classes}) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140,
    },
  }))

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
  // const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
  // const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
  // const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

  return (
    <div className={classes.container} onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
      <animated.div className={`${classes.firstShape} ${classes.shapes}`} style={{transform: props.xy.interpolate(trans1)}}>
        {children}
      </animated.div>
      {/*<animated.div className={`${classes.secondShape} ${classes.shapes}`} style={{transform: props.xy.interpolate(trans2)}} />*/}
      {/*<animated.div className={`${classes.thirdShape} ${classes.shapes}`} style={{transform: props.xy.interpolate(trans3)}} />*/}
      {/*<animated.div className={`${classes.fourthShape} ${classes.shapes}`} style={{transform: props.xy.interpolate(trans4)}} />*/}
    </div>
  )
}

Parallax.propTypes = {
  children: node.isRequired,
  ...classesProps,
}

export default Parallax
