import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth,API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// SingOut
function signOut() {
  Auth.signOut().then().catch();
}

function App() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    Auth.currentUserInfo().then((user) => {
      if(user) {
        setUser(user)
      }
    });

    API.get('amplify', '/amplify',{
      response: true,
    }).then(res => {
      console.log(res);
    }).catch((err) => {})
  },[]);

  return (
    <div className="App">
      <header>
        <button onClick={signOut}>Sign out</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        {user && (
          <div>email: {user.attributes.email}</div>
        )}
      </header>
    </div>
  );
}

export default withAuthenticator(App);

// export default function App() {
//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <main>
//           <h1>Hello {user!.attributes!.email}</h1>
//           <button onClick={signOut}>Sign out</button>
//         </main>
//       )}
//     </Authenticator>
//   );
// }
