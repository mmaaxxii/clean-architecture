import { UserEmptyState , User } from '@/models';

import { createSlice } from '@reduxjs/toolkit';



interface Action {
    payload: User;
}

export const userSlide = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
        createUser: (state, action) => {
            return action.payload;
        },
        modifyUser: ( state, action) => {

            return {...state, ...action.payload} 
        },
        resetUser: () => {
            return UserEmptyState
        }
     }
})

export const { createUser, modifyUser, resetUser} = userSlide.actions;
export default userSlide.reducer; 