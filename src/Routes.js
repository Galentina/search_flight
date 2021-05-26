import React from 'react'
import { Route, Routes} from 'react-router-dom'
import HomePage from "./components/pages/home/HomePage";
import FlightsPage from "./components/pages/flights/FlightsPage";
import ClientsPage from "./components/pages/client/ClientsPage";

const useCompRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/flights" element={<FlightsPage />} />
                <Route path="/client" element={<ClientsPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </>
);
};

export default useCompRoutes;
