import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice(
    {
        name: "user",
        initialState: { value: { name: "user", age: 0, num: 0 } },
        reducers: {
            login: (state, action)=>{
                state.value = action.payload
            },
        }
    }
)

export const {login} = userSlice.actions;

export default userSlice.reducer
