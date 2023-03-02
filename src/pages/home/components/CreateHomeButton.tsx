import { createUser } from "@/redux/slices/user.slice"
import { useDispatch } from "react-redux"

export default function ModifyHomeButton() {
    const dispatch = useDispatch()
    const dispatchAction = () => {
      dispatch(createUser({ user: "Maxi", id: 1 }))
    }
  return (
    <button onClick={dispatchAction}>Dispatch Create Action</button>
  )
}