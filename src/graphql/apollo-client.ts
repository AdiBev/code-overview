import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "https://api.github.com/graphql" });

///creating auth link to attach headers for the future requests
const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("accessToken");
  //setting access token
  operation.setContext({
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
