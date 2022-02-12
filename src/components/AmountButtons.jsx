import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
const AmountButtons = ({ amount, decrease, increase }) => {
	return (
		<Span>
			<AiOutlineMinus onClick={decrease} />
			<span>{amount}</span>
			<AiOutlinePlus onClick={increase} />
		</Span>
	);
};

const Span = styled.span`
	span {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
`;

export default AmountButtons;
