import React from 'react'

import {Button, TextField} from '@material-ui/core'
import {Form} from 'react-final-form'

import {classes as classesProps} from 'common/classes'
import validate from './validation'

const Contact = ({classes}) => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.formTitle}>Me contacter</h2>
      <Form
        className={classes.form}
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, submitting, form}) => (
          <form
            onSubmit={async (event) => {
              await handleSubmit(event)
              form.reset()
              form.resetFieldState('name')
              form.resetFieldState('email')
              form.resetFieldState('message')
            }}
          >
            <TextField className={classes.textField} type="text" label="Nom" name="name" margin="none" required />
            <TextField className={classes.textField} type="email" label="Email" name="email" margin="none" required />
            <TextField className={classes.textField} type="text" label="Message" name="message" margin="none" required multiline rows={4} />
            <Button className={classes.submit} variant="contained" type="submit" disabled={submitting}>
              Envoyer
            </Button>
          </form>
        )}
      />
    </div>
  )
}

Contact.propTypes = {
  ...classesProps,
}

export default Contact
