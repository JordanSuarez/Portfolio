import {generatePath} from 'react-router-dom'

export const HOME = '/'
export const PROJECT = '/project'
export const ABOUT = '/about'
export const CONTACT = '/contact'

export const getHomeRoute = () => generatePath(HOME)
export const getProjectRoute = () => generatePath(PROJECT)
export const getAboutRoute = () => generatePath(ABOUT)
export const getContactRoute = () => generatePath(CONTACT)
