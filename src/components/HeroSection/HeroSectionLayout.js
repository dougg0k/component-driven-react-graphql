import React from "react";
import styled from "styled-components";
import { COLOR_22 } from "../../utils/colors";
import Description from "../shared/Description";
import Heading from "../shared/Heading";

const HeroSection = styled.div`
	background-color: ${COLOR_22};
	height: 360px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	@media (max-width: 1170px) {
		height: 100%;
	}
`;

const TextContainer = styled.div`
	margin-left: 135px;
	margin-top: 80px;
	@media (max-width: 580px) {
		margin-left: 10px;
	}
`;

export default ({ children, title, description }) => {
	return (
		<HeroSection>
			<TextContainer>
				<Heading size="3em">{title}</Heading>
				<Description>{description}</Description>
			</TextContainer>
			<>{children}</>
		</HeroSection>
	);
};
