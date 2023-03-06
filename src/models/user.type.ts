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

export interface ApiUser {
    codigo: string 
    nombre: string
}

export const ApiUserEmptyState: ApiUser = {
    codigo: '',
    nombre: ''
};

