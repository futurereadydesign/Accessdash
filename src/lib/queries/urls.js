export default function getQueryUrls(gql, slug) {
  return gql`
      query Urls {
        website(where: {slug: "${slug}"}) {
            titel
            slug
            urls {
              slug
              url
              id
            }
        }
      }
    `;
}
