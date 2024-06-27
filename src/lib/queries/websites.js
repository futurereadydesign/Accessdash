export default function getQueryWebsites(gql, slug) {
  return gql`
    query Websites {
      bedrijf(where: {slug: "${slug}"}) {
        titel
        homepage
        websites {
          homepage
          titel
          slug
          id
        }
      }
    }
  `;
}
