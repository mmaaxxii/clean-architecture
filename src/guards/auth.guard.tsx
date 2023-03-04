import { PublicRoutes } from "@/models"
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const AuthGuard = () => {
    const userState = useSelector((state: AppStore) => state.user)
    return userState.id ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>
 } 

 export default AuthGuard
