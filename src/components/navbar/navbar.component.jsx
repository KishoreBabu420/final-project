import './navbar.styles.scss';

import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import { signOutUser } from '../../utils/firebase/firebase';
import { useUserGlobalContext } from '../../context/user.context';
import { useCartGlobalContext } from '../../context/cart.context';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Navbar = () => {
  const { currentUser } = useUserGlobalContext();
  const { isCartOpen } = useCartGlobalContext();

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <nav className='navbar'>
      <Link
        to='/'
        className='logo-container'
      >
        <img
          src={Logo}
          alt=''
        />
      </Link>
      <ul className='nav-links-container'>
        <li className='nav-link'>
          <Link
            className='nav-link'
            to='/shop'
          >
            Shop
          </Link>
        </li>

        <li className='nav-item'>
          <Link
            className='nav-link'
            to='/contact'
          >
            Contact
          </Link>
        </li>

        {currentUser ? (
          <li className='nav-item'>
            <span
              className='nav-link'
              onClick={signOutHandler}
            >
              SignOut
            </span>
          </li>
        ) : (
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/authenticate'
            >
              Sign In
            </Link>
          </li>
        )}

        <CartIcon />
      </ul>

      {isCartOpen && <CartDropdown />}
    </nav>
  );
};

export default Navbar;
