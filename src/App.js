import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BaseWorkCard } from './components/BaseWorkCard/BaseWorkCard';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { JobApplication } from './components/JobApplication/JobApplication';
import { MasterRegistration } from './components/MasterRegistration/MasterRegistration';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';



function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Routes>
        <Route path='/' element={<MasterRegistration />} />
        <Route path='/registration' element={<MasterRegistration />} />
        <Route path='/find-master' element={<JobApplication />} />
        <Route path='/current-works' element={<BaseWorkCard />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes> */}
      <MasterRegistration />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
