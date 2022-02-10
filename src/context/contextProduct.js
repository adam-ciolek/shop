import axios from "axios";
import React, { useState, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	SET_LOADING,
	SET_STORIES,
} from "../actions";

const AppContext = React.createContext();

const url = "https://fakestoreapi.com/products";

const initialState = {
	all_products: [],
	loading: false,
	add_toCart: [],
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	console.log(state.add_toCart);

	const fetchData = async () => {
		dispatch({ type: SET_LOADING });
		try {
			const response = await axios.get(url);
			dispatch({ type: SET_STORIES, payload: response.data });
		} catch (error) {}
	};

	const addToCart = (id, image, title, description, price) => {
		dispatch({
			type: ADD_TO_CART,
			payload: { id, image, title, description, price },
		});
	};

	const removeFromCart = (id) => {
		// dispatch({type:REMOVE_FROM_CART,payload:id})
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider value={{ ...state, addToCart, removeFromCart }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
