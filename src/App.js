import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cart, Error, Products } from "./pages";
import { SingleProduct, Navbar } from "./components";

const App = () => {
	return (
		<div className="wrapper">
			<Navbar />
			<Routes>
				<Route path="/" element={<Products />}>
					<Route path="/product/:id" element={<SingleProduct />} />
				</Route>
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
};

export default App;
