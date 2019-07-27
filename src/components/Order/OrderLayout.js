import React from "react";
import styled from "styled-components";
import { COLOR_0, COLOR_7 } from "../../utils/colors";
import CounterLayout from "../Counter/CounterLayout";
import Button from "../shared/Button";
import Divider from "../shared/Divider";
import ShoppingPurseIcon from "../shared/icons/ShoppingPurseIcon";
import Number from "../shared/Number";
import OrderInformationPoint from "./OrderInformationPoint";

const OrderBox = styled.div`
	max-height: 440px;
	max-width: 365px;
	background-color: ${COLOR_0};
	border: 2px solid ${COLOR_7};
	margin-top: 80px;
	padding: 30px;
	border-radius: 10px;
`;

const CounterContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 25px;
`;

const ButtonTextContainer = styled.div`
	margin-left: 8px;
`;

const OrderLayout = ({
	data: { publisher, paperback, language, isbn10, isbn13, randomNumber },
	onQuantityUpdate,
	addToBasket
}) => {
	return (
		<OrderBox>
			<>
				<OrderInformationPoint prefix="Publisher" suffix={publisher} />
				<Divider />
				<OrderInformationPoint prefix="Paperback" suffix={paperback} />
				<Divider />
				<OrderInformationPoint prefix="Language" suffix={language} />
				<Divider />
				<OrderInformationPoint prefix="ISBN-10" suffix={isbn10} />
				<Divider />
				<OrderInformationPoint prefix="ISBN-13" suffix={isbn13} />
				<CounterContainer>
					<Number>{randomNumber}</Number>
					<CounterLayout onCounterClick={onQuantityUpdate} />
				</CounterContainer>
				<Button onClick={addToBasket}>
					<ShoppingPurseIcon fillColor={COLOR_0} />
					<ButtonTextContainer>Add to Basket</ButtonTextContainer>
				</Button>
			</>
		</OrderBox>
	);
};

OrderLayout.defaultProps = {
	data: {
		publisher: "",
		paperback: "",
		language: "",
		isbn10: "",
		isbn13: "",
		randomNumber: 0
	},
	onQuantityUpdate: () => {},
	addToBasket: () => {}
};

export default OrderLayout;
