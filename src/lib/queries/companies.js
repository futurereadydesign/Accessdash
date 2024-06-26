export default function getQueryCompanies(gql) {
  return gql`
    query Companies {
      bedrijven {
        id
        homepage
        titel
        slug
        toegankelijk
      }
    }
  `;
}
