import { Cross, User2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav = useNavigate()
    const NavLinks = [{
        title: "Profile",
        path: "/"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    }
    ]
    const emailref = useRef(null)
    const passwordref = useRef(null)
    // const [userdata, setUserdata] = useState({
    //     email: '',
    //     password: ''
    // })
    // const handleChange = (e) => {
    //     setUserdata({ ...userdata, [e.target.id]: e.target.value })
    // }
    const handleLogin = (e) => {
        e.preventDefault()
        setvisible(false)
        // console.log(userdata)
        // console.log("hello")
        // nav('/contact')
        localStorage.setItem("userEmail", emailref.current.value)
        console.log(emailref.current.value, passwordref.current.value)
    }
    

    const [visible, setvisible] = useState(false)
    return (
        <>
            <div className="w-full h-[5vh] flex justify-center items-center bg-white text-purple-500 shadow-md shadow-purple-100 rounded-sm sticky top-0 left-0 z-50">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-purple-500'> Mohanraj M</div>
                    <div className='w-1/2 flex  h-full justify-end items-center'>
                        <ul className='w-[75%] list-none flex flex-row justify-evenly h-full'>
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path} className='border-b-4 border-transparent w-[5rem]'>
                                        <li className='font-bold text-xl text-purple-600 h-full rounded-sm flex justify-center items-center'>{navdata.title}</li>
                                    </NavLink>
                                ))
                            }
                        </ul>
                        <User2 className='cursor-pointer h-10 w-10 text-purple-500 rounded-full border-2 border-white hover:bg-white  hover:border-purple-500 hover:text-purple-500' onClick={() => setvisible(true)} />
                    </div>
                </div>

            </div>
            {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                            <div className=" h-[40%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-purple-500 bg-white text-xl font-bold shadow-sm">
                                    <div className="w-1/2">
                                        Login
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        {/* <Cross onClick={() => setvisible(!visible)} /> */}
                                        <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)} >
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                        <input type="email" ref={emailref} name="" id="email" placeholder="Email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-b-2 hover:border-purple-200  focus:border-purple-600" required />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="Password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required />
                                        {/* <input type="email" name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} />
                                        <input type="password" name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} /> */}
                                        <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4">   Login</button>
                                    </form>
                                </div>
                                {/* <div className="w-full h-[15%] flex flex-row justify-center items-center">
                                    <button onClick={() => setvisible(!visible)} className="bg-red-500 p-3 text-white w-full h-full rounded-sm text-lg font-bold"> Cancel </button>
                                </div> */}
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}

export default Navbar