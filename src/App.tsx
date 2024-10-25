import { Helmet, HelmetProvider } from "react-helmet-async";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <>
            <HelmetProvider>
                <Helmet titleTemplate="%s | IAInnovation" />
                <Routes />
                <GlobalStyle />
            </HelmetProvider>
        </>
    );
}

export default App;
