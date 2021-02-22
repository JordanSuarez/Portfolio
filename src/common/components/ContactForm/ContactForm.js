import React from 'react'

import {Box, Button, TextField} from '@material-ui/core'
import {Form} from 'react-final-form'
import {func} from 'prop-types'

import {classes as classesProps} from 'common/classes'

import validate from './validation'

const Contact = ({classes, submitContact}) => {
  const onSubmit = (values) => {
    submitContact(values)
  }

  return (
    <div className={classes.container}>
      <Box borderRadius={16} className={classes.content} boxShadow={2}>
        <h2 className={classes.formTitle}>Me contacter</h2>
        <Form
          className={classes.form}
          onSubmit={onSubmit}
          initialValues=""
          validate={validate}
          render={({handleSubmit, submitting, form}) => (
            <form
              onSubmit={async (event) => {
                await handleSubmit(event)
                form.reset()
                // Disable validation after form reset
                form.resetFieldState('name')
                form.resetFieldState('email')
                form.resetFieldState('message')
              }}
            >
              <TextField className={classes.textfield} type="text" label="Nom" name="name" margin="none" required />
              <TextField className={classes.textfield} type="email" label="Email" name="email" margin="none" required />
              <TextField
                className={classes.textfield}
                type="text"
                label="Message"
                name="message"
                margin="none"
                required
                multiline
                rows={4}
              />
              <Box className={classes.containerButton}>
                <Button className={classes.submit} variant="contained" type="submit" disabled={submitting}>
                  Envoyer
                </Button>
              </Box>
            </form>
          )}
        />
      </Box>
    </div>
  )
}

Contact.propTypes = {
  ...classesProps,
  submitContact: func.isRequired,
}

export default Contact
