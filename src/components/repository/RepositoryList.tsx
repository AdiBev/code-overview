import { PickedRepository } from "../../utils/types";
import RepositoryCard from "./RepositoryCard";

interface Props {
  repositoriesData: PickedRepository[];
}

const RepositoryList: React.FunctionComponent<Props> = ({
  repositoriesData,
}) => {
  return (
    <div className="grid grid-flow-row auto-rows-max sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {repositoriesData?.length > 0 &&
        repositoriesData?.map(
          (repo, idx) =>
            repo && (
              <RepositoryCard repository={repo} key={`${idx}-${repo.name}`} />
            )
        )}
    </div>
  );
};

export default RepositoryList;
