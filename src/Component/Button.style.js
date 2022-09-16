import React from "react";
import styled from "styled-components"

export const Button = styled.div`
    width:300px;
    height: 200px;
    background-color: ${(props) => props.backgroundColor};

    &:hover{
        background-color: blue;
        & label{
            background-color: lightblue;
        }
    }
    
`;

export const ButtonLable =styled.label`
    font: 100;
    color:white;
`