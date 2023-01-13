import useAuth from "../hooks/useAuth";
import MyNfts from "../components/templates/MyNfts";

const MyGALLERY = () => {
  const { user, setUser } = useAuth();

  return (
    <div>
      <MyNfts data={user} />
    </div>
  );
};

export default MyGALLERY;
