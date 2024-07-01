export default function getQuerySingleUrl(gql, id) {
  return gql`
        query Url {
          url(where: {id: "${id}"}) {
            url
            slug
            website {
                titel
                slug
                urls {
                    slug
                    id
                }
            }
          }
        }
      `;
}
