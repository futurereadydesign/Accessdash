export default function getQueryPartner(gql){
    return gql`
    query checklist {
  succescriteriums {
    index
    titel
    criteria {
      html
    }
    niveau
    impact
    oplossen
  }
}
    `
}