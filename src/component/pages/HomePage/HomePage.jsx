import { BUTTON,DIV,DIV_CARD, P} from "./HomePage.styled";
import { GiExitDoor } from 'react-icons/gi';
import card  from '../../../images/Follow.png';
import card2  from '../../../images/Following.png';
import ThreeScene from "./ThreeScene";

export default function HomePage() {
    return (
        <>
        <BUTTON to="/tweets">
            <GiExitDoor size={52} color="#c0f"/>
        </BUTTON>
        <DIV>
                <P> The test assignment involves the development of a web
                    application using the following technologies and libraries: React, Redux
                    (with Redux Toolkit and Redux DevTools Extension), React Router, Axios, Styled Components.
                    The project is created using Create React App and also includes React Icons, React Loader Spinner, React Redux Persist.
                    Creation of requests by user profile, added interactivity when clicking on the <i>Follow</i>  button.
                    The Three.js library is used for data visualization, responsive design. Completed according to the specification.
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
