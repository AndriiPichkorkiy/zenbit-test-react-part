import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '', email: '', password: '' ,
}

const contactSlice = createSlice({
    name: 'feedbackForm',
    initialState,
    reducers: {
        changeForm: {
            reducer: (store, { payload }) => {
                return {...store, ...payload}
            },
        },
    }
});

export const { changeForm } = contactSlice.actions;
export default contactSlice.reducer;
