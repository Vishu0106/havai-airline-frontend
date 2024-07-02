import AirportReducer from "./slices/Airports-slice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: {
        airports: AirportReducer,
    },
});

export default store;