import React, {useState} from 'react'

import {bool, func, string} from 'prop-types'
import {Form} from 'react-final-form'
import {TextField} from 'mui-rff'
import Button from '@material-ui/core/Button'
import ReCAPTCHA from 'react-google-recaptcha'

import {classes as classesProps} from 'common/classes'
import plane1 from 'common/assets/images/logo/plane1.png'
import validate from './validation'

const Contact = ({classes, onSubmit, onChangeCaptcha, submitting, captcha}) => {
  const [captchaError, setCaptchaError] = useState(false)

  const siteKey = process.env.REACT_APP_RECAPTCHA_KEY
  const {grecaptcha} = window

  return (
    <div className={classes.container}>
      <h2 className={classes.formTitle}>Laissez-moi un message</h2>
      <Form
        className={classes.form}
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, form}) => (
          <form
            onSubmit={(event) => {
              event.preventDefault()
              if (captcha.length > 0) {
                return handleSubmit(event).then(() => {
                  form.restart()
                  grecaptcha.reset()
                  setCaptchaError(false)
                })
              }

              return setCaptchaError(true)
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
              required
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
              {captchaError && <span className={classes.errorMessage}>La vérification est requise</span>}
            </div>
            <Button type="submit" disabled={submitting} variant="outlined" className={classes.submit} color="primary">
              Envoyer
            </Button>
          </form>
        )}
      />
    </div>
  )
}

Contact.propTypes = {
  captcha: string.isRequired,
  onChangeCaptcha: func.isRequired,
  onSubmit: func.isRequired,
  submitting: bool.isRequired,
  ...classesProps,
}

export default Contact
