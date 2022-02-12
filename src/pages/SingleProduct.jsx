import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/contextProduct";
import { AmountButtons } from "../components";

const SingleProduct = () => {
	const {
		single_products: product,
		loading_product: loading,
		addToCart,
		stock,
	} = useGlobalContext();

	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((oldValue) => {
			let tempAmount = oldValue + 1;
			if (tempAmount > stock) {
				tempAmount = stock;
			}
			return tempAmount;
		});
	};
	const decrease = () => {
		setAmount((oldValue) => {
			let tempAmount = oldValue - 1;
			if (tempAmount < 1) {
				tempAmount = 1;
			}
			return tempAmount;
		});
	};

	if (loading) {
		return <h2>Loading...</h2>;
	}

	const { id, image, title, description, price } = product;

	return (
		<>
			<Wrapper className="section">
				<img src={image} alt={title} />
				<div className="info">
					<h3>{title}</h3>
					<p>{description}</p>
					{product && (
						<div>
							<div className="cart">
								<p>${price}</p>
								<div className="amount">
									<AmountButtons
										amount={amount}
										increase={increase}
										decrease={decrease}
									/>
								</div>
							</div>
							<Link
								to="/cart"
								onClick={() =>
									addToCart(id, image, title, description, price, amount)
								}
							>
								Add to cart
							</Link>
						</div>
					)}
				</div>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;

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
	.amount {
		display: flex;
		align-items: center;
	}

	.amount span {
		margin-right: 1rem;
		margin-left: 1rem;
	}
`;

export default SingleProduct;
