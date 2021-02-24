import React from 'react'

import {bool, func, string} from 'prop-types'
import {v4 as uuid} from 'uuid'

import './styles.css'
import {classes as classesProps} from 'common/classes'

const Button = ({label, type, disabled, onClick, classes}) => {
  const splitLabel = label.split('')

  console.log(disabled)

  return (
    <div className={classes.container}>
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        disabled={disabled}
        className="button button--nanuk button--text-thick button--text-upper button--size-s button--border-thick"
        onClick={onClick}
      >
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
  disabled: bool,
  onClick: func,
  type: string,
  ...classesProps,
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  type: 'button',
}

export default Button
