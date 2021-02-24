import React from 'react'

import {Form} from 'react-final-form'
import {TextField} from 'mui-rff'

import {classes as classesProps} from 'common/classes'
import Button from 'common/components/Button'
import validate from './validation'

const Contact = ({classes, onSubmit}) => (
  <div className={classes.container}>
    <h2 className={classes.formTitle}>Laissez-moi un message</h2>
    <Form
      className={classes.form}
      onSubmit={onSubmit}
      validate={validate}
      render={({submitting, handleSubmit, form}) => (
        <form
          // onSubmit={async (event) => {
          //   console.log(event)
          //   await handleSubmit(event)
          //   form.reset()
          //   form.resetFieldState('name')
          //   form.resetFieldState('email')
          //   form.resetFieldState('message')
          // }}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            className={classes.textField}
            type="text"
            label="Nom"
            name="name"
            variant="filled"
            InputProps={{disableUnderline: true}}
          />
          <TextField
            className={classes.textField}
            type="email"
            label="Email"
            name="email"
            required
            variant="filled"
            InputProps={{disableUnderline: true}}
          />
          <TextField
            className={classes.textField}
            label="Message"
            name="message"
            required
            multiline
            rows={5}
            variant="filled"
            InputProps={{disableUnderline: true}}
          />

          <Button className={classes.submit} variant="outlined" type="submit" disabled={submitting} label="Envoyer" />
        </form>
      )}
    />
  </div>
)

Contact.propTypes = {
  ...classesProps,
}

export default Contact
