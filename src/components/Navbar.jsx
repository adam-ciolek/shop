import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../util/data";

const Navbar = () => {
	return (
		<>
			<Wrapper>
				{links.map((el, index) => {
					const { url, link } = el;
					return (
						<div key={index}>
							<Link to={url}>{link}</Link>
						</div>
					);
				})}
			</Wrapper>
			<hr />
		</>
	);
};

export default Navbar;

const Wrapper = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;

	div {
		margin-right: 2rem;
		a {
			text-decoration: none;
			text-transform: uppercase;
			color: #383838;
		}
	}

	hr {
		height: 1px;
		background-color: black;
		opacity: 0.7;
		width: 100%;
	}
`;
