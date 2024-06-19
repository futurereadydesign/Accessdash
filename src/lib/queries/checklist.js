export default function getQueryPartner(gql){
    return gql`
    query checklist {
      richtlijns(first: 100) {
        titel
        slug
        id
        index
        uitleg {
          html
        }
        succescriteria(first: 100) {
          criteria {
            html
          }
          id
          index
          niveau
          titel
          wcag
          impact
          oplossen
          testen
        }
        icon {
          id
          fileName
          mimeType
          url
          size
        }
      }
    }
    `
}