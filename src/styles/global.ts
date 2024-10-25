import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .block {
        animation: appear linear;
        animation-timeline: view();
        animation-range: entry 0% cover 40%;
    }

    @keyframes appear {
        from {
            opacity: 0;
            clip-path: inset(100% 100% 0 0);
        }
        to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
        }
    }
`;
