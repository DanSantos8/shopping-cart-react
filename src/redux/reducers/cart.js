import {createSlice} from "@reduxjs/toolkit";
import {formatFloat} from "../helper/format";

const cart = createSlice({
	name: 'cart',
	initialState: {
		data: [],
	},
	reducers: {
		addItemCart: (state, action) => {
			let index = state.data.findIndex((i) => i.id === action.payload.id);
			index === -1 && state.data.push(action.payload);
		},
		refreshTotalAmountCart: (state, action) => {
			const index = state.data.findIndex( x => x.id === action.payload.id);
			state.data[index].quantity = action.payload.quantity;
			state.data[index].totalAmount = formatFloat(action.payload.quantity, state.data[index].price);
		},
		removeItemCart: (state, action) => {
			state.data = state.data.filter(i => i.id !== action.payload);
		},
		cleanCart: (state) => {
			state.data = [];
		}
	}
});

export const {addItemCart, refreshTotalAmountCart, removeItemCart, cleanCart} = cart.actions;
export default cart.reducer;