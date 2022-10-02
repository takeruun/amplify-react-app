import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

// SingUp時に、メールアドレスとパスワードを要求する
const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: true,
  defaultCountyCode: '1',
  signUpFields: [
    {
      label: 'User Name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password',
    },
  ],
};

// SingOut
function signOut() {
  Auth.signOut().then().catch();
}

function App() {
  return (
    <div className="App">
      <header>
        <button onClick={signOut}>Sign out</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
