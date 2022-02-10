import React from "react";
import { GlobalStyleComponent } from "styled-components";
import { useGlobalContext } from "../context/contextProduct";

const CartShop = () => {
	const { add_toCart: items } = useGlobalContext();
	console.log(items);
	return (
		<div>
			{/* {items.map((item) => {
				console.log(item);
			})} */}
		</div>
	);
};

export default CartShop;
