import React from "react"
import FirstLine from "./FirstLine"
import SecondLine from "./SecondLine"

const MenuBarControl = ({ control, ...rest }) => {
    switch(control){
        case('first-line'):
            return <FirstLine {...rest}/>
        case('second-line'):
            return <SecondLine {...rest}/>
        default:
            return null
    }

}

export default MenuBarControl