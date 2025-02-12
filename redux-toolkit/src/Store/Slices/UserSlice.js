import { createSlice } from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name: 'user',
    initialState: [], 
    reducers: {
        addUser : (state, action) => {
            state.push(action.payload);
            // console.log(action.payload);
            
         },
        removeUser : (state, action) => {
            // return state.filter((user, id) => id !== action.payload);
            state.splice(action.payload, 1);
        },
        DeleteUser : (state, action) => { 
            return [];
         },
    },
});

// console.log(UserSlice.actions);

export default UserSlice.reducer;
export const { addUser, removeUser, DeleteUser } = UserSlice.actions;
