import React from 'react'

import './styles.css'
import {animated, useSpring} from 'react-spring'
import {node} from 'prop-types'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function Watcher({children}) {
  const [props, set] = useSpring(() => ({xy: [0, 0], config: {mass: 10, tension: 550, friction: 140}}))

  return (
    <div onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
      {/* eslint-disable-next-line react/prop-types */}
      <animated.div className="container" style={{transform: props.xy.interpolate(trans1)}}>
        {children}
      </animated.div>
    </div>
  )
}

Watcher.propTypes = {
  children: node.isRequired,
}

export default Watcher
