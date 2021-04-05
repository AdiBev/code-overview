import { IconTypes } from "../../utils/types";
import Icon from "../icons";

const Home = () => {
  const clientId = "595e7f1a34bfdd2138df";

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-gray-600 text-center my-4">
        View your repositories info created on Github by granting access to your
        account
      </h2>
      <p className="text-center">
        When access is given no personal or any other form of data is stored
      </p>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${clientId}`}
        className="text-white flex items-center py-2 px-4 bg-purple-500 mt-8 rounded-md"
      >
        Authenticate
        <Icon iconType={IconTypes.GITHUB} styles="w-12 h-12 text-white ml-2" />
      </a>
    </div>
  );
};

export default Home;
