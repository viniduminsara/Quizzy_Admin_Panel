import {useState} from "react";
import Logo from "../assets/Logo.png";
import StyledInput from "../components/StyledInput.jsx";
import Image from "../assets/Login.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, useNavigate} from "react-router-dom";
import {inputsFieldsData} from "../util/inputFieldsData.js";

const Login = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, inputValues.email, inputValues.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success('Login successful!');
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
            <section className='flex flex-col-reverse md:flex-row justify-center items-center lg:space-x-32'>
                <img src={Image} alt='hero image' className='w-96 md:w-5/12'/>
                <div className='px-6'>
                    <form onSubmit={handleSubmit} className='w-96 flex flex-col px-8 md:px-0 space-y-4 group'>
                        <div className='flex flex-col justify-center items-center mb-4'>
                            <img src={Logo} alt="logo" className='w-40'/>
                            <h3 className='text-2xl poppins-semibold'>Welcome Back</h3>
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
                            Login
                        </button>
                    </form>
                    <p className='mt-1'>Don't have an account? <Link to='/signup' className='text-accent2'>Signup</Link></p>
                </div>
            </section>
        </>
    );
}

export default Login;
