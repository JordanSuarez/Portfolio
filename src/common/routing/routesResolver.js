import {generatePath} from 'react-router-dom'

export const HOME = '/'
export const WORK = '/work'
export const ABOUT = '/about'

export const getHomeRoute = () => generatePath(HOME)
export const getWorkRoute = () => generatePath(WORK)
export const getAboutRoute = () => generatePath(ABOUT)
