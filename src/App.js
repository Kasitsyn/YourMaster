import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MasterLoginPage } from './components/MasterLoginPage/MasterLoginPage';
import { Image } from './components/UI/Img/Img';
import { Input } from './components/UI/Input/Input';


function App() {
  return (
    <div className="App">
      <Header />
      <MasterLoginPage/>
      <Footer />
    </div>
  );
}

export default App;
