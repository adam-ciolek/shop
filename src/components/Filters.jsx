import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filterProduct";

const Filters = () => {
	const {
		categoryUnique,
		all_products,
		updateFilters,
		filters: { category },
	} = useFilterContext();

	const items = categoryUnique(all_products);

	return (
		<Wrapper>
			<h5>Category</h5>
			<div>
				{items.map((item, index) => {
					return (
						<button
							key={index}
							onClick={updateFilters}
							name="category"
							type="button"
							className={`${category === item.toLowerCase() ? "active" : null}`}
						>
							{item}
						</button>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	div {
		display: flex;
		flex-direction: column;
		width: max-content;
		margin-top: 0.5rem;
	}
	button {
		border: none;
		margin-top: 0.6rem;
		text-align: left;
		cursor: pointer;
		text-transform: capitalize;
		padding: 0.5rem 0.7rem;
	}
	.active {
		background-color: green;
		color: white;
	}
`;

export default Filters;
