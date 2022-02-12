import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartPage, Error, Products, SingleProduct } from "./pages";
import { Navbar } from "./components";

const App = () => {
	return (
		<div className="wrapper">
			<Navbar />
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/:id" element={<SingleProduct />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};

export default App;
