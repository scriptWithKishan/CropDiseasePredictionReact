import { useSelector } from "react-redux";

import Header from "../Header";

function Profile() {
  const { user, loading, error } = useSelector((store) => store.userState);

  if (loading === true) return <div>Loading...</div>;

  if (error !== "") return <div>{error}</div>;

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Profile</h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
}

export default Profile;
