import { createSlice } from "@reduxjs/toolkit/dist/createSlice";


// App initial State, initial values are 0, or null when app is started.
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}
// Using a function to pass a data object
export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer: {
        setOrigin:(state, action) => { 
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});
       
