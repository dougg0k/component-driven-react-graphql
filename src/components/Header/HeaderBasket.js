import React from "react";
import styled from "styled-components";
import { COLOR_11, COLOR_13 } from "../../utils/colors";
import CounterBox from "../Counter/CounterBox";
import ShoppingPurseIcon from "../shared/icons/ShoppingPurseIcon";
import HeaderLink from "./HeaderLink";

const BasketButton = styled.div`
	display: flex;
	flex-direction: row;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	background-color: ${COLOR_13};
	margin-right: 2px;
	padding: 12px 15px;
	text-align: center;
	justify-content: center;
`;

const ButtonName = styled.span`
	margin: 0 5px;
`;

export default ({ quantity }) => {
	return (
		<HeaderLink to="/basket">
			<BasketButton>
				<ShoppingPurseIcon fillColor={COLOR_11} />
				<ButtonName>Basket</ButtonName>
			</BasketButton>
			<CounterBox hasRightRadius>{quantity}</CounterBox>
		</HeaderLink>
	);
};
