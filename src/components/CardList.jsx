import React from 'react';
import './style.scss';
import cardData from './cardData.json';
import CardItem from './CardItem';

function CardList() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setProducts(cardData);
  }, []);

  return (
    <div className="product__body">
      {
        products.map(item => <CardItem 
          key={item.id} 
          title={item.name} 
          description={item.description}
          price={item.price}
          url={item.image} />)
      }
    </div>
  )
}

export default CardList

