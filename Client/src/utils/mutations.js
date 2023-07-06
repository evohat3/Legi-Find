import { gql } from '@apollo/client';


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
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
      password
    }
  }
}
`;
