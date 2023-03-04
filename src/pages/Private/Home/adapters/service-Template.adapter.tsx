import { ApiUser, User } from "@/models";

export const serviceTemplateAdapter = (user: ApiUser): User => {
    // const {id, name} = user; 
    return {
        id: user.codigo,
        name: user.nombre,
        // en caso de que la api y modelo tengan misma propiedad se puede usar 
        //id, 
    };
};