import {generatePath} from 'react-router-dom'

export const HOME = '/'
export const PROJECT = '/project/:id'
export const ABOUT = '/about'
export const CONTACT = '/contact'

export const getHomeRoute = () => generatePath(HOME)
export const getProjectRoute = (id) => generatePath(PROJECT, {id})
export const getAboutRoute = () => generatePath(ABOUT)
export const getContactRoute = () => generatePath(CONTACT)
