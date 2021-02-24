import React from 'react'

import MuiAlert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

import {bool, func, string} from 'prop-types'

import {classes as classesProps} from 'common/classes'

const Snack = ({isOpen, handleClose, severity, username, className}) => {
  const successMessage = `Merci ${username}, votre message à bien été envoyé`
  const errorMessage = 'Une erreur est survenue, réessayez ultérieurement'
  const autoHideDuration = 6000

  return (
    <Snackbar open={isOpen} autoHideDuration={autoHideDuration} onClose={handleClose} className={className}>
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={severity}>
        {severity === 'error' ? errorMessage : successMessage}
      </MuiAlert>
    </Snackbar>
  )
}

Snack.propTypes = {
  handleClose: func.isRequired,
  isOpen: bool.isRequired,
  severity: string.isRequired,
  username: string.isRequired,
  ...classesProps,
}

export default Snack
