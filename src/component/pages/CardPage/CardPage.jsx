import { pagesStore } from '../../../redux/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersThunk } from '../../../servises/servises';
import Card from '../../Card/Card';
import { NavigationButton } from '../../NavigationButton/NavigationButton';
import {
  usersPagesSelector,
  usersSelector,
} from '../../../redux/users/selectors';
import { BUTTON, CONTAINER, LOADER } from './CardPage.styled';
import { useEffect, useState } from 'react';
import { LineWave } from 'react-loader-spinner';

const CardPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const previousPage = useSelector(usersPagesSelector);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (previousPage < page) {
      dispatch(getUsersThunk(page));
      dispatch(pagesStore(page));
    }
  }, [dispatch, previousPage, page]);

  const loadMore = () => {
    setPage(page => page + 1);
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
  );
};
export default CardPage;
