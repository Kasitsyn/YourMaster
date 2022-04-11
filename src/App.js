import { Navigate, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';
import { ClientLandingPage } from './components/ClientLandingPage/ClientLandingPage.jsx';
import { AdminPanel } from './components/AdminPanel/AdminPanel';
import { BaseWorkCard } from './components/BaseWorkCard/BaseWorkCard';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { JobApplication } from './components/JobApplication/JobApplication';
import { MasterRegistration } from './components/MasterRegistration/MasterRegistration';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { FindMaster } from "./components/FindMaster/FindMaster.jsx";
import { FindJob } from "./components/FindJob/FindJob.jsx";
import { NotificationsPage } from "./components/NotificationsPage/NotificationsPage.jsx";
import { SettingsComponent } from "./components/SettingsComponent/SettingsComponent.jsx";



// const defaultState = {

// }

// const reducer = (state = defaultState, action) => {
//   switch (action.type) {



//     default: return state
//   }
// }

// const store = createStore()

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'/YourMaster'} />} />
        <Route path='/YourMaster' element={<ClientLandingPage />} />
        <Route path='/registration' element={<MasterRegistration />} />
        <Route path='/place-work' element={<JobApplication />} />
        <Route path='/current-works' element={<BaseWorkCard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/find-master" element={<FindMaster />} />
        <Route path="/find-job" element={<FindJob />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path='/settings' element={<SettingsComponent />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
