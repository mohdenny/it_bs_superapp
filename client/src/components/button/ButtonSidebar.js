import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import IconControl from '../icon/IconControl'

const ButtonSidebar = ({ location, path, label, ...rest }) => {

    return (
        <Link 
            className={classnames(`hover:bg-gray-200 h-11 w-full flex items-center px-7 space-x-1 text-sm`, {
                'bg-gray-300 font-bold' : location === path
            })}
            to={path}
            aria-current="page"
        >
            <IconControl location={location} path={path} {...rest}/>
            <p>{label}</p>
        </Link>
    )
}

export default ButtonSidebar
