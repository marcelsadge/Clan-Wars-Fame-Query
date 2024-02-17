import { createContext, useState } from "react";

const RecentContext = createContext([]);

const RecentProvider = props => {
    const [recentSearches, setRecentSearches] = useState([]);

    const recentContext = {
        recentsContext: recentSearches,
        setRecents: element => {
            setRecentSearches([...element]);
        }
    };

    return (
        <RecentContext.Provider value={recentContext}>
            {props.children}
        </RecentContext.Provider>
    );
};

export { RecentContext, RecentProvider };