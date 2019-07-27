import React, { Component } from "react";
import { graphql, Query } from "react-apollo";
import HeroSectionLayout from "../components/HeroSection/HeroSectionLayout";
import OrderLayout from "../components/Order/OrderLayout";
import UPDATE_ORDER_QUANTITY from "../graphql/mutations/UPDATE_ORDER_QUANTITY";
import GET_SELECTED_BOOK from "../graphql/queries/GET_SELECTED_BOOK";

class OrderContainer extends Component {
	onQuantityUpdate = quantity => {
		this.props.mutate({ variables: { quantity } });
	};

	addToBasket = () => {};

	render() {
		return (
			<Query query={GET_SELECTED_BOOK}>
				{({ data }) => (
					<div>
						<HeroSectionLayout
							title={data.selectedBook.title}
							description={data.selectedBook.description}
						>
							<div>
								<OrderLayout
									data={data.selectedBook}
									onQuantityUpdate={this.onQuantityUpdate}
									addToBasket={this.addToBasket}
								/>
							</div>
						</HeroSectionLayout>
					</div>
				)}
			</Query>
		);
	}
}

export default graphql(UPDATE_ORDER_QUANTITY)(OrderContainer);
