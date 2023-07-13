import { gql } from '@apollo/client';


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const SIGNUP = gql`
mutation AddUserMutation($first: String!, $last: String!, $email: String!, $password: String!) {
  addUser(first: $first, last: $last, email: $email, password: $password) {
    token
    user {
      _id
      first
      last
      email
    }
  }
}
`;

export const SAVE_SEARCH = gql`
  mutation saveSearch($searchInput: SaveBillInput!) {
    saveBill(input: $searchInput) {
      _id
      billID
      changeHash
      billSummary
      billText
      billTitle
    }
  }
`;
