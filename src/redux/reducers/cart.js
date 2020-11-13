import {createSlice, current} from "@reduxjs/toolkit";

const cart = createSlice({
	name: 'cart',
	initialState: {
		data: [],
	},
	reducers: {
		addItemCart: (state, action) => {
			let index = state.data.findIndex((i) => i.id === action.payload.id);
			if (index === -1) {
				state.data.push(action.payload);
			}
		},
		refreshTotalAmountCart: (state, action) => {
			const index = state.data.findIndex( x => x.id === action.payload.id);
			state.data[index].quantity = action.payload.quantity;
			state.data[index].totalAmount = (action.payload.quantity * parseFloat(state.data[index].price.replace('.','').replace(',', '.'))).toFixed(2);
		},
		removeItemCart: (state, action) => {
			state.data = state.data.filter(i => i.id !== action.payload);
			console.log(current(state));
		}
	}
});

export const {addItemCart, refreshTotalAmountCart, removeItemCart} = cart.actions;
export default cart.reducer;