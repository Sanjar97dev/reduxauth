import { configureStore } from "@reduxjs/toolkit";
import signUpSlices from "./slices/signUpSlices";



const store = configureStore ({
    reducer: {
        signUp: signUpSlices,
    },
});

export default store