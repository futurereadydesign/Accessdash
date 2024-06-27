import { gql } from "graphql-request";
import getQueryUrls from "../../../lib/queries/urls.js";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
  const { urlID } = params;
  let query = getQueryUrls(gql, urlID);
  return await hygraph.request(query);
}
