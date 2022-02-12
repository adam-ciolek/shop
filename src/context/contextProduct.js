import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";
import {
	ADD_TO_CART,
	LOADING_SINGLE_PRODUCT,
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
			console.log(response);
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

	const toggleAmount = (id, value) => {
		console.log(id, value);
		dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
		console.log(state.add_toCart);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
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
