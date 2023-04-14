import { lazy } from "react"
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('../views/home/Home'));

const routes: RouteObject[] = [
    { path: '/', element: <Home /> }
]

export default routes