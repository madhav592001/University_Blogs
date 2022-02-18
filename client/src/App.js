import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import PostScreen from './screens/PostScreen';
import CreatePostScreen from './screens/CreatePostScreen';

function App() {
  return (
    <div className='App text-primary'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/login' element={<LoginScreen />} />
          <Route exact path='/register' element={<RegisterScreen />} />
          <Route exact path='/post/:id' element={<PostScreen />} />
          <Route exact path='/createpost' element={<CreatePostScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
