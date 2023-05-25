import sprite from '../../icons/sprite.svg';
import { SVG_LOGO } from './Logo.styled';

export const LogoGoit = () => (
  <SVG_LOGO>
    <use xlinkHref={`${sprite}#goit_logo`} />
  </SVG_LOGO>
);
