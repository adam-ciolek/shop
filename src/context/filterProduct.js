import React, { useContext, useEffect, useReducer } from "react";
import { FILTERED_PRODUTS, LOAD_PRODUCTS, UPDATE_FILTERS } from "../actions";
import filterReducer from "../reducer/reducerFilter";
import { useGlobalContext } from "./contextProduct";

const FilterContext = React.createContext();

const initialState = {
	filtered_products: [],
	all_products: [],
	filters: {
		category: "all",
		text: "",
	},
};

const FilterContexProvider = ({ children }) => {
	const { all_products } = useGlobalContext();

	const [state, dispatch] = useReducer(filterReducer, initialState);

	const updateFilters = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		if (name === "category") {
			value = e.target.textContent;
		}
		dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
	};

	const categoryUnique = (data) => {
		let unique = data.map((item) => item.category);
		return ["all", ...new Set(unique)];
	};

	useEffect(() => {
		dispatch({ type: FILTERED_PRODUTS });
	}, [state.filters]);

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: all_products });
	}, [all_products]);

	return (
		<FilterContext.Provider value={{ ...state, categoryUnique, updateFilters }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};

export { FilterContext, FilterContexProvider };
