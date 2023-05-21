import { BUTTON,DIV,DIV_CARD, P} from "./HomePage.styled";
import { GiEntryDoor } from 'react-icons/gi';
import card  from '../../../images/Follow.png';
import card2  from '../../../images/Following.png';
import ThreeScene from "./ThreeScene";


export default function HomePage(params) {
    return (
        <>
        <BUTTON>
            <GiEntryDoor size={52} color="#c0f"/>
        </BUTTON>
        <DIV>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Sit est ipsum accusantium at, suscipit
                    sed et perspiciatis aspernatur
            delectus quidem, atque iusto magni modi distinctio
            praesentium. Hic quasi eos facilis!
            </P>
        </DIV>
        <DIV_CARD>
            <img src={`${card}`} alt="card" width="240"  />
            <img src={`${card2}`} alt="card" width="240"  />
        </DIV_CARD>
        <ThreeScene />
    </>
        
    )
};
