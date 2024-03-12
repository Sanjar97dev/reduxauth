import React, { useState } from 'react'
import styles from './SignUp.module.css'
import { createUser } from '../store/slices/signUpSlices';
import { useDispatch } from 'react-redux';


const SignUp = ({ setIsVisible, submitDelete }) => {
    const[userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        img: '',
    })

    const dispatch = useDispatch();

    const changeInput = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
        // console.log(userData);
    }


    const handleSubmit = (e) => {
       
        dispatch(createUser(userData))
        console.log(userData);
        setIsVisible(false)
    }

    const clickDiv = (e) => {
        e.preventDefault();
        let authDiv = e.target.closest("#test");
        // console.log(e.target.closest("#test"));

        if (!authDiv) setIsVisible(false);
        // console.log(authDiv.classList);
        if (authDiv.classList.value === styles.auth) {
            return;
        }

    }


    return (  
        <div style={{position: "relative"}} onClick={clickDiv} className={styles.ovetlay}>
        <button style={{position: "absolute", right: '20px', top: "18px"}} className='btn btn-white border-dark  ' onClick={submitDelete}>x</button>
            <div className={styles.auth} id='test'>
                <form>
                    <h3>Register</h3>
                    <p>
                        <input onChange={changeInput} type="email" name="email" placeholder='email' />
                    </p>

                    <p>
                        <input onChange={changeInput} type="text" name="name" placeholder='text' />
                    </p>

                    <p>
                        <input onChange={changeInput} type="password" name="password"placeholder='password' />
                    </p>

                    <p>
                        <input onChange={changeInput} type="img" name="img" placeholder='img' />
                    </p>
                    <input type="submit" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    )
}

export default SignUp