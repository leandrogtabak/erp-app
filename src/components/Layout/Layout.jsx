import Head from 'next/head';
import { userProvider } from '../Context/Context';
import { useContext, useEffect } from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { showModal } = useContext(userProvider);

  return (
    <div className={`${styles.container} ${showModal && styles.darken}`}>
      <Head>
        <title>Erp App</title>
        <meta name='description' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Developed by Pais-Tabak</footer>
    </div>
  );
};

export default Layout;
