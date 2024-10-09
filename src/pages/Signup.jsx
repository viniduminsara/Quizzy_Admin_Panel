import { useState } from 'react';
import Learning from "../assets/Signup.png";
import Logo from "../assets/Logo.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom";
import {inputsFieldsData} from "../util/inputFieldsData.js";
import StyledInput from "../components/StyledInput.jsx";

const Signup = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, inputValues.email, inputValues.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success('Signup successful!');
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleOnChange = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    }

    return (
        <>
            <section className='flex flex-col md:flex-row justify-center items-center lg:space-x-32'>
                <div className='px-6'>
                    <form onSubmit={handleSubmit} className='w-96 flex flex-col px-8 md:px-0 space-y-4 group'>
                        <div className='flex flex-col justify-center items-center mb-4'>
                            <img src={Logo} alt="logo" className='w-40'/>
                            <h3 className='text-2xl poppins-semibold'>Welcome to Quizzy</h3>
                        </div>
                        {inputsFieldsData.map((input) => (
                            <StyledInput
                                key={input.id}
                                {...input}
                                value={inputValues[input.name]}
                                onChange={handleOnChange}
                            />
                        ))}
                        <button type='submit'
                                className='bg-gradient poppins-regular text-white p-2 rounded-md group-invalid:pointer-events-none group-invalid:opacity-30'>
                            Sign Up
                        </button>
                    </form>
                    <p className='mt-1'>Already have an account? <Link to='/login' className='text-accent2'>Login</Link></p>
                </div>
                <img src={Learning} alt='hero image' className='w-96 md:w-5/12'/>
            </section>
        </>
    );
}

export default Signup;
