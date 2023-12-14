import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonGroup } from '@material-ui/core';
import {
    SearchContainer,
    ButtonContainer,
    SearchForm,
    SearchBox,
    SearchInput,
    ServerButton
} from './styles';

function CampaignSearchBar({ search, setSearch, placeholder }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(search);
    };

    return (
        <SearchContainer>
            <SearchForm onSubmit={handleSubmit}>
                <SearchBox>
                    <SearchInput
                        placeholder= {placeholder}
                        value={search} 
                        onChange={(e) => {setSearch(e.target.value)}}
                    />
                </SearchBox>
            </SearchForm>
        </SearchContainer>
    );
}

export default CampaignSearchBar;