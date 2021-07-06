import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className="product__button" onClick={props.onClick} type="button" name={props.name}>{props.children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button

