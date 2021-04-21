import React from 'react';

const Product = ({image, name, price}) => {
  return <article className='product'>
    {image?<img src={image.url} alt={name} />: "Img not available"}
      <h4>{name}</h4>
      <p>{price?price:"Not available"}</p>
    

  </article>;
};

export default Product;
