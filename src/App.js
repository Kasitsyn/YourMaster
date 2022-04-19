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
import { ClientRegistration } from './components/ClientRegistration/ClientRegistration.jsx';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { FindMaster } from "./components/FindMaster/FindMaster.jsx";
import { FindJob } from "./components/FindJob/FindJob.jsx";
import { NotificationsPage } from "./components/NotificationsPage/NotificationsPage.jsx";
import { SettingsComponent } from "./components/SettingsComponent/SettingsComponent.jsx";
import { Login } from './components/Login/Login';
import { MasterLandingPage } from "./components/MasterLandingPage/MasterLandingPage.jsx";
import { ProtectedRoutes } from 'ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'/YourMaster'} />} />
        <Route path='/YourMaster' element={<ClientLandingPage />} />
        <Route path='/for-masters' element={<MasterLandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/place-work' element={<JobApplication />} />
          <Route path="/find-job" element={<FindJob />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/find-master" element={<FindMaster />} />
          <Route path='/current-works' element={<BaseWorkCard />} />
          <Route path='/master-registration' element={<MasterRegistration />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path='/client-registration' element={<ClientRegistration />} />
          <Route path='/settings' element={<SettingsComponent />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
