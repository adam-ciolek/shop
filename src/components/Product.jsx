import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/contextProduct";

const Product = ({ products, loading }) => {
	const { addToCart } = useGlobalContext();

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<Wrapper>
			{products.map((product) => {
				// console.log(product);
				const { id, image, title, description, price } = product;
				return (
					<article key={id}>
						<img src={image} alt={title} />
						<div>
							<h4>{title}</h4>
							<div className="btn">
								<p>${price}</p>
								<button
									type="button"
									onClick={() =>
										addToCart(id, image, title, description, price)
									}
								>
									Add to card
								</button>
							</div>
						</div>
					</article>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 20px;
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px;

	@media (min-width: 425px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 768px) {
		margin-top: 0;
	}
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	img {
		width: 100%;
		display: block;
	}

	h4 {
		margin-top: 10px;
	}

	.btn {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}

	.btn button {
		background-color: #00ac7c;
		padding: 6px 12px;
		border: none;
		border-radius: 5px;
		color: #fff;
		cursor: pointer;
	}
`;

export default Product;
