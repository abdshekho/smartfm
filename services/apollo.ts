import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import config from "../constants/config";
import Cookies from "js-cookie";
import { createUploadLink } from "apollo-upload-client";

const httpLink = createUploadLink({
    uri: `${config.API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
    const token = Cookies.get("auth_token");

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const client = new ApolloClient({
    ssrMode: typeof window !== "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
