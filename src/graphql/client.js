import { ApolloClient, InMemoryCache } from "apollo-boost";
import { data } from "../utils/fakeData";
import { resolvers } from "./resolvers";

const cache = new InMemoryCache({ addTypename: false });

const client = new ApolloClient({
	uri: "",
	credentials: "include",
	cache,
	resolvers,
	connectToDevTools: process.env.NODE_ENV === "development"
});

cache.writeData({
	data: {
		orderQuantity: 0,
		books: data,
		selectedBook: data[0]
	}
});

export default client;
