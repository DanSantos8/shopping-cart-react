import {createSlice} from "@reduxjs/toolkit";

const products = createSlice({
	name: 'products',
	initialState: {
		loading: true,
		data: null,
		error: null,
	},
	reducers: {
		fetchProductsSuccess(state, action){
			state.loading = false;
			state.data = action.payload;
		},
		fetchProductsError(state, action){
			state.loading = false;
			state.error = action.payload;
		}
	}
});

export const dataProducts = () => async (dispatch) => {
	try {
		const response = await fetch(
			'https://5fac82cd03a60500167e7f16.mockapi.io/api/products',
		).then((r) => r.json());
		//console.log(response);
		dispatch(fetchProductsSuccess(response));
	} catch (error) {
		//TODO pegar mensagem de erro do retorno da API e dar dispatch pro reducer
	}
}

export const {fetchProductsSuccess} = products.actions;
export default products.reducer;