import {
  FirstRepositoriesQuery,
  LastRepositoriesQuery,
} from "../../graphql/generated/graphql";
import RepositoryCard from "./RepositoryCard";

interface Props {
  repositoriesData: FirstRepositoriesQuery | LastRepositoriesQuery;
}

const RepositoryList: React.FunctionComponent<Props> = ({
  repositoriesData,
}) => {
  const repositories = repositoriesData.viewer.repositories.nodes ?? [];
  return (
    <div className="grid grid-flow-row auto-rows-max sm:grid-cols-2 md:grid-cols-3 gap-3 px-4">
      {repositories.length > 0 &&
        repositories?.map(
          (repo, idx) =>
            repo && (
              <RepositoryCard repository={repo} key={`${idx}-${repo.name}`} />
            )
        )}
    </div>
  );
};

export default RepositoryList;
