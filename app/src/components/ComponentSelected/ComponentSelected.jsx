import React, { createContext, useContext, useState } from "react";

const SelectedComponentsContext = createContext();

export const useSelectedComponents = () => useContext(SelectedComponentsContext);

export function SelectedComponentsProvider({children}) {
    const [selectedComponents, setSelectedComponents] = useState({});

    const updateComponent = (type, data) => {
        setSelectedComponents((prevComponents) => ({
            ...prevComponents,
            [type]: data,
        }));
    };


    return (
        <SelectedComponentsContext.Provider value={{ selectedComponents, updateComponent }}>
            {children}
        </SelectedComponentsContext.Provider>
    )
}