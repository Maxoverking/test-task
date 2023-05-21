import { UL,LI,BUTTON} from './TweetBlock.styled';
import formatCommas from "../../helper/formatComas"
import { isExist } from "../../helper/existingUser";
import {
    useDispatch,
    useSelector
} from "react-redux";
import { minusFollowerAction, plusFollowerAction } from "../../redux/follow/followSlice";
import { existingIdSelector } from "../../redux/follow/selector";
import { updateUser } from '../../servises/servises';
import { usersChangeActionMinus, usersChangeActionPlus } from '../../redux/users/actions';

const TweetBlock = ({ user }) => {
    const dispatch = useDispatch();
    const getId = useSelector(existingIdSelector);

    let existingUser = isExist(getId, user);

    const getUserId = (evt) => {
        const currentId = evt.target.id;
        
        if (!existingUser) {
            updateUser(user,true)
            dispatch(plusFollowerAction(currentId));
            dispatch(usersChangeActionPlus(currentId));
        } else if (existingUser) {
            updateUser(user,false)
            dispatch(minusFollowerAction(currentId));
            dispatch(usersChangeActionMinus(currentId));
        }
    }

    return (<>
            <UL>
                <LI>{user.tweets} tweets</LI>
            <LI>{formatCommas(user.followers)} followers</LI>
            </UL>
                <BUTTON exist={existingUser}
                    id={`${user.id}`}
                    onClick={getUserId}>
                {existingUser? "Following" : "Follow"}
                </BUTTON>
    </>
    )
}
export {TweetBlock}
