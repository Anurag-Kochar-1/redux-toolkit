import { createSlice } from "@reduxjs/toolkit"


const initialColor = ""

export const ColorSlice = createSlice({
    name : "color",
    initialState : {value : initialColor},
    reducers : {
        changeColorFunc : (state, action) => {
            state.value = action.payload
        }
    }
})



export const {changeColorFunc} = ColorSlice.actions
export default ColorSlice.reducer