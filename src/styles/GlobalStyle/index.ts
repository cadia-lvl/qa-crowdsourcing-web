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

    label {
        color: ${Colors.SUB_HEADING_COLOR};
        margin-bottom: 5px;
    }

    input[type=text], input[type=password] {
        outline: none;
        color: ${Colors.PARAGRAPH_TEXT_COLOR};
        border: none;
        padding: 10px 5px;
        box-sizing: border-box;
        background-color: ${Colors.FG_WHITE};
        border: 2px #bbb solid;
        border-radius: 3px;
        transition: 0.3s;
        :focus {
            outline: none;
            border: 2px ${Colors.HIGHLIGHT} solid;
        }
    }
`;
