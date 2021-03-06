import React from 'react'

import {arrayOf, number, string} from 'prop-types'
import {v4 as uuid} from 'uuid'
import Fade from 'react-reveal/Fade'

import {classes as classesProps} from 'common/classes'
import Carousel from 'common/components/Carousel'

const Project = ({classes, title, logos, description, context, imagesUrl, features, id, link, isDeployed}) => (
  <Fade bottom>
    <div className={classes.projectContainer}>
      <Fade left={id % 2 !== 0} right={id % 2 === 0} cascade>
        <article className={classes.article}>
          <div className={classes.divider} />
          <h2 className={classes.title}>
            {title}
            <div className={classes.context}>
              <span>{context}</span>
              {link && (
                <a href={link} rel="noreferrer" target="_blank" className={classes.link}>
                  {isDeployed ? 'Lien du projet en ligne' : 'Lien Github du projet'}
                </a>
              )}
            </div>
          </h2>
          <p>{description}</p>
          <ul>
            {features.map((feature) => (
              <li key={uuid()}>{feature}</li>
            ))}
          </ul>
          <div>
            <div className={classes.categoriesContainer}>
              <h3 className={classes.category}>Technologies</h3>
              <Fade bottom>
                <div>
                  {logos.map((logo) => (
                    <img src={logo} alt="technologies icons used" className={classes.icon} key={uuid()} />
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </article>
      </Fade>
      <Fade left={id % 2 === 0} right={id % 2 !== 0}>
        <div className={classes.sliderContainer}>
          <Carousel items={imagesUrl} />
        </div>
      </Fade>
    </div>
  </Fade>
)

Project.propTypes = {
  context: string.isRequired,
  description: string.isRequired,
  features: arrayOf(string.isRequired).isRequired,
  id: number.isRequired,
  imagesUrl: arrayOf(string.isRequired).isRequired,
  logos: arrayOf(string.isRequired).isRequired,
  title: string.isRequired,
  ...classesProps,
}

export default Project
