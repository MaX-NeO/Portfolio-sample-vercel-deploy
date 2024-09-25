import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
    const isloggedin = true

    return (
        <>
            <div className='h-screen w-screen overflow-x-hidden '>

                <Navbar />
                <div className='h-[95vh] w-full flex flex-col justify-start items-center'>

                    {isloggedin ? (
                        <Suspense fallback={"loading"}>
                            <Outlet />
                        </Suspense>

                    ) :
                        (
                            <>
                                Login to access data
                            </>
                        )

                    }
                </div>
            </div>
        </>
    )
}

export default WebLayout