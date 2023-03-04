import { PublicRoutes, User } from "@/models"
import { AppStore } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const AuthGuard = () => {
    const userState: User = useSelector((state: AppStore) => state.user)
    return userState.name ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>
 } 

 export default AuthGuard
