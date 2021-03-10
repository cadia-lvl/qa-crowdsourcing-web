import { createGlobalStyle } from "styled-components";
import * as Colors from "../Colors";

export const GlobalStyle = createGlobalStyle`
    html, p, body {
        margin: 0;
        padding: 0;
        background-color: ${Colors.BG_COLOR};
    }
    
    html, body {
    	height: 100%;
    	font-family: 'Nanum Gothic', sans-serif;
        font-family: 'Quicksand', sans-serif;
    }
`;
