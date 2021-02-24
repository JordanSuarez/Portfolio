import React, {useState} from 'react'

import axios from 'axios'

import {classes as classesProps} from 'common/classes'
import ContactForm from 'common/components/ContactForm'
import githubLogo from 'common/assets/images/logo/github.png'
import linkedinLogo from 'common/assets/images/logo/linkedin.png'
import Page from 'common/components/Page'
import Snackbar from 'common/components/Snackbar'

const Contact = ({classes}) => {
  const [feedback, setFeedback] = useState({isOpen: false, severity: '', username: ''})
  const [submitting, setSubmitting] = useState(false)
  const [captcha, setCaptcha] = useState('')

  const {
    REACT_APP_EMAILJS_API_URL,
    REACT_APP_EMAILJS_USER_ID,
    REACT_APP_EMAILJS_SERVICE_ID,
    REACT_APP_EMAILJS_TEMPLATE_ID,
    REACT_APP_GITHUB,
    REACT_APP_LINKEDIN,
  } = process.env

  const githubUrl = REACT_APP_GITHUB
  const linkedinUrl = REACT_APP_LINKEDIN

  const apiUrl = REACT_APP_EMAILJS_API_URL
  const userId = REACT_APP_EMAILJS_USER_ID
  const serviceId = REACT_APP_EMAILJS_SERVICE_ID
  const templateId = REACT_APP_EMAILJS_TEMPLATE_ID

  // email handler
  const handleFormSubmit = ({name, email, message}) => {
    setSubmitting(true)

    const data = {
      service_id: serviceId,
      user_id: userId,
      template_id: templateId,
      template_params: {
        date: Date.now(),
        name,
        email,
        message,
        'g-recaptcha-response': captcha,
      },
    }

    return axios
      .post(apiUrl, data)
      .then(({config}) => {
        const username = JSON.parse(config.data).template_params.name

        setFeedback({...feedback, isOpen: true, severity: 'success', username})
      })
      .catch(() => {
        setFeedback({...feedback, isOpen: true, severity: 'error', username: ''})
      })
      .then(() => {
        setCaptcha('')
        setSubmitting(false)
      })
  }

  // Submit form
  const onChangeCaptcha = (values) => {
    setCaptcha(values)
  }

  // Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setFeedback({...feedback, isOpen: false, severity: '', username: ''})
  }

  return (
    <Page title="Contact">
      <div className={classes.container}>
        <h2 className={classes.title}>Vous appréciez mon travail?</h2>
        <section className={classes.wrapper}>
          <ul>
            <li>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                Consultez mon profil Github
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <img src={githubLogo} alt="profil github" />
              </a>
            </li>
            <li>
              <a href="*" target="_blank" rel="noreferrer">
                Retrouvez-moi sur Linkedin
              </a>
              <a href="*" target="_blank" rel="noreferrer">
                <img src={linkedinLogo} alt="profil linkedin" />
              </a>
            </li>
          </ul>
          <ContactForm onSubmit={handleFormSubmit} onChangeCaptcha={onChangeCaptcha} submitting={submitting} captcha={captcha} />
          {feedback.isOpen && (
            <Snackbar
              severity={feedback.severity}
              handleClose={handleClose}
              isOpen={feedback.isOpen}
              username={feedback.username}
              className={classes.snackbar}
            />
          )}
        </section>
      </div>
    </Page>
  )
}

Contact.propTypes = {
  ...classesProps,
}

export default Contact
