import { gql } from "graphql-request";
import getQueryWebsites from "../../lib/queries/websites.js";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
  const { websiteID } = params;
  let query = getQueryWebsites(gql, websiteID);
  return await hygraph.request(query);
}
