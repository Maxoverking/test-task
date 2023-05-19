import { GRID_CONTAINER, CARD_LIST, CARD,DIV,UL,LI,BUTTON,AVATAR_IMG,DIV_IMG} from './Card.styled';
import { LogoGoit } from '../MyIcons/Logo';
import { Image } from '../myImage/Image';
import  avatar  from '../../images/i.webp';

function Card() {
    return (
        <>
            <GRID_CONTAINER>
                <CARD_LIST>
                    <CARD>
                        <LogoGoit />
                        <Image /> 
                        <DIV>
                            <DIV_IMG>
                                <AVATAR_IMG src={avatar} alt=""/>
                            </DIV_IMG>
                            
                        </DIV>
                        <UL>
                            <LI>fgd</LI>
                            <LI>dfg</LI>
                        </UL>
                        <BUTTON>Follow</BUTTON>
                    </CARD>
                </CARD_LIST>
            </GRID_CONTAINER>
        </>
    )
};

export default Card;