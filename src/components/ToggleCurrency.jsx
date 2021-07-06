import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from './Button';
import { CURRENCY } from '../context/CurrencyContext';

function ToggleCurrency(props) {

  const onClickHandlerHrv = () => {
    props.setCurrency(CURRENCY.hrv);
  }

  const onClickHandlerDol = () => {
    props.setCurrency(CURRENCY.dol);
  }

  const onClickHandlerEuro = () => {
    props.setCurrency(CURRENCY.euro);
  }

  return (
    <div className="product__control">
      <Button name="hrv" onClick={onClickHandlerHrv}>&#8372;</Button>
      <Button name="dol" onClick={onClickHandlerDol}>&#36;</Button>
      <Button name="euro" onClick={onClickHandlerEuro}>&euro;</Button>
    </div>
  )
}

ToggleCurrency.propTypes = {
  setCurrency: PropTypes.func.isRequired,
}

export default ToggleCurrency

