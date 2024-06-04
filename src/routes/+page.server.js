import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = gql`
    query Program {
        websites {
            id
            titel
            slug
            homepage
        }
    }`;

    return await hygraph.request(query);
}