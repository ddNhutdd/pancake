import {configureStore} from '@reduxjs/toolkit';
import paddingTopPage from './slices/paddingTopPage';
import headerComponent2 from './slices/headerComponent2';

export const store = configureStore({
	reducer: {
		paddingTopPage,
		headerComponent2,
	},
});
