import './signUp-form.styles.scss';

import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (displayName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password,
          );

          const userDocRef = await createUserDocumentFromAuth(user, {
            displayName,
          });

          setFormFields(defaultFormFields);
        } catch (err) {
          if (err.code === `auth/email-already-in-use`) {
            alert(`Email already exists`);
          } else {
            console.log(`Error Occurred while registering`, err.message);
          }
        }
      } else {
        alert('Passwords do not match');
        return;
      }
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
  return (
    <div className='sign-up-container'>
      <h1>Sign Up with your email and password</h1>

      <form onSubmit={submitHandler}>
        <FormInput
          labelText='Display Name'
          inputOptions={{
            type: 'text',
            required: true,
            id: 'display-name',
            name: 'displayName',
            onChange: changeHandler,
            value: displayName,
          }}
        />

        <FormInput
          labelText='Email'
          inputOptions={{
            type: 'email',
            required: true,
            id: 'sign-up-email',
            name: 'email',
            onChange: changeHandler,
            value: email,
          }}
        />

        <FormInput
          labelText='Password'
          inputOptions={{
            type: 'password',
            required: true,
            id: 'sign-up-password',
            name: 'password',
            value: password,
            onChange: changeHandler,
          }}
        />
        <FormInput
          labelText='Confirm Password'
          inputOptions={{
            type: 'password',
            required: true,
            id: 'confirm-password',
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: changeHandler,
          }}
        />

        <Button
          buttonText='Sign Up'
          type='submit'
        />
      </form>
    </div>
  );
};

export default SignUpForm;
