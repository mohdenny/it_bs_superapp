import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import Icon from '../icon/Icon'

const ButtonSidebar = ({ location, path, label, ...rest }) => {

    return (
        <Link 
            className={classnames(`hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center`, {
                'bg-gray-300' : location === '/dashboard'
            })}
            to={'/dashboard'}
            aria-current="page"
        >
            <Icon location={location} path={path} {...rest}/>
            
            <button className={classnames("h-full w-auto", {
                'font-bold' : location === '/dashboard'
            })}>
                {label}
            </button>
        </Link>
    )
}

export default ButtonSidebar
