import { createGlobalStyle } from "styled-components";
import * as Colors from "../Colors";

export const GlobalStyle = createGlobalStyle`
    html, p, body {
        margin: 0;
        padding: 0;
    }

    .border {

	border: 1px solid #cecece;
    }

    body {

        overflow: none;
    }
    
    html, body {
        font-family: 'Quicksand', sans-serif;
        background: #fafafa;
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

    .success {
        color: ${Colors.SUCCESS};
    }

    .danger {
        color: ${Colors.DANGER};
    }

    .bold {
        font-weight: 600;
    }

    .no-margin {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    p {
        line-height: 1.5;
        margin-top: 15px;
        font-size: 18px;
        color: ${Colors.PARAGRAPH_TEXT_COLOR};

        @media only screen and (max-width: 1300px) {
            font-size: 16px;
        }


        span.query {
            font-weight: 600;
        }
        
    }

    h1 {
        color: ${Colors.HIGHLIGHT};
    }
    h1.italic {
            font-family: "Merriweather", serif !important;
            font-style: italic !important;
            margin-bottom: 0  !important;
        }

    label {
        color: ${Colors.SUB_HEADING_COLOR};
        margin-bottom: 5px;
    }

    input[type=text], input[type=password], textarea {
        outline: none;
        color: ${Colors.PARAGRAPH_TEXT_COLOR};
        border: none;
        padding: 10px 5px;
        box-sizing: border-box;
        background-color: $fff;
        border: 1px #bbb solid !important;
        border-radius: 3px;
        transition: 0.3s;
        background-color: #fff;
        :focus {
            outline: none;
            border: 1px ${Colors.HIGHLIGHT} solid!important;
        }

        @media only screen and (max-width: 1300px) {
            font-size: 16px;
        }

        
    }

    a {
        color: #666;
        text-decoration: none;
    }

    a:hover 
    {
        color:#00A0C6; 
        text-decoration:none; 
        cursor:pointer;  
    }

    .clickable {
        cursor: pointer;
    }
    
    .no-pointer-events {

        pointer-events: none;
    }

    .no-highlight {
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }


`;
