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
        localStorage.removeItem('token');
        // api.defaults.headers.common['Authorization'] = '';
        setLogado(false);
    }
    const handleLogin = (token, user) =>{
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        // api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setLogado(true);
    }


    return (
        <Context.Provider value={{ logado, handleLogout, handleLogin}}>
            {children}
        </Context.Provider>

    )
}

export { Context, Auth };