

import React from 'react'
import { Navigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const ProductRoute = ({children}) => {
    const {user} = UserAuth()

    if(!user){
        return <Navigate to = '/'/>
    }else{
        console.log(`children`,children)
        return children
    }
}

export default ProductRoute
