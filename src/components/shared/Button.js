import React from "react";
import styled from "styled-components";
import { COLOR_0, COLOR_11 } from "../../utils/colors";

const Button = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background: none;
	background-color: ${COLOR_11};
	color: ${COLOR_0};
	border: 0;
	padding: 15px 75px;
	cursor: pointer;
	font-weight: 700;
	font-size: 1.2em;
	border-radius: 5px;
	font-family: "Muli", sans-serif;
	&:focus {
		outline: 0;
	}
`;

export default ({ onClick, children }) => {
	return <Button onClick={onClick}>{children}</Button>;
};
