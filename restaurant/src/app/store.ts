import { configureStore } from '@reduxjs/toolkit';
import reservationsReduser from '../features/reservationSlice';

export const store = configureStore({
    reducer: {
        reservations: reservationsReduser
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch