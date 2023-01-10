import useAuth from "@hooks/useAuth";

const MyGALLERY = () => {
  const { user, setUser } = useAuth();
  return <h1> {user} </h1>;
};

export default MyGALLERY;
