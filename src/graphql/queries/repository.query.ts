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
      isFork
      stargazerCount
    }
  }
`;

export const totalRepositories = gql`
  query totalRepoCount($first: Int!) {
    viewer {
      repositories(last: $first) {
        totalCount
      }
    }
  }
`;

export const repositoriesQuery = gql`
  query repositories($first: Int!) {
    viewer {
      repositories(first: $first) {
        ...RepositoryConnectionFragment
      }
    }
  }
`;
