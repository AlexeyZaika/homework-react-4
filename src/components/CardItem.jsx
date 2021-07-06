import React from 'react';
import PropTypes from 'prop-types';
import { CurrencyContext, CURRENCY } from '../context/CurrencyContext';
import { toDol, toEuro, convert } from '../utils/tryConvert';

function CardItem(props) {
  const currency = React.useContext(CurrencyContext);
  const [coast, setCost] = React.useState(props.price);

  React.useEffect( () => {
    setCost(currency.name === 'hrv' ? props.price : currency.name === 'dol' ? convert(props.price, toDol) : convert(props.price, toEuro));
  }, [currency.name, props.price])

  return (
    <div className="product__item item-product">
      <div className="item-product__image"><img src={props.url} alt="" /></div>
      <h2 className="item-product__title">{props.title}</h2>
      <p className="item-product__text">{props.description}</p>
      <div className="item-product__price">
        <span>{coast}</span> <span>{currency.name === CURRENCY.hrv.name ? CURRENCY.hrv.currency : currency.name === CURRENCY.dol.name ? CURRENCY.dol.currency : CURRENCY.euro.currency}</span>
      </div>
    </div>
  )
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}

export default CardItem;

