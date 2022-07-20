import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import LogInMenu from '../components/LogInMenu/LogInMenu';
import Modal from '../components/Modal/Modal';

import { userProvider } from '../components/Context/Context';
import { useState } from 'react';

export default function Home() {
  const [user, setUser] = useState({ user: 'Leandro', password: '12345' });
  const [showModal, setShowModal] = useState(false);
  const [showLogMenu, setShowLogMenu] = useState(false);

  const toggleLogMenu = () => {
    setShowLogMenu((prevState) => !prevState);
  };
  return (
    <userProvider.Provider value={{ user, setUser, showModal, setShowModal, showLogMenu, setShowLogMenu }}>
      <div className={styles.container}>
        {showModal && <Modal message='Log in exitoso!' />}
        <Layout>
          <button className={styles.showLogMenuBtn} onClick={toggleLogMenu}>
            Log in
          </button>
          <LogInMenu visible={showLogMenu} />
        </Layout>
      </div>
    </userProvider.Provider>
  );
}
