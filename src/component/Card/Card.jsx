import { GRID_CONTAINER, CARD_LIST, CARD,DIV,AVATAR_IMG, DIV_IMG} from './Card.styled';
import { LogoGoit } from '../MyIcons/Logo';
import { Image } from '../myImage/Image';
import { Round } from '../MyIcons/Round';
import { TweetBlock } from '../Tweet/TweetBlock';
import { useSelector } from 'react-redux';
import { usersFollowSelector } from '../../redux/users/selectors';

const  Card = ()=> {
    const users = useSelector(usersFollowSelector);
return (
<GRID_CONTAINER>
    <CARD_LIST>
        {users.map((user) => (
            <CARD key={user.id} id={user.id}>
            <LogoGoit />
            <Image /> 
            <DIV>
                <DIV_IMG>
                    <AVATAR_IMG src={`${user.avatar}`} alt={user.name} />
                    <Round/>
                </DIV_IMG>
            </DIV>
                <TweetBlock user={user} />  
        </CARD>
        ))}
    </CARD_LIST>
</GRID_CONTAINER>
)
};

export default Card;