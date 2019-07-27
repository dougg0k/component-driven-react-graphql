import React, { Component } from "react";
import { Query } from "react-apollo";
import HeaderLayout from "../components/Header/HeaderLayout";
import GET_ORDER_QUANTITY from "../graphql/queries/GET_ORDER_QUANTITY";

const links = ["books", "blog", "contact", "login"];

class HeaderContainer extends Component {
	render() {
		return (
			<Query query={GET_ORDER_QUANTITY}>
				{({ data }) => {
					return (
						<div>
							<HeaderLayout orderQuantity={data.orderQuantity} links={links} />
						</div>
					);
				}}
			</Query>
		);
	}
}

export default HeaderContainer;
