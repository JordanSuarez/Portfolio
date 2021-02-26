import React from 'react'

import {bool, func} from 'prop-types'
import {useTheme} from '@material-ui/core/styles'
import Switch from 'react-switch'

import {classes as classesProps} from 'common/classes'

const SwitchButton = ({classes, checked, handleChange}) => {
  const {palette} = useTheme()

  return (
    <div className={classes.container}>
      <label htmlFor="react-switch">
        <Switch
          checked={checked}
          onChange={handleChange}
          onColor={palette.light}
          offColor={palette.light}
          onHandleColor={palette.lightRed}
          offHandleColor={palette.lightRed}
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          height={20}
          width={48}
          id="react-switch"
        />
      </label>
    </div>
  )
}

SwitchButton.propTypes = {
  checked: bool.isRequired,
  handleChange: func.isRequired,
  ...classesProps,
}

export default SwitchButton
