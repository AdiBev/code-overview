import { useEffect, useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

/**
 * This component is used to fetch access token
 * Once access token is set, user is navigated to /profile
 * Shows loading animation, errors or any other suitable infos
 */
const GetProfile = () => {
  const [error, setError] = useState(false);
  const history = useHistory();
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");

  const getAccessToken = async (code: string) => {
    const url = `https://childlike-wakeful-fluorine.glitch.me/api/authenticate?code=${code}`;
    const req = await fetch(url);
    const res = await req.json();
    return { res };
  };

  useEffect(() => {
    ///fetch accesstoken if code is not null
    code &&
      getAccessToken(code)
        .then((tokenData) => {
          if (tokenData?.res.access_token) {
            //set accesstoken if api req is successful
            localStorage.setItem("accessToken", tokenData?.res.access_token);
            //reset error state
            setError(false);
            //navigate to /profile once acesstoken is set
            history.push("/profile");
          }
        })
        .catch((error) => error && setError(true));
  }, [code, history]);

  return (
    <div className="p-4 flex flex-col items-center">
      {!error && (
        <>
          <span className="text-green-400 text-center">Getting Profile...</span>
          <span className="text-gray-700 text-center mt-2">
            Please wait patiently, your profile will be fetched soon...
          </span>
        </>
      )}
      {error && (
        <h2 className="text-red-400 text-center">
          Something went wrong please try authenticating again{" "}
          <Link to="/" className="text-blue-400">
            here
          </Link>
        </h2>
      )}
    </div>
  );
};

export default GetProfile;
