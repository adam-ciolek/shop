import React from "react";
import { CartShop } from ".";
import styled from "styled-components";
import { useGlobalContext } from "../context/contextProduct";

const Cart = () => {
	const { add_toCart: items } = useGlobalContext();

	console.log(items);

	return (
		<Wrapper className="section">
			{items.map((item) => {
				const { id } = item;
				return <CartShop key={id} {...item} />;
			})}
		</Wrapper>
	);
};

const Wrapper = styled.article`
	display: grid;
	grid-template-columns: 1fr;

	article {
		margin-top: 3rem;
	}

	img {
		width: 100%;
		display: block;
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
