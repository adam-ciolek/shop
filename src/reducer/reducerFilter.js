import { FILTERED_PRODUTS, LOAD_PRODUCTS, UPDATE_FILTERS } from "../actions";

const filterReducer = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		return {
			...state,
			all_products: [...action.payload],
			filtered_products: [...action.payload],
		};
	}

	if (action.type === UPDATE_FILTERS) {
		const { name, value } = action.payload;
		return { ...state, filters: { [name]: value } };
	}
	if (action.type === FILTERED_PRODUTS) {
		const { all_products } = state;
		const { category } = state.filters;
		let tempProducts = [...all_products];

		if (category !== "all") {
			tempProducts = tempProducts.filter((item) => item.category === category);
		}

		return { ...state, filtered_products: tempProducts };
	}
};

export default filterReducer;
