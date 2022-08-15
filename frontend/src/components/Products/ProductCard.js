import React from 'react'
import "./Products.css"
function ProductCard({title, image, price ,rating}) {
  return (
      <div className="product">
          <div className="product-info">
              <p>{title}</p>
              <p className="product-price">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="product-rating">
                  {Array(rating)
                      .fill()
                      .map((_, i) => (
                          <p>🌟</p>
                      ))}
              </div>
          </div>
          <img src={image} alt="" />
          <button>Add to BasKet</button>
   </div>
  )
}

export default ProductCard