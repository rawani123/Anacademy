import {configureStore} from '@reduxjs/toolkit'
import userSlice from './features/login'
const store = configureStore({
    reducer: {
        user:userSlice
    }
})

export default store;