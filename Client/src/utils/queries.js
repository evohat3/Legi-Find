import { gql } from '@apollo/client';

export const FIND_USER = gql`
query Query($id: ID!) {
  findUser(_id: $id) {
    _id
    email
    password
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
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
