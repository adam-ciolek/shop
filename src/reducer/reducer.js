import { ADD_TO_CART, SET_LOADING, SET_STORIES } from "../actions";

const reducer = (state, action) => {
	if (action.type === SET_LOADING) {
		return { ...state, loading: true };
	}

	if (action.type === SET_STORIES) {
		return { ...state, all_products: action.payload, loading: false };
	}

	if (action.type === ADD_TO_CART) {
		const { id, image, title, description, price } = action.payload;
		const tempItem = state.add_toCart.find((item) => item.id === id);
		if (tempItem) {
			const tempCart = state.add_toCart.map((item) => {});
			return { ...state, add_toCart: tempCart };
		} else {
			const newItem = {
				id,
				image,
				title,
				description,
				price,
			};
			return { ...state, add_toCart: [...state.add_toCart, newItem] };
		}
	}
};
export default reducer;
