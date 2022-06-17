
import './App.css';
import Tour from './pages/AbourUs';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LogInSide from './components/LogIn';

function App() {
  return (
      <BrowserRouter>
      <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/AboutUs' element ={<Tour/>}/>
          <Route path='/LogIn' element={<LogInSide />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
