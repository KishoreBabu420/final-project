import './auth.styles.scss';

import { useEffect } from 'react';

import { SignIn, SignUpForm } from '../../components';
import { useUserGlobalContext } from '../../context/user.context';

import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const { currentUser } = useUserGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/');
      return;
    }
  }, []);

  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Auth;
