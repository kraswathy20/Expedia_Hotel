import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hotel from './components/Hotel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hotel></Hotel>
      <h1>Hotel app</h1>
      <Footer/>
    </div>
  );
}

export default App;
