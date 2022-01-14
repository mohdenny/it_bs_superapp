import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ButtonControl from '../button/ButtonControl'

const valuesButtonSidebar = [
    { icon: 'home', button: 'sidebar', label: 'Home', path: '/dashboard' },
    { icon: 'globe', button: 'sidebar', label: 'Explore', path: '/explore' },
    { icon: 'ticket', button: 'sidebar', label: 'Ticket', path: '/ticket' },
    { icon: 'report', button: 'sidebar', label: 'Report', path: '/report' },
    { icon: 'monitor', button: 'sidebar', label: 'Monitoring', path: '/monitoring' },
    { icon: 'check', button: 'sidebar', label: 'Checklist', path: '/checklist' },
    { icon: 'inventory', button: 'sidebar', label: 'Inventory', path: '/inventory' },
    { icon: 'setting', button: 'sidebar', label: 'Setting', path: '/setting' },
]

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
                                {
                                    valuesButtonSidebar.map((item, index) => {
                                        return (
                                            <ButtonControl
                                                key={index}
                                                control={item.button}
                                                icon={item.icon}
                                                label={item.label}
                                                location={location.pathname}
                                                path={item.path}
                                            />
                                        )
                                    })
                                }
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