import { useDispatch, useSelector } from "react-redux";
import Card from "../../Card/Card";
import { NavigationButton } from "../../NavigationButton/NavigationButton";
import { usersSelector } from "../../../redux/users/selectors";
import { BUTTON, CONTAINER } from "./CardPage.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../../servises/Servises";
import { usersGetAction } from "../../../redux/users/actions";


const CardPage = () => {
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
    )
}
export default CardPage;
