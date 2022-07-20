import styles from './LogInMenu.module.css';
import { useState, useEffect, useContext } from 'react';
import { userProvider } from '../Context/Context';
import { CloseRounded } from '@material-ui/icons';

const LogInMenu = ({ visible }) => {
  const { user, setShowModal, setShowLogMenu } = useContext(userProvider);

  const [currentUser, setCurrentUser] = useState({ user: '', password: '' });
  const [errorLogging, setErrorLogging] = useState('');

  const handleInputUser = (e) => {
    const input = e.target.value;
    setErrorLogging('');
    if (e.target.id === 'user') {
      setCurrentUser((prevState) => ({ ...prevState, user: input }));
    } else {
      setCurrentUser((prevState) => ({ ...prevState, password: input }));
    }
  };

  const validateUser = () => {
    console.log(currentUser);
    if (currentUser.user === user.user && currentUser.password === user.password) {
      setShowModal(true);
      setErrorLogging('');
    } else {
      setShowModal(false);
      setErrorLogging('Error logging. Please check user or password');
    }
  };

  const handleHideMenu = () => {
    setShowLogMenu((prevState) => !prevState);
  };

  return (
    <div className={`${styles.container} ${!visible && styles.hide}`}>
      <div onClick={handleHideMenu} className={styles.hideButton}>
        <CloseRounded style={{ fontSize: '32px' }} />
      </div>
      <div className={styles.inputs}>
        <h2 className={styles.title}>Welcome back!</h2>
        <p className={styles.label}>Username:</p>
        <input id='user' onChange={handleInputUser} className={styles.input} placeholder='Enter your username...' type='text' />
        <p className={styles.label}>Password:</p>
        <input id='pass' onChange={handleInputUser} className={styles.input} placeholder='Enter your password...' type='password' />
        <button onClick={validateUser} className={styles.logInBtn}>
          LOG IN
        </button>
        <p className={styles.messageLogin}>{errorLogging}</p>
      </div>
    </div>
  );
};

export default LogInMenu;
