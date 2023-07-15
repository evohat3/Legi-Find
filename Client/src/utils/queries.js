import { gql } from '@apollo/client';

export const FIND_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      first
      last
      savedBills {
        billId
        billNumber
        changeHash
        lastAction
        lastActionDate
        relevance
        researchUrl
        state
        textUrl
        title
        url
      }
    }
  }
`;