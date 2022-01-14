import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import IconControl from '../icon/IconControl'

const ButtonSidebar = ({ location, path, label, ...rest }) => {

    return (
        <Link 
            className={classnames(`hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center`, {
                'bg-gray-300' : location === path
            })}
            to={path}
            aria-current="page"
        >
            <IconControl location={location} {...rest}/>

            <button className={classnames("h-full w-auto", {
                'font-bold' : location === path
            })}>
                {label}
            </button>
        </Link>
    )
}

export default ButtonSidebar
