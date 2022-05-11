import React, { useState } from 'react' // import react , hook
import { useLocation } from 'react-router-dom' // import react-router module
import { HiMenu, HiUserCircle } from 'react-icons/hi' // import react-icons
import ButtonControl from '../button/ButtonControl' // import component 

const logo = {
    text: 'IT BROADCAST',
    desc: 'Management System'
}

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
            <div className="flex flex-col font-poppins-regular h-screen">
                <nav className="bg-white px-8 py-1 border flex items-center justify-between h-20 w-full">
                    <div className="flex flex-row space-x-8 h-11">
                        <button className="h-11 w-11 flex items-center justify-center" onClick={() => setToggleMenu(!toggleMenu)}>
                            <HiMenu className='h-6 w-full'/>
                        </button>
                        <div className="flex flex-row space-x-2 items-center justify-center w-full h-full">
                            <img src={'/images/logo-metrotv.png'} alt='metrotv' className='object-contain object-center h-full w-auto' />
                            <div className='flex flex-col justify-center h-full'>
                                <p className="font-extrabold text-2xl italic font-poppins-bold">{logo.text}</p>
                                <p className="font-light text-xs font-poppins-regular">{logo.desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-1 items-center justify-center h-full">
                        <p>Mohdenny</p>
                        <HiUserCircle className='h-6 w-11'/>
                    </div>
                </nav>
                
                <div className='w-full h-full overflow-auto'>
                    <div className='flex flex-row h-full w-full'>
                        {
                            !toggleMenu &&
                            <div className="flex flex-col bg-white border-r border-gray-200 space-y-2 h-auto w-64 py-4">
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