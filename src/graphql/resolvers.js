import GET_ORDER_QUANTITY from "./queries/GET_ORDER_QUANTITY";

export const resolvers = {
	Mutation: {
		updateOrderQuantity: (_, { quantity }, { cache }) => {
			cache.writeQuery({
				query: GET_ORDER_QUANTITY,
				data: { orderQuantity: quantity }
			});
			return quantity;
		}
	}
};
