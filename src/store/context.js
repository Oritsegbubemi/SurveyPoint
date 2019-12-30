import React, { useState } from 'react'

export const  Context = React.createContext();

export const  Provider = (props) => {
    const [sidebar, setSidebar] = useState({
        openSidebar: false
      });
    
      const toggleSidebar = () => {
        setSidebar({ openSidebar: !sidebar.openSidebar });
      };
        return (
            <Context.Provider value={{sidebar, toggleSidebar}}>
                {props.children}
            </Context.Provider>
        )
    }


export const Consumer = Context.Consumer;