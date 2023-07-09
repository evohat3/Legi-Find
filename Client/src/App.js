import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ResponsiveAppBar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './pages/LoginPage'
import Signup from './pages/SignupPage'
import Search from './pages/SearchPage'
import Account from './pages/AccountPage'
import Dashboard from './pages/Dashboard'
import NewThing from 
'./pages/NewThing'
import React, { useState }from 'react';
import UserContext from './utils/UserContext'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  const [userData] = useState(null);


  const isLoggedIn = Auth.loggedIn();

  console.log(isLoggedIn)


  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={userData}>
    <div>
       
    <Router>
      <ResponsiveAppBar />
        <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login /> } />
      <Route path="/signup" element={<Signup /> } />
      <Route path="/search" element={<Search />} />
      <Route path="/account" element={<Account />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/newthing" element={<NewThing />} />

      </Routes>
      <Footer />
    </Router>
    
    </div>
    /</UserContext.Provider>
    </ApolloProvider>
  );
}

export default App;
