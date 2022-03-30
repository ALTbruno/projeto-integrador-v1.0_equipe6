import { createContext, useState} from 'react';
import React, { Component } from 'react'

const Context = createContext()

function Auth({ children }) {
    const [logado, setLogado] = useState(false);
    
    const handleLogout = () => {
        localStorage.removeItem('user');
        setLogado(false);
    }
    const handleLogin = (user) =>{
        localStorage.setItem('user', JSON.stringify(user));
        setLogado(true);
    }


    return (
        <Context.Provider value={{ logado, handleLogout, handleLogin}}>
            {children}
        </Context.Provider>

    )
}

export { Context, Auth };