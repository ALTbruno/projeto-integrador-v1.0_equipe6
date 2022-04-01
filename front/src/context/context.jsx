import { createContext, useState, useEffect} from 'react';
import React from 'react';

const Context = createContext()

function Auth({ children }) {
    const [logado, setLogado] = useState(false);
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setLogado(true);
        }
    }, []);
    
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