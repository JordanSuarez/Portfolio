import React from 'react'

import './styles.css'
import {classes as classesProps} from 'common/classes'

const Button = ({label}) => {
  const splitLabel = label.split('')

  return (
    <div className="box bg-1">
      <button type="button" className="button button--nanuk button--text-thick button--text-upper button--size-s button--border-thick">
        {splitLabel.map((letter) => {
          if (letter === ' ') {
            return <span>&nbsp;</span>
          }

          return <span>{letter}</span>
        })}
      </button>
    </div>
  )
}

Button.propTypes = {
  ...classesProps,
}

export default Button
