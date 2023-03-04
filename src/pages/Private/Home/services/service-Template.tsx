import { serviceTemplateAdapter } from "../adapters";


export const url = "http://url.io";

export const serviceTemplate = async (url: string) => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => serviceTemplateAdapter(res));
};
//Agregar axios