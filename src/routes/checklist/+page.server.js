import { gql } from "graphql-request";
import getQueryChecklist from "$lib/queries/checklist";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = getQueryChecklist(gql);

    return await hygraph.request(query);
}