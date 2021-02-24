import React from 'react'

import {classes as classesProps} from 'common/classes'
import ContactForm from 'common/components/ContactForm'
import githubLogo from 'common/assets/images/logo/github.png'
import linkedinLogo from 'common/assets/images/logo/linkedin.png'
import Page from 'common/components/Page'

const Contact = ({classes}) => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Page title="Contact">
      <div className={classes.container}>
        <h2 className={classes.title}>Vous appréciez mon travail?</h2>
        <section className={classes.wrapper}>
          <ul>
            <li>
              <a href="*" target="_blank" rel="noreferrer">
                Consultez mon profil Github
              </a>
              <a href="*" target="_blank" rel="noreferrer">
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
          <ContactForm onSubmit={onSubmit} />
        </section>
      </div>
    </Page>
  )
}

Contact.propTypes = {
  ...classesProps,
}

export default Contact
