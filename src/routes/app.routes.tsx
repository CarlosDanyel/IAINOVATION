import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Layout } from "./Layout/app";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contents" element={<About />} />
                <Route path="/events" element={<About />} />
                <Route path="/contact" element={<About />} />
            </Route>
        </Routes>
    );
};
