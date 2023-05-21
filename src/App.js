import { useEffect, useState } from "react";
import { CONTAINER, BUTTON } from "./App.styled.jsx";

import { getUsers } from "./component/servises/Servises.js";
import Card from "./component/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { usersGetAction } from "./redux/users/actions.js";
import { usersSelector } from "./redux/users/selectors.js";
import { NavigationButton } from "./component/NavigationButton/NavigationButton.jsx";
// import HomePage from "./component/pages/HomePage/HomePage.jsx";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUsersData = await getUsers(pages);
        dispatch(usersGetAction(getUsersData));
      } catch (error) {
        console.log("🚀  error ", error);
      }
    };
    fetchData();
  }, [dispatch, pages]);

  const loadMore = () => {
    setPages((page) => page + 1);
  };

  return (
    <>
      {/* <HomePage /> */}

      <NavigationButton />
      <CONTAINER>
        {users.length ? (
          <>
            <Card />

            <BUTTON type="button" onClick={loadMore}>
              load more
            </BUTTON>
          </>
        ) : (
          " Loading"
        )}
      </CONTAINER>
    </>
  );
}

export default App;
