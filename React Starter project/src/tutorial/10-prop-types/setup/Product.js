import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {
  const url = image && image.url;
  return <article className='product'>
    <img src={url || defaultImg} alt={name} />
      <h4>{name}</h4>
      <p>{price || 3.99}</p>
    

  </article>;
};

Product.propTypes = {
  image:PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

// Product.defaultProps = {
//   name: 'defualt name',
//   price: 3.99,
//   image: defaultImg,
// };

export default Product;
