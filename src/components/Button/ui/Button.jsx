import React from "react";
import './style.scss';
import cn from 'classnames';

const Button = ({
  type = 'primary',
  size = 'M', 
  state = 'default', 
  iconLeft,
  iconRight,
  children
}) => {
  const classes = cn(
    'btn',
    `btn--${type}`,
    `btn--${size}`,
    `btn--${state}`
  );

  return (
    <button className={classes} disabled={state === 'disabled'}>
      {iconLeft && <img src={iconLeft} alt="" className="btn__icon-left" />}
      {children || 'Button'}
      {iconRight && <img src={iconRight} alt="" className="btn__icon-right" />}
    </button>
  );
};

export default Button;
