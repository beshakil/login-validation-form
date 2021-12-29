import React, { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Banner from '../Img/img.png'
import Logo from '../Img/logo.png'
import './Login.css'
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

const Login = () => {
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState('')
    const [disabled, isDisabled] = useState(true);
    const [passValid, setPassValid] = useState('');
    const [emailValid, setEmailValid] = useState('');
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });


    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/.test(password)) {
            setPasswordError('Invalid password');
            return;
        }
        else {
            setPasswordError('');
            setPassValid('valid')
        }
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
        if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
            setEmailError('Invalid email');
            return;
        }
        else {
            setEmailError('');
            setEmailValid('valid')
        }
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="h-screen md:flex">
                <div className="relative overflow-hidden md:flex w-1/2  i justify-around items-center hidden" style={{ backgroundColor: '#002E98' }}>
                    <div className="">
                        <img className="pl-14 w-60 pt-5" src={Logo} alt="" />
                        <h1 className="text-4xl font-sans pl-14 pr-10 pt-8 pb-8" style={{ fontSize: 40, color: '#65B9FF' }}>End to end encryption</h1>
                        <p className="mt-1 pl-14 pr-20 pb-5" style={{ fontSize: '1.3em', color: '#65B9FF' }}>It offers a technical guarantee of privacies of every user.Be safe while communicating with the WORKFREELI APP.</p>
                        <img class="pt-10" src={Banner} alt="" />
                    </div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                    <form onSubmit={handleFormSubmit} className="bg-white" style={{ width: '60%' }}>
                        <div className="text-center">
                            <h1 className="text-gray-800 font-bold" style={{ fontFamily: 'Source Sans Pro', fontSize: '26px', padding: '0px', marginBottom: '18px' }}>Hello! Welcome back.</h1>
                            <p className="font-bold text-gray-600 mb-7" style={{ fontFamily: 'Source Sans Pro', fontSize: '16px' }}>Sign into your account here</p>
                        </div>

                        <label className="block mb-2 text-sm text-gray-700" for="username" style={{ fontFamily: 'Source Sans Pro', fontSize: '16px' }}>
                            Your Email
                        </label>

                        <div id="whoobe-7izhv" class=" flex flex-row">
                            <span id="whoobe-plfl9" class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" style={{ backgroundColor: '#E4E4E4', height: '50px', width: '50px' }} mode="render" block="">
                                <svg aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26 26">
                                    <AlternateEmailRoundedIcon></AlternateEmailRoundedIcon>
                                </svg>
                            </span>
                            <input className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1"
                                type="email"
                                name="email"
                                id=""
                                placeholder=" youremail@gmail.com"
                                onChange={handleEmailChange}
                                required
                                style={{ height: '50px', fontSize: '16px' }}
                            />
                        </div>

                        {
                            emailError && <p className="text-red-500">{emailError}</p>
                        }


                        <label className="pt-7 block mb-2 text-sm text-gray-700" for="username" style={{ fontFamily: 'Source Sans Pro', fontSize: '16px' }}>
                            Your Password
                        </label>

                        <div id="whoobe-7izhv" class=" flex flex-row">
                            <span id="whoobe-plfl9" class="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" style={{ backgroundColor: '#E4E4E4', height: '50px', width: '50px' }} mode="render" block="">
                                <svg class="" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26 26">
                                    <LockRoundedIcon></LockRoundedIcon>
                                </svg>
                            </span>


                            <input class="border border-gray-200 outline-none focus:ring-1 ring-blue-400 w-full pl-1"
                                required
                                type={values.showPassword ? "text" : "password"}
                                placeholder='&#11044; &#11044; &#11044; &#11044; &#11044; &#11044;'
                                onChange={handlePasswordChange}
                                style={{ fontSize: '16px', letterSpacing: '2px' }}
                            >
                            </input>

                            <span id="" class="z-highest rounded-r-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" style={{ backgroundColor: '#E4E4E4', height: '50px', width: '50px' }} mode="render" block="">
                                <button class="-mt-1" onClick={handleClickShowPassword}> {values.showPassword ? <VisibilityIcon className="text-gray-400"></VisibilityIcon> : <VisibilityOffIcon className="text-gray-400"></VisibilityOffIcon>}</button>
                            </span>
                        </div>
                        {
                            passwordError && <p className="text-red-500">{passwordError}</p>
                        }
                        <p className="text-gray-500 text-sm pt-1 pb-3" style={{ fontFamily: 'Source Sans Pro', fontSize: '13px' }}>Minimum 6 Characters, One Lowercase & One Number</p>


                        <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
                                <label for="remember-me" className="ml-2 block text-sm text-gray-900" style={{ fontFamily: 'Source Sans Pro', fontSize: '13px' }}>
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium no-underline text-indigo-600 hover:text-indigo-500" style={{ fontFamily: 'Source Sans Pro', fontSize: '13px' }}>
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="mt-7">
                            {
                                passValid && emailValid ?
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center pt-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        style={{ height: '50px', fontSize: '18px', fontFamily: 'Source Sans Pro' }}
                                    >
                                        Sign in
                                    </button>
                                    :
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center pt-3 border border-transparent text-sm font-medium rounded-md text-white" style={{ backgroundColor: "#75A4DE", height: '50px', fontSize: '18px', fontFamily: 'Source Sans Pro' }}
                                        disabled={disabled}
                                    >
                                        Sign in
                                    </button>
                            }
                        </div>
                        <div className="text-center pt-10" style={{ fontFamily: 'Source Sans Pro', fontSize: '13px' }}>
                            <p>Don't have an account? <a href="#" className="font-bold no-underline text-indigo-600 hover:text-indigo-500">
                                Sign Up
                            </a></p>
                            <p className="pt-8"><a href="#" className="font-bold no-underline text-indigo-600 hover:text-indigo-500">
                                Privacy Policy
                            </a> | <a href="#" className="font-bold no-underline text-indigo-600 hover:text-indigo-500">
                                    Contact
                                </a></p>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;