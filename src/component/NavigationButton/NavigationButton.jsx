import {
  ButtonHolder,
  Dot,
  Light,
  LightActive,
  LightButton,
  LightButtonContainer,
  LightButtonWrap,
  LightHolder,
} from './NavigationButton.styled';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosMan } from 'react-icons/io';
import { MdEmojiPeople } from 'react-icons/md';
import { GiHumanPyramid } from 'react-icons/gi';
import ButtonBack from '../MyIcons/ButtonBack';
import { filtered } from '../../redux/users/usersSlice';
import { showCard } from '../../constants/showCard';
import { usersFilterSelector } from '../../redux/users/selectors';

const NavigationButton = () => {
  const currentLight = useSelector(usersFilterSelector);
  const dispatch = useDispatch();

  const handleOption = filter => {
    dispatch(filtered(filter));
  };

  const buttonData = [
    {
      icon: <MdEmojiPeople color="#fff" size={32} />,
      option: showCard.followings,
      currentLight: currentLight === 'followings',
    },
    {
      icon: <GiHumanPyramid color="#fff" size={32} />,
      option: showCard.showAll,
      currentLight: currentLight === 'showAll',
    },
    {
      icon: <IoIosMan color="#fff" size={32} />,
      option: showCard.follow,
      currentLight: currentLight === 'follow',
    },
  ];

  return (
    <>
      <LightButtonWrap>
        <ButtonBack />
        {buttonData.map(({ icon, currentLight, option }, index) => (
          <LightButtonContainer key={index}>
            <LightButton>
              <ButtonHolder>{icon}</ButtonHolder>
              <LightHolder>
                <Dot></Dot>
                {currentLight ? (
                  <LightActive
                    onClick={() => handleOption(option)}
                  ></LightActive>
                ) : (
                  <Light onClick={() => handleOption(option)}></Light>
                )}
              </LightHolder>
            </LightButton>
          </LightButtonContainer>
        ))}
      </LightButtonWrap>
    </>
  );
};
export default NavigationButton;
