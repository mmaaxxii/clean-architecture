import { createUser } from "@/redux/slices/user.slice"
import { useDispatch } from "react-redux"
import { AuthService } from "./services"


function Login() {
    const dispatch = useDispatch()
    const login =  () => { 
        try{
            const result =  AuthService           
            dispatch(createUser(result))
        } catch (error) { }
    } 
  return (
    <div>
        <h1> HOLA BIENVENIDO AL LOGIN </h1>
        <button onClick={login}>Login</button>
    </div>
  )
}
export default Login