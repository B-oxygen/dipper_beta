import useAuth from "../hooks/useAuth";
import MyNfts from "../components/templates/MyNfts";

const MyGALLERY = () => {
  const { user, setUser } = useAuth();
  return <MyNfts user={user} />;
};

export default MyGALLERY;
