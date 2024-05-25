import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/", // Replace with your GraphQL server endpoint
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
});
// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//   uri: "http://localhost:4000",
//   cache: new InMemoryCache(),
// });

export default client;
