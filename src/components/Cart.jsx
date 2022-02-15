import React from "react";
import { CartShop, CartTotals } from ".";
import styled from "styled-components";
import { useGlobalContext } from "../context/contextProduct";

const Cart = () => {
	const { add_toCart: items } = useGlobalContext();

	if (!items.length) {
		return <h2>You card is empty.</h2>;
	}

	return (
		<Wrapper>
			{items.map((item) => {
				const { id } = item;
				return <CartShop key={id} {...item} />;
			})}
			{items.length >= 1 && <CartTotals />}
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: grid;
	grid-template-columns: 1fr;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
	}

	img {
		width: 100%;
		display: block;
		@media (min-width: 425px) {
			width: 60%;
			margin: 0 auto;
		}
	}
	.info {
		margin-top: 2rem;
	}
	p {
		margin-top: 1rem;
	}
	.cart {
		display: flex;
		justify-content: space-between;
		align-items: end;
		margin-bottom: 1rem;
	}
`;
export default Cart;
