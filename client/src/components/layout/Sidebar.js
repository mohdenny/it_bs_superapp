import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'


const Sidebar = ({ children }) => {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    const location = useLocation()

    return (
        <>
            <div className="flex flex-col font-roboto h-screen">
                <nav className="bg-white px-8 py-1 flex items-center justify-between h-12 w-full">
                    <div className="flex flex-row space-x-8 h-full">
                        <button className="h-full" onClick={() => setToggleMenu(!toggleMenu)}>
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
                
                <div className='w-full h-full overflow-auto'>
                    <div className='flex flex-row h-full w-full'>
                        {
                            !toggleMenu &&
                            <div className="flex flex-col bg-white h-full w-64 py-4">
                                <Link 
                                    className={classnames("hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center", {
                                        'bg-gray-300' : location.pathname === '/dashboard'
                                    })}
                                    to={'/dashboard'}
                                    aria-current="page"
                                >
                                    {
                                        location.pathname === '/dashboard' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                        )
                                    }
                                    
                                    <button className={classnames("h-full w-auto", {
                                        'font-bold' : location.pathname === '/dashboard'
                                    })}>
                                        Home
                                    </button>
                                </Link>
                                <Link 
                                    className={classnames("hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center", {
                                        'bg-gray-300' : location.pathname === '/explore'
                                    })}
                                    to={'/explore'}
                                    aria-current="page"
                                >
                                    {
                                        location.pathname === '/explore' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        )
                                    }
                                    
                                    <button className={classnames("h-full w-auto", {
                                        'font-bold' : location.pathname === '/explore'
                                    })}>
                                        Explore
                                    </button>
                                </Link>
                                <Link 
                                    className={classnames("hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center", {
                                        'bg-gray-300' : location.pathname === '/ticket'
                                    })}
                                    to={'/ticket'}
                                    aria-current="page"
                                >
                                    {
                                        location.pathname === '/ticket' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                            </svg>
                                        )
                                    }
                                    <button className={classnames("h-full w-auto", {
                                        'font-bold' : location.pathname === '/ticket'
                                    })}>
                                        Ticket
                                    </button>
                                </Link>
                                <Link 
                                    className={classnames("hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center", {
                                        'bg-gray-300' : location.pathname === '/report'
                                    })}
                                    to={'/report'}
                                    aria-current="page"
                                >
                                    {
                                        location.pathname === '/report' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        )
                                    }
                                    <button className={classnames("h-full w-auto", {
                                        'font-bold' : location.pathname === '/report'
                                    })}>
                                        Report
                                    </button>
                                </Link>
                                <Link 
                                    className={classnames("hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center", {
                                        'bg-gray-300' : location.pathname === '/monitoring'
                                    })}
                                    to={'/monitoring'}
                                    aria-current="page"
                                >
                                    {
                                        location.pathname === '/monitoring' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                            </svg>
                                        )
                                    }
                                    <button className={classnames("h-full w-auto", {
                                        'font-bold' : location.pathname === '/monitoring'
                                    })}>
                                        Monitoring
                                    </button>
                                </Link>
                                <Link 
                                    className={classnames("hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center", {
                                        'bg-gray-300' : location.pathname === '/checklist'
                                    })}
                                    to={'/checklist'}
                                    aria-current="page"
                                >
                                    {
                                        location.pathname === '/checklist' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        )
                                    }
                                    <button className={classnames("h-full w-auto", {
                                        'font-bold' : location.pathname === '/checklist'
                                    })}>
                                        Checklist
                                    </button>
                                </Link>
                                <Link 
                                    className={classnames("hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center", {
                                        'bg-gray-300' : location.pathname === '/inventory'
                                    })}
                                    to={'/inventory'}
                                    aria-current="page"
                                >
                                    {
                                        location.pathname === '/inventory' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                            </svg>
                                        )
                                    }
                                    <button className={classnames("h-full w-auto", {
                                        'font-bold' : location.pathname === '/inventory'
                                    })}>
                                        Inventory
                                    </button>
                                </Link>
                                <Link 
                                    className={classnames("hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center", {
                                        'bg-gray-300' : location.pathname === '/setting'
                                    })}
                                    to={'/setting'}
                                    aria-current="page"
                                >
                                    {
                                        location.pathname === '/setting' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                            </svg>
                                        )
                                    }
                                    <button className={classnames("h-full w-auto", {
                                        'font-bold' : location.pathname === '/setting'
                                    })}>
                                        Setting
                                    </button>
                                </Link>
                            </div>
                        }

                        <div className='w-full bg-gray-100 overflow-y-auto'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar