import { gql } from "graphql-request";
import getQueryPartner from "$lib/queries/partner";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = getQueryPartner(gql);

    return await hygraph.request(query);
}