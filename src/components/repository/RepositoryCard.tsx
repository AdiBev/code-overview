import { renderDate } from "../../utils/renderDate";
import { IconTypes, PickedRepository } from "../../utils/types";
import Icon from "../icons";

interface Props {
  repository: PickedRepository;
}

const RepositoryCard: React.FunctionComponent<Props> = ({ repository }) => {
  return (
    <div className="px-4 py-2 shadow rounded-md">
      <header className="flex items-center">
        <h2 className="text-blue-400 mr-auto">
          <a href={repository.url} target="_blank" rel="noreferrer">
            {repository.name}
          </a>
        </h2>
        <span className="flex text-purple-600 mr-4">
          <Icon iconType={IconTypes.STAR} styles="w-6 h-6 text-purple-600" />
          {repository.stargazerCount}
        </span>
        <span className="flex text-purple-600">
          <Icon iconType={IconTypes.FORK} styles="w-6 h-6 text-purple-600" />
          {repository.forkCount}
        </span>
      </header>

      <p className="my-1 text-gray-600 font-normal">{repository.description}</p>
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
      <span className="text-gray-400 text-sm block font-thin">
        Created: {renderDate(repository.createdAt)}
      </span>
    </div>
  );
};

export default RepositoryCard;
