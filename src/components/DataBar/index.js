import React, { useEffect, useContext } from "react";
import { RecentContext } from "../Context/recentcontext";
import { DataBarComponent, DataContainer, RecentSearchBox, SubTitleRow } from "./styles";

function DataBar() {
    const {recentSearches, setRecentSearches} = useContext(RecentContext);

    /*
    const RenderRecentSearches = () => {
        return recentSearches.map((element) => {
            <RecentSearchBox>
                {element}
            </RecentSearchBox>
        });
    };
    */

    useEffect(() => {

    }, [recentSearches]);

    return (
        <DataBarComponent>
            <DataContainer>
            </DataContainer>
        </DataBarComponent>
    );

}

export default DataBar;