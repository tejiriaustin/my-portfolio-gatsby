import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Sora Regular';
        src: url(https://fonts.googleapis.com);
    }
    html{
        font-family: 'Sora', sans-serif;
    }
`;
