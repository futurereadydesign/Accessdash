import { gql } from "graphql-request";
import getQueryCompanies from "../lib/queries/companies";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = getQueryCompanies(gql);

  return await hygraph.request(query);
}
