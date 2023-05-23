import sprite from '../../icons/sprite.svg';

const Round = () => (
  <svg width={80} height={80}>
        <use xlinkHref={`${sprite}#round`} />
  </svg>
);

export { Round };