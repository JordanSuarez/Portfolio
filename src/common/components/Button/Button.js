import React from 'react'

import {v4 as uuid} from 'uuid'

import './styles.css'
import {classes as classesProps} from 'common/classes'

const Button = ({label, classes}) => {
  const splitLabel = label.split('')

  return (
    <div className={classes.container}>
      <button type="button" className="button button--nanuk button--text-thick button--text-upper button--size-s button--border-thick">
        {splitLabel.map((letter) => {
          if (letter === ' ') {
            return <span key={uuid()}>&nbsp;</span>
          }

          return <span key={uuid()}>{letter}</span>
        })}
      </button>
    </div>
  )
}

Button.propTypes = {
  ...classesProps,
}

export default Button
