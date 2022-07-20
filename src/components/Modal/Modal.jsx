import styles from './Modal.module.css';
import { userProvider } from '../Context/Context';
import { useContext } from 'react';

const Modal = ({ message }) => {
  const { setShowModal, setShowLogMenu } = useContext(userProvider);

  const handleContinue = () => {
    setShowModal(false);
    setShowLogMenu(false);
  };

  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      <button onClick={handleContinue} className={styles.continueBtn}>
        Continuar
      </button>
    </div>
  );
};

export default Modal;
