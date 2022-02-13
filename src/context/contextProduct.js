import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";
import {
	ADD_TO_CART,
	COUNT_CART_TOTALS,
	LOADING_SINGLE_PRODUCT,
	REMOVE_FROM_CART,
	SET_LOADING,
	SET_STORIES,
	SINGLE_PRODUCT,
	TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const getLoacalStorage = () => {
	let cart = localStorage.getItem("cart");
	if (cart) {
		return JSON.parse(localStorage.getItem("cart"));
	} else {
		return [];
	}
};

const AppContext = React.createContext();

const url = "https://fakestoreapi.com/products";

const initialState = {
	all_products: [],
	loading: false,
	add_toCart: getLoacalStorage(),
	single_products: [],
	loading_product: false,
	stock: 10,
	shipping_fee: 5.34,
	total_amount: 0,
	total_items: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchData = async () => {
		dispatch({ type: SET_LOADING });
		try {
			const response = await axios.get(url);
			dispatch({ type: SET_STORIES, payload: response.data });
		} catch (error) {
			console.log(error);
		}
	};

	const fetchSingleProduct = async (url) => {
		dispatch({ type: LOADING_SINGLE_PRODUCT });
		try {
			const response = await axios.get(url);
			dispatch({ type: SINGLE_PRODUCT, payload: response.data });
		} catch (error) {
			console.log(error);
		}
	};

	const addToCart = (id, image, title, description, price, amount) => {
		dispatch({
			type: ADD_TO_CART,
			payload: { id, image, title, description, price, amount },
		});
	};

	const removeFromCart = (id) => {
		dispatch({ type: REMOVE_FROM_CART, payload: id });
	};

	const toggleAmount = (id, value) => {
		dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS });
		localStorage.setItem("cart", JSON.stringify(state.add_toCart));
	}, [state.add_toCart]);

	return (
		<AppContext.Provider
			value={{
				...state,
				addToCart,
				fetchSingleProduct,
				url,
				toggleAmount,
				removeFromCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
