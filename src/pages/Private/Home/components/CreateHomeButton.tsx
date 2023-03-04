import { createUser } from "@/redux/slices/user.slice"
import { useDispatch } from "react-redux"
import { serviceTemplate } from "../services"

export default function ModifyHomeButton() {
    const dispatch = useDispatch()
    const dispatchAction = () => {
      dispatch(createUser(serviceTemplate))
    }
  return (
    <button onClick={dispatchAction}>Dispatch Create Action</button>
  )
}