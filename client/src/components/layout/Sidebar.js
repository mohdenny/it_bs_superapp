import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Sidebar = ({ children }) => {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <nav className="px-8 py-1 flex flex-row items-center justify-between h-12 w-full">
                <div className="flex flex-row space-x-8 h-full">
                    <button className="h-full" onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex flex-row space-x-2 items-center justify-center w-full h-full">
                        <img src={'/images/logo-metrotv.png'} alt='metrotv' className='object-contain object-center h-full w-auto' />
                        <div className='flex flex-col justify-center h-full'>
                            <p className="font-extrabold text-2xl italic font-chakra-petch">IT BROADCAST</p>
                            <p className="font-light text-xs font-roboto">Management System</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row space-x-4 h-full">
                    <p className="h-full w-auto flex items-center justify-center">Mohdenny</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </nav>

            <div className="flex flex-row space-x-4 font-roboto">
                {
                    !toggleMenu &&
                    <div className="h-full w-64 py-4">
                        <Link 
                            className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center"
                            to={'/dashboard'}
                            aria-current="page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <button className="h-full w-auto">Home</button>
                        </Link>
                        <Link 
                            className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center"
                            to={'/explore'}
                            aria-current="page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <button className="h-full w-auto">Explore</button>
                        </Link>
                        <Link 
                            className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center"
                            to={'/ticketing'}
                            aria-current="page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                            <button className="h-full w-auto">Ticketing</button>
                        </Link>
                        <Link 
                            className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center"
                            to={'/monitoring'}
                            aria-current="page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                            <button className="h-full w-auto">Monitoring</button>
                        </Link>
                        <Link 
                            className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center"
                            to={'/checklist'}
                            aria-current="page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <button className="h-full w-auto">Checklist</button>
                        </Link>
                        <Link 
                            className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center"
                            to={'/inventory'}
                            aria-current="page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            <button className="h-full w-auto">Inventory</button>
                        </Link>
                        <Link 
                            className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center"
                            to={'/setting'}
                            aria-current="page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <button className="h-full w-auto">Setting</button>
                        </Link>
                    </div>
                }

                <div className="bg-gray-100 border-t-2 h-full w-full">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Sidebar