import { createGlobalStyle } from "styled-components";

export const Styled = createGlobalStyle`
    :root{
        --bg-color: #121922;
        --color-header: #43476E;
        --color-primary: #00ADFE;
        --container-width: 350px;
        --constainer-heigth: 488px;
        --title-size: 30px;
        --start-size: 15px;
        --thin: 100;
        --regular: 400;
        --medium: 500;
        --bold-title-header: 700;
        --poppins: 'Poppins', sans-serif;
        --radius-target: 15px;
        --w-img: 100%;
        --h-img: auto;
    }    
    img{
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html{
        font-size: 62.5%;
        box-sizing: border-box;
    }
    body{
        font-size: 16px;
        font-family: var(--poppins);
        background-color: var(--bg-color);
    }
`;
