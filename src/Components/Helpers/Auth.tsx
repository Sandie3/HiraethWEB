import React, { useState, useEffect } from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from 'react-router-dom'

import * as Login from '../../Components/Helpers/Login'

export const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};


interface AuthContextType {
  user : null;
  signin: (user, callback) => void;
  signout: (callback) => void;
}
let AuthContext = React.createContext<AuthContextType>(null);

export const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return Login.login(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return Login.logout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return React.useContext(AuthContext);
}

export const AuthStatus = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

export const RequireAuth = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// export const LoginPage = () => {
//   let navigate = useNavigate();
//   let location = useLocation();

//   let from = location.pathname || "/";

//   function handleSubmit(e: any) {
//     e.preventDefault();
//     Login.login(e.currentTarget).then( res => {
// 			navigate(from, { replace: true });
// 		} )
//   }

//   return (
//     <div>
//       <p>You must log in to view the page at {from}</p>
//       <section>
// 			<div className="wrapper">
// 				<div className="colWrap">
// 					<div className='bgCol'></div>
// 					<div className='col2'></div>
// 					<div className='col3'></div>
// 					<div className='col4'></div>
// 					<div className='col5'></div>
// 					<div className='col6'></div>
// 					<div className='col7'></div>
// 					<div className='col8'></div>
// 					<div className='col9'></div>
// 				</div>
// 				<form className="loginForm" onSubmit={ handleSubmit }>
// 					<h1>Login</h1>
// 					<div className="formWrapper">
// 						<div className="txtBox">
// 							<input type="text" id="email" name="email" placeholder='email@example.com' />
// 						</div>
// 						<div className="txtBox">
// 							<input type="password" id="password" name="password" placeholder='******' />
// 						</div>
// 						<input type="submit" className="logBtn" value="Login" />
// 						<div className="bottomText">
// 							<span>Don't have account?</span>
// 							<a href="#">Sign up now</a>
// 						</div>
// 					</div>
// 				</form>
// 			</div >
// 		</section >
//     </div>
//   );
// }

export const PublicPage = () => {
  return <h3>Public</h3>;
}

export const ProtectedPage = () => {
  return <h3>Protected</h3>;
}
