import  Login from "./components/Login"
import MainLogged from './components/MainLogged'
export default [
    {path:'/login',component: Login},
    {path:'/' , },
    {path:'/:username',component:MainLogged},
]