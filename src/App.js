import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hotel from './components/Hotel';
import HotelView from './components/HotelView';
import { Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Hotel></Hotel>}/>
      <Route path='/View-Hotels/:id' element={<HotelView/>}></Route>
      </Routes>
      
      
      <Footer/>
    </div>
  );
}

export default App;
