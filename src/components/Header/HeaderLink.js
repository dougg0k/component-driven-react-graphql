import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_11 } from "../../utils/colors";

const StyledLink = styled(Link)`
	color: ${COLOR_11};
	font-weight: 600;
	text-decoration: none;
	display: flex;
	flex-direction: row;
	margin: 0 15px;
`;

export default ({ to, children }) => {
	return <StyledLink to={to}>{children}</StyledLink>;
};
