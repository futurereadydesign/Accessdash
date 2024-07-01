import { gql } from "graphql-request";
import getQuerySingleUrl from "../../../../lib/queries/single.js";
import getQueryChecklist from "../../../../lib/queries/checklist.js";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ params }) {
  const { checklistID } = params;
  let querySingleUrl = getQuerySingleUrl(gql, checklistID);
  let queryChecklist = getQueryChecklist(gql);

  const [singleUrl, checklist] = await Promise.all([
    hygraph.request(querySingleUrl),
    hygraph.request(queryChecklist),
  ]);

  return {
    singleUrl,
    checklist,
  };
}
