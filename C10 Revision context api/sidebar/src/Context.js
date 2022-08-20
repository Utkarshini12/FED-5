// create , provider, consumer 

import {createContext, useContext, useState} from 'react'; 

// 1 . Create  a context 

const AppContext = createContext(); 

// 2. CReate a provider for the sidebar 

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        console.log("***")
        setIsSidebarOpen(false)
    }

    return (
        // to make the component provider , add this on top level 
        <AppContext.Provider value={{openSidebar, closeSidebar, isSidebarOpen}}>
            {children}
        </AppContext.Provider>
    )

}

// custom hook that is going to perform the consumer functionality in context 

const useGlobalContext = () => {
    return useContext(AppContext)
}

// returning all the values the provider is providing : openSidebar, closeSidebar, isSidebarOpen


export {AppContext, AppProvider, useGlobalContext}