import {
	ADD_TO_CART,
	SET_LOADING,
	SET_STORIES,
	LOADING_SINGLE_PRODUCT,
	SINGLE_PRODUCT,
	TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const reducer = (state, action) => {
	if (action.type === SET_LOADING) {
		return { ...state, loading: true };
	}

	if (action.type === SET_STORIES) {
		return { ...state, all_products: action.payload, loading: false };
	}

	if (action.type === ADD_TO_CART) {
		const { id, image, title, description, price, amount } = action.payload;
		const tempItem = state.add_toCart.find((item) => item.id === id);
		if (tempItem) {
			const tempCart = state.add_toCart.map((item) => {
				if (item.id === id) {
					let newAmount = item.amount + amount;
					if (state.stock < newAmount) {
						newAmount = state.stock;
					}
					return { ...item, amount: newAmount };
				} else {
					return item;
				}
			});
			return { ...state, add_toCart: tempCart };
		} else {
			const newItem = {
				id,
				image,
				title,
				description,
				price,
				amount,
			};
			return { ...state, add_toCart: [...state.add_toCart, newItem] };
		}
	}
	// SINGLE PRODUCT

	if (action.type === LOADING_SINGLE_PRODUCT) {
		return { ...state, loading_product: true };
	}
	if (action.type === SINGLE_PRODUCT) {
		return {
			...state,
			single_products: action.payload,
			loading_product: false,
		};
	}
	if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
		const { id, value } = action.payload;
		let tempCart = state.add_toCart.map((item) => {
			if (item.id === id) {
				if (value === "inc") {
					let newAmount = item.amount + 1;
					if (newAmount > state.stock) {
						newAmount = state.stock;
					}
					return { ...item, amount: newAmount };
				}
				if (value === "dec") {
					let newAmount = item.amount - 1;
					if (newAmount < 1) {
						newAmount = 1;
					}
					return { ...item, amount: newAmount };
				}
			} else {
				return item;
			}
		});
		return { ...state, add_toCart: tempCart };
	}
};
export default reducer;
