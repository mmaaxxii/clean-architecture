import { serviceTemplateAdapter } from "../adapters";
import axios from "axios";
import { ApiUser } from "@/models";
import { User } from '@/models/user.type';


export const url = "https://Rickandmortyapi.com/api/character/2";

export const serviceTemplate =  (url: string) :Promise<User> => {
  return axios.get<ApiUser>(url)
    .then((res) => (res.data))
    .then((res) => serviceTemplateAdapter(res));
    
};
//Agregar axios