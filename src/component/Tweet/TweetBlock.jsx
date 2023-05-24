import { updateUserThunk } from '../../servises/servises';
import { UL, LI, BUTTON } from './TweetBlock.styled';
import formatCommas from '../../helper/formatComas';
import { isExist } from '../../helper/existingUser';
import { useDispatch, useSelector } from 'react-redux';
import {
  minusFollowerAction,
  plusFollowerAction,
} from '../../redux/follow/followSlice';
import { existingIdSelector } from '../../redux/follow/selector';
import {
  usersChangeActionMinus,
  usersChangeActionPlus,
} from '../../redux/users/actions';
import { updatedUsers } from '../../helper/updateUsers';

const TweetBlock = ({ user }) => {
  const dispatch = useDispatch();
  const getId = useSelector(existingIdSelector);
  let existingUser = isExist(getId, user);

  const getUserId = evt => {
    const currentId = evt.target.id;
    const btnText = evt.target.innerText;

    if (btnText === 'FOLLOW') {
      dispatch(plusFollowerAction(currentId));
      dispatch(usersChangeActionPlus(currentId));

      const update = updatedUsers(user, true);
      dispatch(updateUserThunk(update));
    } else if (btnText === 'FOLLOWING') {
      dispatch(minusFollowerAction(currentId));
      dispatch(usersChangeActionMinus(currentId));

      const update = updatedUsers(user, false);
      dispatch(updateUserThunk(update));
    }
  };

  return (
    <>
      <UL>
        <LI>{user.tweets} tweets</LI>
        <LI>{formatCommas(user.followers)} followers</LI>
      </UL>
      <BUTTON exist={existingUser} id={`${user.id}`} onClick={getUserId}>
        {existingUser ? 'Following' : 'Follow'}
      </BUTTON>
    </>
  );
};
export { TweetBlock };
