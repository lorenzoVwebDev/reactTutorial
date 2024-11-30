import React, { useReducer} from 'react';
/* import './Product.css'; */
const styles = require('react-jss');
const createUseStyles = styles.createUseStyles

const useStyles = createUseStyles({
  product: {
    '& > span': {
      fontSize: 20
    }
  }, wrapper: {
    padding: '20px',
    fontSize: '20px',
    '& button': {
      fontSize: '20px',
      background: 'none',
      border: ['black', 'solid', '1px']
    }
  }
});

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
};

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  }, {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5
  }, {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

function cartReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.product]
    case 'remove':
      const productIndex = state.findIndex(item => item.name === action.product.name);
      if (productIndex < 0) {
        return state
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;
    default: 
    return state
  }
};

/* function totalReducer(state, product) {
  if (product.type === 'add') {
  return state + product.price
  };
  return state - product.price;
}; */

function getTotal(cart) {
  const total = cart.reduce((priceTotal, item) => {
    return priceTotal + item.price
  }, 0)
  return total.toLocaleString(undefined, currencyOptions)
};

function Product() {
  const [cart, setCart] = useReducer(cartReducer, [])
  const classes = useStyles();

function add(product) { 
  setCart({ product, 
    type: 'add'
  })
};

function remove(product) {
  setCart({
    product,
    type: 'remove'
  })
};

  return (
    <div className={classes.wrapper}>
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal(cart)}</div>
      {
        products.map(product => {
          return (<div key={product.name}>
            <div className={classes.product}>
              <span role='img' aria-label={product.name}>{product.emoji}</span>
            </div>
            <button onClick={() => {
              add(product)
            }}>Add</button>
            <button onClick={() => {
              remove(product)
            }}>Remove</button>
            </div>
          )
        })
      }
     
    </div>
  );
}

export default Product;

