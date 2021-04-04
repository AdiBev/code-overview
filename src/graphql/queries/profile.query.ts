import { gql } from "@apollo/client";

gql`
  fragment ProfileFragment on User {
    login
    bio
    name
    avatarUrl
    company
    location
    followers {
      totalCount
    }
    following {
      totalCount
    }
  }
`;

export const profileQuery = gql`
  query profile {
    viewer {
      ...ProfileFragment
    }
  }
`;
