import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs, darkMode}) {
    return (<Box mt={'3rem'}>
        <Home innerRef={refs.refHome}/>
        <About innerRef={refs.refAbout} darkMode={darkMode}/>
        <Portfolio innerRef={refs.refPortfolio}/>
    </Box>)
}