import { createGlobalStyle } from "styled-components";
import * as Colors from "../Colors";

export const GlobalStyle = createGlobalStyle`
    html, p, body {
        margin: 0;
        padding: 0;
    }
    
    html, body {
    	height: 100%;
        font-family: 'Quicksand', sans-serif;
        background: rgb(246,78,96);
        background: radial-gradient(circle, rgba(246,78,96,0.12) 0%, rgba(0,212,255,0) 100%);
    }

    .header-itm {
        color: ${Colors.SUB_HEADING_COLOR};
        transition: 0.3s;
        font-size: 18px;
        cursor: pointer;
        :hover { 
            color: ${Colors.HEADING_COLOR};
        }
    }

    p {
        line-height: 1.5;
        margin-top: 15px;
        font-size: 18px;
    }
`;
