import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import feather from 'feather-icons';
import './Button.css';

export const Button = ({ text, backgroundColor, color, size, fontsize, borderRadius, borderWidth, label, icon, iconPosition, onClick, ...props }) => {

  useEffect(() => {
    feather.replace();
  }, []);

  const mode = text ? 'storybook-button--text' : (props.variant === 'outlined' ? 'storybook-button--outlined' : 'storybook-button--contained');
  const isIconLeft = iconPosition === 'left';
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    fontSize: fontsize,
    borderRadius: borderRadius,
  };

  let iconMarkup = null;
  if (icon && feather.icons[icon]) {
    iconMarkup = <i dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg() }} />;
  }

  return (
    <div className="frame">
      <button className={['button-with-icons  storybook-button', `storybook-button--${size}`, mode].join(' ')} style={{ ...style, padding: size === 'large' ? '12px 30px' : size === 'medium' ? '10px 25px' : '8px 20px' }} onClick={onClick} {...props}>
        {iconMarkup && isIconLeft && iconMarkup}
        <span className="button-text">{label} </span>
        {iconMarkup && !isIconLeft && iconMarkup}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fontsize: PropTypes.number,
  borderRadius: PropTypes.number,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,

};

Button.defaultProps = {
  text: false,
  backgroundColor: null,
  color: null,
  size: 'medium',
  fontsize: '1rem',
  borderRadius: '1rem',
  icon: null,
  iconPosition: 'left',
  onClick: () => { },
};