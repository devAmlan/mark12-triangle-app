import './App.css';
import Navbar from './component/navbar/Navbar';
import IsTriangle from './pages/istriangle/IsTriangle';
import Quiz from './pages/quiz/Quiz';
import Hypotenuse from './pages/hypotenuse/Hypotenuse';
import Area from './pages/area/Area';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
        <Routes>
        <Route element={<IsTriangle/>} path="/"/>
        <Route element={<Quiz/>} path="/quiz"/>
        <Route element={<Hypotenuse/>} path="/hypotenuse"/>
        <Route element={<Area/>} path="/area"/>
        </Routes>
      </Router>
   
    </div>
  );
}

export default App;
