import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { JobApplication } from './components/JobApplication/JobApplication';



function App() {
  return (
    <div className="App">
      <Header />
      <JobApplication />
      <Footer />
    </div>
  );
}

export default App;
