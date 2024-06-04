import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluvpp6wl115107umu45uwo0c/master", {
  headers: {
    Authorization: `Bearer cluvpp6wl115107umu45uwo0c`
  }
})