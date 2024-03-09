import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	paddingValue: 0,
	paddingTop: 0,
};

const paddingTopPageSlice = createSlice({
	name: 'paddingTop',
	initialState,
	reducers: {
		setPaddingTopPage(state, action) {
			state.paddingTop = action.payload || state.paddingValue;
		},
		setPaddingValue(state, action) {
			state.paddingValue = action.payload;
			state.paddingTop = action.payload;
		},
	},
});

export const {setPaddingTopPage, setPaddingValue} = paddingTopPageSlice.actions;
export default paddingTopPageSlice.reducer;
export const getPaddingTop = (state) => state.paddingTopPage.paddingTop;
