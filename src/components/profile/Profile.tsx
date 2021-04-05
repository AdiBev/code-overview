import { useEffect, useState } from "react";
import {
  useTotalRepoCountQuery,
  useRepositoriesLazyQuery,
} from "../../graphql/generated/graphql";
import { PickedRepository, ShowRepos } from "../../utils/types";
import RepositoryList from "../repository/RepositoryList";

const Profile = () => {
  const [totalRepos, setTotalRepos] = useState(0);
  const [forkedRepos, setForkedRepos] = useState<PickedRepository[] | []>([]);
  const [showRepoFilter, setShowRepoFilter] = useState<ShowRepos>(
    ShowRepos.SHOW_FIRST_12
  );
  const [showForkedRepos, setShowForkedRepos] = useState(false);

  const handleRepoFilter = (type: ShowRepos) => {
    setShowRepoFilter(type);
  };

  const handleShowForkedRepos = () => setShowForkedRepos((s) => !s);

  const { data: totalCount } = useTotalRepoCountQuery({
    variables: { first: 1 },
  });

  //fetch repos in lazy way
  const [fetchRepos, { data }] = useRepositoriesLazyQuery();

  //get total count of repos
  useEffect(() => {
    totalCount?.viewer.repositories.totalCount &&
      setTotalRepos(totalCount?.viewer.repositories.totalCount);
  }, [totalCount]);

  //fetch repos upon select filter changes
  useEffect(() => {
    //init repos load
    const initLoad = showRepoFilter === ShowRepos.SHOW_ALL ? totalRepos : 12;
    fetchRepos({ variables: { first: initLoad } });
  }, [totalRepos, showRepoFilter, fetchRepos]);

  //filter forked repos
  useEffect(() => {
    const forkedRepos = data?.viewer.repositories.nodes?.filter(
      (repo) => repo?.isFork
    );
    setForkedRepos(forkedRepos as PickedRepository[]);
  }, [data?.viewer.repositories.nodes]);

  //update filter btn and select styles
  const filterOnStyles = "border-purple-600 bg-purple-600 text-white";
  const filterOffStyles = "border-purple-300 bg-transparent text-purple-400";
  const setSelectStyles =
    showRepoFilter === ShowRepos.SHOW_FIRST_12 ||
    showRepoFilter === ShowRepos.SHOW_ALL
      ? filterOnStyles
      : filterOffStyles;
  const setBtnStyles = showForkedRepos ? filterOnStyles : filterOffStyles;

  //switch between forked and total repos data
  const repositoriesData = showForkedRepos
    ? forkedRepos
    : data?.viewer.repositories.nodes;

  return (
    <div className="px-4 pb-4">
      <p className="text-gray-600 font-thin py-3">
        Total repositories: {totalRepos}
      </p>
      <div className="flex flex-col sm:flex-row mb-6">
        <select
          value={showRepoFilter}
          onChange={(e) => handleRepoFilter(e.target.value as ShowRepos)}
          className={`${setSelectStyles} border-2 py-1 px-1 mb-3 sm:mb-0 sm:mr-2 rounded-md`}
        >
          <option value={ShowRepos.SHOW_FIRST_12}>Show first 12</option>
          <option value={ShowRepos.SHOW_ALL}>Show all</option>
        </select>
        <button
          className={`${setBtnStyles} border-2 py-1 px-2 mb-3 sm:mb-0 sm:mr-2 rounded-md`}
          onClick={handleShowForkedRepos}
        >
          Show forked
        </button>
      </div>

      {data && (
        <RepositoryList
          repositoriesData={repositoriesData as PickedRepository[]}
        />
      )}
    </div>
  );
};

export default Profile;
