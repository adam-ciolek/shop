import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/contextProduct";
import { AmountButtons } from ".";
import { ImBin } from "react-icons/im";

const CartShop = ({ id, description, image, price, title, amount }) => {
	const { toggleAmount, removeFromCart } = useGlobalContext();

	const increase = () => {
		toggleAmount(id, "inc");
	};
	const decrease = () => {
		toggleAmount(id, "dec");
	};

	return (
		<>
			<Wrapper>
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
				<button className="bin" onClick={() => removeFromCart(id)}>
					<span>Remove</span>
					<ImBin />
				</button>
			</Wrapper>
		</>
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
	.bin {
		margin-top: 0.7rem;
		width: max-content;
		padding: 0.3rem 0.7rem;
		display: flex;
	}
	.bin span {
		margin-right: 0.3rem;
	}
`;

export default CartShop;
