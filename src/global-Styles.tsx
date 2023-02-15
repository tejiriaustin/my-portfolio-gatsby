import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        font-family: 'Sora', sans-serif;
        width: 100%;
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export const GlobalOpacity = styled.div``;
