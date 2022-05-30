import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import PostScreen from './screens/PostScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import ProfileSettings from './screens/ProfileSettings';
import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import UpdatePostScreen from './screens/UpdatePostScreen';


function App() {
  const loginState = useSelector((state) => state.login);

  const { isLogin} = loginState;
  return (
    <div className='App text-primary'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/login' element={ isLogin ? <Navigate to="/" /> : <LoginScreen />} />
          <Route exact path='/register' element={isLogin ? <Navigate to="/" /> : <RegisterScreen />} />
          <Route exact path='/post/:id' element={<PostScreen />} />
          <Route exact path='/createpost' element={ isLogin ? <CreatePostScreen /> : <Navigate to="/login" />} />
          <Route exact path='/settings' element={isLogin ? <ProfileSettings /> : <Navigate to="/" /> } />
          <Route exact path="/update/:id" element={isLogin ? <UpdatePostScreen /> : <Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
