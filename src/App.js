import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Image } from './components/UI/Img/Img';


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Image
        src={require("./img/star.png")}
        alt={'IMG'}
        width={200}
        height={200} />
    </div>
  );
}

export default App;
