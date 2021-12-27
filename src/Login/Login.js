import React, { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Banner from '../Img/img.png'
import Logo from '../Img/logo.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Login = () => {
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState('')
    const [disabled, isDisabled] = useState(true);
    const [valid, setValid] = useState('');
    const [email, setEmail] = useState('')

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
            setValid('valid')
        }

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="h-screen flex">
                <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
                    <div className="">
                        <img className="pt-5 pl-10 w-60" src={Logo} alt="" />
                        <h1 className="text-white text-4xl font-sans pl-10 pr-10 pt-5 pb-5">Collaborative project,
                            task management</h1>
                        <p className="text-white mt-1 text-xl pl-10 pr-20">We introduced the different colored process streams combining into a work of art.</p>
                        <img src={Banner} alt="" />
                    </div>
                </div>
                <div className="flex w-1/2 justify-center items-center bg-white">
                    <form onSubmit={handleFormSubmit} className="bg-white w-3/4">
                        <div className="text-center">
                            <h1 className="text-gray-800 font-bold text-3xl mb-1">Hello! Welcome back.</h1>
                            <p className="text-sm font-bold text-gray-600 mb-7">Sign into your account here</p>
                        </div>

                        <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                            Your Email
                        </label>

                        <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 pb-1 outline-none border-none w-full"
                                type="email"
                                name="email"
                                autoComplete="email"
                                id=""
                                placeholder="yourmail@gmail.com"
                                onChange={handleEmailChange}
                                required
                            />


                        </div>
                        <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                            Your Password
                        </label>

                        <div className="flex items-center border-2 py-2 px-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>

                            <input
                                required
                                type={values.showPassword ? "text" : "password"}
                                className="w-full pl-2 outline-none border-none"
                                placeholder='Enter Password'
                                onChange={handlePasswordChange}
                            />


                            <button onClick={handleClickShowPassword}> {values.showPassword ? <VisibilityIcon className="text-gray-400"></VisibilityIcon> : <VisibilityOffIcon className="text-gray-400"></VisibilityOffIcon>}</button>

                        </div>
                        {
                            passwordError && <p className="text-red-500">{passwordError}</p>
                        }
                        <p className="text-gray-500 text-sm pt-1">Minimum 6 Characters, One Lowercase & One Number</p>


                        <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
                                <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium no-underline text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="mt-5">
                            {
                                valid && email ?
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Sign in
                                    </button>
                                    :
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400"
                                        disabled={disabled}
                                    >
                                        Sign in
                                    </button>
                            }
                        </div>
                        <div className="text-center pt-10">
                            <p>Don't have an account? <a href="#" className="font-medium no-underline text-indigo-600 hover:text-indigo-500">
                                Sign Up
                            </a></p>
                            <p className="pt-10"><a href="#" className="font-medium no-underline text-indigo-600 hover:text-indigo-500">
                                Privacy Policy
                            </a> | <a href="#" className="font-medium no-underline text-indigo-600 hover:text-indigo-500">
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