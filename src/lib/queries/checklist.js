export default function getQueryPartner(gql){
    return gql`
    query checklist {
  succescriteriums (first: 100) {
    index
    titel
    criteria {
      html
    }
    niveau
    impact
    oplossen
    wcag
  }
}
    `
}