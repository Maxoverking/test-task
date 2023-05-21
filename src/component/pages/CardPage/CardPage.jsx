import { useDispatch, useSelector } from "react-redux";
import Card from "../../Card/Card";
import { NavigationButton } from "../../NavigationButton/NavigationButton";
import { usersPagesSelector, usersSelector } from "../../../redux/users/selectors";
import { BUTTON, CONTAINER,LOADER } from "./CardPage.styled";
import { useEffect, useState } from "react";
import { getUsers } from "../../../servises/servises";
import { usersGetAction } from "../../../redux/users/actions";
import {  pagesStore } from "../../../redux/users/usersSlice";
import { LineWave } from "react-loader-spinner";


const CardPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const page = useSelector(usersPagesSelector);

    const [pages, setPages] = useState(1);

    useEffect(() => {
    const fetchData = async () => {
        try {
            if (page < pages) {
            const getUsersData = await getUsers(pages);
            dispatch(usersGetAction(getUsersData));
            dispatch(pagesStore(pages));
          
            }
        } catch (error) {
        console.log(error);
        }
    };
    fetchData();
  }, [dispatch, page, pages]);

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
                <LOADER>
                    <LineWave
                        height="100"
                        width="100"
                        color="#2c3d87"
                        ariaLabel="line-wave"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        firstLineColor=""
                        middleLineColor=""
                        lastLineColor=""
                        />
                </LOADER>
                    
                    )}
                </CONTAINER>
        </>
    )
}
export default CardPage;
