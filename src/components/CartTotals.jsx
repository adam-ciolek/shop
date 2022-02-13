import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/contextProduct";

const CartTotals = () => {
	const { shipping_fee, total_amount } = useGlobalContext();

	return (
		<Wrapper>
			<h4>
				Subtotal : <span>${total_amount.toFixed(2)}</span>
			</h4>
			<h4>
				Shipping Fee : <span>${shipping_fee}</span>
			</h4>

			<h2>
				Order total : <span>${(shipping_fee + total_amount).toFixed(2)}</span>
			</h2>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 3rem;

	h4 {
		margin-bottom: 1rem;
	}
`;

export default CartTotals;
