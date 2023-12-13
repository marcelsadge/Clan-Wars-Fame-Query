import { createContext, useContext, useState } from "react";

const PageContext = createContext({context: "", navi: ""});

export function PageProvider({ children }) {
    const [pageContext, setPageContext] = useState({});

    return (
        <PageContext.Provider value={{pageContext, setPageContext}}>
            {children}
        </PageContext.Provider>
    );
}

export function usePageContext() {
    return useContext(PageContext);
}