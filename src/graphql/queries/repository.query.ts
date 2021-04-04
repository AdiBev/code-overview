import { gql } from "@apollo/client";

gql`
  fragment RepositoryConnectionFragment on RepositoryConnection {
    nodes {
      name
      createdAt
      description
      homepageUrl
      url
      forkCount
    }
  }
`;

export const lastRepositoriesQuery = gql`
  query lastRepositories($last: Int!) {
    viewer {
      repositories(last: $last) {
        ...RepositoryConnectionFragment
      }
    }
  }
`;

export const firstRepositoriesQuery = gql`
  query firstRepositories($first: Int!) {
    viewer {
      repositories(first: $first) {
        ...RepositoryConnectionFragment
      }
    }
  }
`;
