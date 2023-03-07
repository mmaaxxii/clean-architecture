import { User } from "@/models";
import { createUser , modifyUser} from "@/redux/slices/user.slice"
import { useDispatch } from "react-redux"
import { serviceTemplate } from "../services"
import { url } from './../services/service-Template';

export default  function CreateHomeButton() {
    const dispatch = useDispatch()

    const getService = async (): User => {
      await serviceTemplate(url)
      .then((response) => {
        return response
      })
  }
    const dispatchAction = () => {
      dispatch(createUser( getService() ))
    }
  return (
    <button onClick={dispatchAction}>Dispatch Create Action</button>
  )
}