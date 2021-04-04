import { useFirstRepositoriesQuery } from "../../graphql/generated/graphql";
import RepositoryList from "../repository/RepositoryList";

const Profile = () => {
  const { data } = useFirstRepositoriesQuery({ variables: { first: 5 } });
  console.log(data?.viewer.repositories.nodes);

  return <div>{data && <RepositoryList repositoriesData={data} />}</div>;
};

export default Profile;
