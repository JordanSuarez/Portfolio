import React from 'react'

import Jump from 'react-reveal/Jump'

import {classes as classesProps} from 'common/classes'
import Base from 'common/components/Base'
import ContactForm from 'common/components/ContactForm'

const Contact = ({classes}) => (
  <Base classes={classes.root}>
    <Jump>
      <h1 className={classes.title}>À propos</h1>
    </Jump>
    <div className={classes.wrapper}>
      <h2>Le développement est devenu une passion</h2>
      <article>
        <p className={classes.description} />
      </article>
      <ContactForm />
    </div>
  </Base>
)

Contact.propTypes = {
  ...classesProps,
}

export default Contact
