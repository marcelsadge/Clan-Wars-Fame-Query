import React from "react";
import styled from 'styled-components';

const ContactHomePage = styled.div`
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

function Contact() {
    return (
        <ContactHomePage>
            Information
        </ContactHomePage>
    );
}

export default Contact;