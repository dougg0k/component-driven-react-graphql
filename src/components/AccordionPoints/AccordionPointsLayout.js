import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "../shared/Accordion";
import Divider from "../shared/Divider";

const List = styled.div`
	display: flex;
	flex-direction: column;
	height: 500px;
`;

const ListItemContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const AccordionContainer = styled.div`
	padding: 25px 0;
`;

export default ({ list, onSelect }) => {
	const [selected, setSelected] = useState({});
	return (
		<List>
			{list &&
				list.map((item, index) => {
					const isNotFirst = index !== 0;
					const isItemSelected = item === selected;
					return (
						<ListItemContainer key={`${index}-${item.title}`}>
							{isNotFirst && <Divider />}
							<AccordionContainer>
								<Accordion
									title={item.title}
									description={item.description}
									onSelected={isOpen => {
										if (isOpen && isItemSelected) {
											onSelect({});
											setSelected({});
										} else {
											onSelect(item);
											setSelected(item);
										}
									}}
									isOpen={isItemSelected}
								/>
							</AccordionContainer>
						</ListItemContainer>
					);
				})}
		</List>
	);
};
