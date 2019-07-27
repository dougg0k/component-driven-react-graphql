import React from "react";
import styled from "styled-components";
import HeaderBasket from "./HeaderBasket";
import HeaderLink from "./HeaderLink";

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin-top: 15px;
`;

const Img = styled.img`
	width: 65px;
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: row;
	text-transform: capitalize;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 580px) {
		flex-direction: column;
		flex-wrap: wrap;
	}
`;

export default ({ orderQuantity, links }) => {
	return (
		<Header>
			<HeaderLink to="/">
				<Img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
			</HeaderLink>
			<RightSide>
				{links &&
					links.map(link => (
						<HeaderLink key={link} to={link}>
							{link}
						</HeaderLink>
					))}
				<HeaderBasket quantity={orderQuantity} />
			</RightSide>
		</Header>
	);
};
