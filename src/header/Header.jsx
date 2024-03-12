import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFromLs, signOut } from '../store/slices/signUpSlices'; 
import styles from '../signUp/SignUp.module.css';
import './Header.css'; // Custom CSS for additional styling

const Header = ({ subMutSign }) => {
  const { userData, loading, error } = useSelector(state => state.signUp);
  const dispatch = useDispatch();
  const [outSign, setOutsign] = useState(false);

  useEffect(() => {
    dispatch(getFromLs())
  }, []);

  const handleSignOut = () => {
    dispatch(signOut());
  }

  return (
    <div className="header-container">
      <div className='header-menu'>
        <a className='menu-item' href="#">Main</a>
        <a className='menu-item' href="#">About</a>
        <a className='menu-item' href="#">Contacts</a>
      </div>

      <div className='user-profile'>
        {userData && (
          <>
            <img className='user-avatar' src={userData.img} alt="User Avatar" />
            <span className='user-name'>{userData.name}</span>
          </>
        )}
      </div>

      <div className={styles.auth}>
        <button className={`${styles.btn} ${styles.btnSignUp}`} onClick={() => subMutSign()}>Sign Up</button>
        {userData && userData.email && (
          <button className={`${styles.btn} ${styles.btnSignOut}`} onClick={handleSignOut}>Sign Out</button>
        )}
        {(!userData || !userData.email) && (
          <button className={`${styles.btn} ${styles.btnSignIn}`}>Sign In</button>
        )}
      </div>
    </div>
  )
}

export default Header;

