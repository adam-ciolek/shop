import React from "react";
import styled from "styled-components";
import { Product, Filters } from "../components";
import { useGlobalContext } from "../context/contextProduct";

const Products = () => {
	const { all_products: products, loading } = useGlobalContext();

	return (
		<Wrapper className="section">
			<div className="filter">
				<Filters />
			</div>
			<div className="product">
				<Product products={products} loading={loading} />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: row;
	}

	.filter {
		flex-basis: 30%;
	}
	.product {
		flex-basis: 70%;
	}
`;

export default Products;
