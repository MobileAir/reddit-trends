import React, {useState} from 'react';


export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
    const [id, setId] = useState();
    const context = {
        setId,
        id
    };
    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    );
}