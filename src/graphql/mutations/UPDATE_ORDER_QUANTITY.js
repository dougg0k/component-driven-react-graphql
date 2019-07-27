import { gql } from "apollo-boost";

export default gql`
	mutation UpdateOrderQuantity($quantity: Int!) {
		updateOrderQuantity(quantity: $quantity) @client {
			orderQuantity @client
		}
	}
`;
