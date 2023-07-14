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
  mutation saveSearch(
    $billId: ID,
    $billNumber: String,
    $changeHash: String,
    $lastAction: String,
    $lastActionDate: String,
    $relevance: Int,
    $researchUrl: String,
    $state: String,
    $textUrl: String,
    $title: String,
    $url: String
  ) {
    saveSearch(
      billId: $billId,
      billNumber: $billNumber,
      changeHash: $changeHash,
      lastAction: $lastAction,
      lastActionDate: $lastActionDate,
      relevance: $relevance,
      researchUrl: $researchUrl,
      state: $state,
      textUrl: $textUrl,
      title: $title,
      url: $url
    ) {
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
`;
