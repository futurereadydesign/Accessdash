// src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-hygraph-project-url', // vervang dit met jouw Hygraph API URL
  cache: new InMemoryCache(),
});

export default client;
