import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/contextProduct";
import { AmountButtons } from ".";

const CartShop = ({ id, description, image, price, title, amount }) => {
	const { toggleAmount } = useGlobalContext();

	const increase = () => {
		toggleAmount(id, "inc");
	};
	const decrease = () => {
		toggleAmount(id, "dec");
	};

	return (
		<Wrapper className="section">
			<article>
				<img src={image} alt={title} />
				<div className="info">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className="cart">
					<p>${price}</p>
					<AmountButtons
						amount={amount}
						increase={increase}
						decrease={decrease}
					/>
				</div>
				<p> total: ${(price * amount).toFixed(2)}</p>
			</article>
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

export default CartShop;
