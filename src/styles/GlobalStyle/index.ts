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
        font-family: 'Quicksand', sans-serif;
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
`;
