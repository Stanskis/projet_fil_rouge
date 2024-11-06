import {Routes, Route} from 'react-router-dom';
import Button from './components/NavButton/Button';
import HomePage from './pages/HomePage';
import PcBuilder from './pages/PcBuilder';
import Products from './pages/Products';
import Guides from './pages/Guides';
import Forum from './pages/Forum';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignUp from './components/Account/Signup';
import LogIn from './components/Account/Login';
import { useState } from 'react';
import { SelectedComponentsProvider } from '../src/components/ComponentSelected/ComponentSelected';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalScreen, setModalScreen] = useState('');

  const openSignUpModal = () => {
    setModalOpen(true);
    setModalScreen("signup");
  };

  const openLogInModal = () => {
    setModalOpen(true);
    setModalScreen("login");
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalScreen("");
  };


  return (
    <>
      <SelectedComponentsProvider>
        <Header openSignUpModal={openSignUpModal} openLogInModal={openLogInModal} />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pc-builder" element={<PcBuilder />} />
          <Route path="/products" element={<Products />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
        <Footer />
        {modalOpen && modalScreen === "signup" && <SignUp closeModal={closeModal} />}
        {modalOpen && modalScreen === "login" && <LogIn closeModal={closeModal} />}
      </SelectedComponentsProvider>
    </>
  );
}

