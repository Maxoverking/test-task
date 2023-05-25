import { useLocation } from 'react-router-dom';
import { Button } from './ButtonBack.styled';

const ButtonBack = () => {
  const location = useLocation();
  return (
    <Button className="back" to={location.state?.from ?? '/'}>
      <span className="circle">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">BACK</span>
    </Button>
  );
};

export default ButtonBack;
