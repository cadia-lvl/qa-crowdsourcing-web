import { createGlobalStyle } from "styled-components";
import * as Colors from "../Colors";

export const GlobalStyle = createGlobalStyle`
    html, p, body {
        margin: 0;
        padding: 0;
    }

    body {

        overflow: none;
    }
    
    html, body {
        font-family: 'Quicksand', sans-serif;
        background: rgb(246,78,96);
        background: radial-gradient(circle, rgba(246,78,96,0.12) 0%, rgba(0,212,255,0) 100%);
        min-height: 100vh;
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
        color: ${Colors.PARAGRAPH_TEXT_COLOR};

        @media only screen and (max-width: 1300px) {
            font-size: 16px;
        }
        
    }

    h1 {
        color: ${Colors.HIGHLIGHT}
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
        background-color: $fff;
        border: 1px #bbb solid;
        border-radius: 3px;
        transition: 0.3s;
        background-color: #fff;
        :focus {
            outline: none;
            border: 1px ${Colors.HIGHLIGHT} solid;
        }

        @media only screen and (max-width: 1300px) {
            font-size: 16px;
        }

        
    }

    a {
        color: #0060B6;
        text-decoration: none;
    }

    a:hover 
    {
        color:#00A0C6; 
        text-decoration:none; 
        cursor:pointer;  
    }


`;
