import React, { useState } from "react";
import styled from "styled-components";
import { COLOR_11 } from "../../utils/colors";
import MinusIcon from "../shared/icons/MinusIcon";
import PlusIcon from "../shared/icons/PlusIcon";
import CounterBox from "./CounterBox";
import CounterButton from "./CounterButton";

const CounterLayoutContainer = styled.div`
	display: flex;
	flex-direction: row;
	max-height: 40px;
`;

const CounterLayout = ({ onCounterClick }) => {
	const [count, setCount] = useState(0);
	return (
		<CounterLayoutContainer>
			<CounterButton
				hasLeftRadius
				onClick={() => {
					if (count > 0) {
						const updatedCount = count - 1;
						setCount(updatedCount);
						onCounterClick(updatedCount);
					}
				}}
			>
				<MinusIcon fillColor={COLOR_11} />
			</CounterButton>
			<CounterBox>{count}</CounterBox>
			<CounterButton
				hasRightRadius
				onClick={() => {
					const updatedCount = count + 1;
					setCount(updatedCount);
					onCounterClick(updatedCount);
				}}
			>
				<PlusIcon fillColor={COLOR_11} />
			</CounterButton>
		</CounterLayoutContainer>
	);
};

CounterLayout.defaultProps = {
	onCounterClick: () => {}
};

export default CounterLayout;
