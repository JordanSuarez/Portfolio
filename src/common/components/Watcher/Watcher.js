import React from 'react'

import {classes as classesProps} from 'common/classes'
import {animated, useSpring} from 'react-spring'
import {node} from 'prop-types'

const Watcher = ({children, classes}) => {
  const [props, set] = useSpring(() => (
      {
          xy: [0, 0],
          config: {
              mass: 10,
              tension: 550,
              friction: 140
          }
      }
      )
  )

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

  return (
    <div onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
      <animated.div className={classes.container} style={{transform: props.xy.interpolate(trans1)}}>
        {children}
      </animated.div>
    </div>
  )
}

Watcher.propTypes = {
  children: node.isRequired,
    ...classesProps,
}

export default Watcher
