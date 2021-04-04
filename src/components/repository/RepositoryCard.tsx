import { Repository } from "../../graphql/generated/graphql";

interface Props {
  repository: { __typename?: "Repository" } & Pick<
    Repository,
    "name" | "createdAt" | "description" | "homepageUrl" | "url"
  >;
}

const RepositoryCard: React.FunctionComponent<Props> = ({ repository }) => {
  const createdDateData = new Date(repository.createdAt);
  const createdDate = `${createdDateData.getDate()}/${createdDateData.getMonth()}/${createdDateData.getFullYear()}`;
  return (
    <div className="px-4 py-2 shadow rounded-md">
      <h1 className="text-gray-800">
        <a href={repository.url} target="_blank" rel="noreferrer">
          {repository.name}
        </a>
      </h1>
      <p className="my-1 text-gray-600">{repository.description}</p>
      {repository.homepageUrl && (
        <a
          className="text-white bg-purple-600 inline-block py-2 px-3 my-2 rounded-md"
          href={repository.homepageUrl}
          target="_blank"
          rel="noreferrer"
        >
          App link
        </a>
      )}
      <span className="text-gray-400 text-sm block">
        Created: {createdDate}
      </span>
    </div>
  );
};

export default RepositoryCard;
