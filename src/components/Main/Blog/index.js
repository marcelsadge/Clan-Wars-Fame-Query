import React from "react";
import styled from 'styled-components';

const BlogHomePage = styled.div`
    display: flex;
    font-family: 'Secular One';
    background-color: #111111;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 290px;
    flex-wrap: wrap;
`;

function Blog() {
    return (
        <BlogHomePage>
            Information
        </BlogHomePage>
    );
}

export default Blog;