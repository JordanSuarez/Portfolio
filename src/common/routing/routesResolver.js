import {generatePath} from 'react-router-dom'

export const HOME = '/'
export const PROJECT = '/project'
export const CONTACT = '/contact'

export const getHomeRoute = () => generatePath(HOME)
export const getProjectRoute = () => generatePath(PROJECT)
export const getContactRoute = () => generatePath(CONTACT)
