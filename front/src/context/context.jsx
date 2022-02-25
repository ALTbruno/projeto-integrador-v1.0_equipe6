import { createContext } from 'react';

const Context = createContext()

function Auth({ children }) {
    

    return (
        <Context.Provider value={{theme: "dark"}}>
            {children}
        </Context.Provider>

    )
}

export { Context, Auth };