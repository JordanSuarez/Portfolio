import React, {useState} from 'react'

import {Form} from 'react-final-form'
import {func} from 'prop-types'
import {TextField} from 'mui-rff'
import ReCAPTCHA from 'react-google-recaptcha'

import {classes as classesProps} from 'common/classes'
import Button from 'common/components/Button'
import plane1 from 'common/assets/images/logo/plane1.png'
import validate from './validation'

const Contact = ({classes, onFormSubmit}) => {
  const [captcha, setCaptcha] = useState('')
  const [error, setError] = useState(false)

  const siteKey = process.env.REACT_APP_RECAPTCHA_KEY

  const onChangeCaptcha = (values) => {
    setCaptcha(values)
    setError(false)
  }

  const onClick = () => (captcha.length === 0 ? setError(true) : null)

  const onSubmit = (values) => {
    const submitValues = {
      ...values,
      captcha,
    }

    if (!error) {
      onFormSubmit(submitValues)
    }
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.formTitle}>Laissez-moi un message</h2>
      <Form
        className={classes.form}
        onSubmit={onSubmit}
        validate={validate}
        render={({submitting, handleSubmit, form}) => (
          <form
            onSubmit={async (event) => {
              await handleSubmit(event)
              form.reset()
              form.resetFieldState('name')
              form.resetFieldState('email')
              form.resetFieldState('message')
            }}
            noValidate
            className={classes.form}
          >
            <img src={plane1} alt="repository github" />
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
            <div className={classes.captcha}>
              <ReCAPTCHA sitekey={siteKey} required onChange={onChangeCaptcha} />
              {error && <span className={classes.errorMessage}>La vérification est requise</span>}
            </div>
            <Button type="submit" disabled={submitting} label="Envoyer" onClick={onClick} />
          </form>
        )}
      />
    </div>
  )
}

Contact.propTypes = {
  onFormSubmit: func.isRequired,
  ...classesProps,
}

export default Contact
