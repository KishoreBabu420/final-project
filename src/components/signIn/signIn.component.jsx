import './signIn.styles.scss';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password,
        );
      } catch (err) {
        if (err.code === 'auth/user-not-found') {
          alert(`No user associated with this email`);
        } else if (err.code === 'auth/wrong-password') {
          alert(`incorrect Password`);
        }
        console.log(`Error Occurred while sign In`, err.code);
      }

      setFormFields(defaultFormFields);
    } else {
      alert('All Fields are mandatory');
      return;
    }
  };

  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFormFields({ ...formFields, [key]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-in-container'>
      <h2>Don&apos;t have an account</h2>
      <span>Sign In with Email and Password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          labelText='Email'
          inputOptions={{
            type: 'email',
            required: true,
            id: 'email',
            name: 'email',
            value: email,
            onChange: changeHandler,
          }}
        />

        <FormInput
          labelText='Password'
          inputOptions={{
            type: 'password',
            required: true,
            id: 'password',
            name: 'password',
            value: password,
            onChange: changeHandler,
          }}
        />

        <div className='buttons-container'>
          <Button
            buttonType='submit'
            buttonText='Sign In'
          />

          <Button
            buttonText='Google Sign In'
            buttonType='google'
            type='button'
            onClick={logGoogleUser}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
