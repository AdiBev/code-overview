import { Repository } from "../graphql/generated/graphql";

export enum IconTypes {
  FORK = "FORK",
  LOGO = "LOGO",
  ACCOUNT = "ACCOUNT",
  LOCATION = "LOCATION",
  ORGANISATION = "ORGANISATION",
  BIO = "BIO",
  GITHUB = "GITHUB",
  STAR = "STAR",
}

export enum ShowRepos {
  SHOW_FIRST_12 = "SHOW_FIRST_12",
  SHOW_ALL = "SHOW_ALL",
}

export type PickedRepository = { __typename?: "Repository" | undefined } & Pick<
  Repository,
  | "name"
  | "createdAt"
  | "description"
  | "homepageUrl"
  | "url"
  | "forkCount"
  | "isFork"
  | "stargazerCount"
>;
