import React from 'react'

import {classes as classesProps} from 'common/classes'
import ContactForm from 'common/components/ContactForm'
import Page from 'common/components/Page'

const Contact = () => (
  <Page title="Contact">
    <ContactForm />
  </Page>
)

Contact.propTypes = {
  ...classesProps,
}

export default Contact
