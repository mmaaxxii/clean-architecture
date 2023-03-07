import { Roles } from '@/models';

export interface User {

    id: string 
    name: string
    email?: string
    role?: Roles
}

export const UserEmptyState: User = {
    id: '',
    name: '',
    email: '',
    role: Roles.USER
};

interface Origin {
    name: string
    url: string
}

export interface ApiUser {
    
        id: number,
        name: string
        status: string
        species: string
        type: string
        gender: string
        origin: Origin,
        location: Origin,
        image: string
        episode: string[],
        url: string
        created: string
      
}

export const ApiUserEmptyState: ApiUser = {
    id: 2,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: ""
    },
    location: {
      name: "",
      url: ""
    },
    image: "",
    episode: [],
    url: "",
    created: ""
  };

