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
import Nav from './Components/Layout/Nav';
import NoPage from './Components/Pages/NoPage';
import LoginSignup from './Components/Pages/LoginSignup';
import Dashboard from './Components/Pages/Dashboard'

import * as Auth from './Components/Helpers/Auth.tsx'

import './Sass/Main.scss';

// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx

function App () {

	return (
		<BrowserRouter>
			<Auth.AuthProvider>
				{/* <Routes>
					<Route path="/" element={ <Nav /> }>
						<Route index element={ <LoginSignup /> } ></Route>
						<Route path='*' element={ <NoPage /> } />
					</Route>
				</Routes> */}
				<Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route
            path="/protected"
            element={
              <Auth.RequireAuth>
                <Auth.ProtectedPage />
              </Auth.RequireAuth>
            }
          />
        </Route>
      </Routes>
			</Auth.AuthProvider>
		</BrowserRouter>
	);
}

// function Layout() {
//   return (
//     <div>
//       <AuthStatus />

//       <ul>
//         <li>
//           <Link to="/">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>

//       <Outlet />
//     </div>
//   );
// }


// interface AuthContextType {
//   user : null;
//   signin: (user, callback) => void;
//   signout: (callback) => void;
// }
// let AuthContext = React.createContext<AuthContextType>(null);

// function AuthProvider({ children }) {
//   let [user, setUser] = React.useState(null);

//   let signin = (newUser, callback) => {
//     return fakeAuthProvider.signin(() => {
//       setUser(newUser);
//       callback();
//     });
//   };

//   let signout = (callback) => {
//     return fakeAuthProvider.signout(() => {
//       setUser(null);
//       callback();
//     });
//   };

//   let value = { user, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// function useAuth() {
//   return React.useContext(AuthContext);
// }

// function AuthStatus() {
//   let auth = useAuth();
//   let navigate = useNavigate();

//   if (!auth.user) {
//     return <p>You are not logged in.</p>;
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// }

// function RequireAuth({ children }) {
//   let auth = useAuth();
//   let location = useLocation();

//   if (!auth.user) {
//     // Redirect them to the /login page, but save the current location they were
//     // trying to go to when they were redirected. This allows us to send them
//     // along to that page after they login, which is a nicer user experience
//     // than dropping them off on the home page.
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// }

// function LoginPage() {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let auth = useAuth();

//   let from = location.state?.from?.pathname || "/";

//   function handleSubmit(event) {
//     event.preventDefault();

//     let formData = new FormData(event.currentTarget);
//     let username = formData.get("username");

//     auth.signin(username, () => {
//       // Send them back to the page they tried to visit when they were
//       // redirected to the login page. Use { replace: true } so we don't create
//       // another entry in the history stack for the login page.  This means that
//       // when they get to the protected page and click the back button, they
//       // won't end up back on the login page, which is also really nice for the
//       // user experience.
//       navigate(from, { replace: true });
//     });
//   }

//   return (
//     <div>
//       <p>You must log in to view the page at {from}</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username: <input name="username" type="text" />
//         </label>{" "}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Protected</h3>;
// }




export default App;
