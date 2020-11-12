import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'cart',
	initialState: {
		loading: false,
		data: null,
		error: null
	},
	reducers: {
		getCart: (state) => {
			console.log('entrou');
			//state.loading = true
		},
	}
})

export default slice.reducer;