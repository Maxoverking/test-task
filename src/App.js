import { useEffect, useState } from "react";
import { CONTAINER } from "./App.styled.jsx";
import Card from "./component/Card/Card";
import { getUsers } from "./component/servises/Servises.js";

function App() {
  const [users, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUsersData = await getUsers();
        setUsersData(getUsersData);
      } catch (error) {
        console.log("🚀  error ", error);
      }
    };
    fetchData();
  }, []);

  console.log("🚀  users:", users);
  return (
    <CONTAINER className="App">
      {users.length > 0 ? <Card /> : " Loading"}
    </CONTAINER>
  );
}

export default App;
