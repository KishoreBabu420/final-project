import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';

import { useCartGlobalContext } from '../../context/cart.context';

const CartDropdown = () => {
  const navigate = useNavigate();

  const goToCartHandler = () => {
    navigate('/cart');
  };

  const { cartItems } = useCartGlobalContext();
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            {...cartItem}
          />
        ))}
      </div>
      <Button
        buttonText='go to checkout'
        type='submit'
        onClick={goToCartHandler}
      />
    </div>
  );
};

export default CartDropdown;
