import React, { Component } from 'react';
import './Product.css'

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  }, 
  {
    emoji: '🍩',
    name: 'donut',
    price: 2.5
  }, {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
]

class Product extends Component {

  state = {
    cart: []
  };

  add = (product) => {
    this.setState(state => ({
      cart: [...state.cart, product]
    }))
  }

  currencyOptions = {
    minumFractionsDigits: 2,
    maximumFractionDigits: 2
  }

  getTotal = () => {
    const total = this.state.cart.reduce((totalCost, currentProduct) => {
      return totalCost + currentProduct.price
    }, 0);
    return total.toLocaleString(undefined, this.currencyOptions)
  }
  
  remove = (product) => {
    this.setState(state => {
      const cart = [...state.cart];
      const productIndex = cart.findIndex(p => (p.name === product.name));
      if (productIndex < 0 ) {
        return
      }

      cart = cart.splice(productIndex, 1)
      return ({
        cart
      });
    })
  }

  render () {
    return (
      <div className='wrapper'>
        <div>
          Shopping Cart: {this.state.cart.length} total items.
        </div>
        <div>Total cost: {this.getTotal()}</div>
        {
          products.map(product => {
            return (
              <div key={product.name}>
                <div className="product">
                  <span role="img" arialabel={product.name}>{product.emoji}</span>
                  <button onClick={() => this.add(product)}>Add</button>
                  <button onClick={() => this.remove(product)}>Remove</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Product;
