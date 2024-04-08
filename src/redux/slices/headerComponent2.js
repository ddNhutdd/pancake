import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	showMenu: false,
};

const headerComponentSlice = createSlice({
	name: 'headerComponentSlice',
	initialState,
	reducers: {
		setShowMenu(state, action) {
			state.showMenu = action.payload;
		},
	},
});

export const {setShowMenu} = headerComponentSlice.actions;
export default headerComponentSlice.reducer;
export const getShowMenu = (state) => state.headerComponent2.showMenu;
